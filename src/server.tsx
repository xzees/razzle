import express from "express";
import React from "react";
import RootStore from "stores";
import { renderToString } from "react-dom/server";
import compression from "compression";
import { StaticRouter } from "react-router-dom";
import { ServerStyleSheet } from "styled-components";
import { ServerStyleSheets, ThemeProvider } from "@material-ui/styles";
import { Capture } from "react-loadable";
import serialize from 'serialize-javascript'
import { getBundles } from "react-loadable/webpack";
import theme from "theme";
import { html as htmlTemplate, oneLineTrim } from "common-tags";
import Routes from "routes";
import { Helmet } from 'react-helmet';
import expressStaticGzip from 'express-static-gzip';
import { BrandEnum } from "common/enumerations/BrandEnum";
import ThemeManager from "utilities/ThemeManager";
const themes = ThemeManager.setupTheme(BrandEnum.TTC);
import { dehydrate } from 'utilities/hydrate';
import { runtimeConfig } from 'common/Config/Config';
import ConfigurationManager from 'common/Manager/ConfigurationManager';
import HotelGateway from "modules/hotel/gateway/HotelGateway";
import CollectiveGateway from "modules/collective/gateway/CollectiveGateway";
import { createServerContext } from 'utilities/useSSE';
import InitializeManager from "common/Manager/InitializeManager";
import _ from 'lodash';
import path from 'path'
import DynamicRouteManager from 'common/Manager/DynamicRouteManager';
import HealthCheckMiddleware from 'middlewares/HealthCheckMiddleware';

const isProduction = process.env.NODE_ENV == "production";
let assets: any;
const syncLoadAssets = () => {
  assets = require(process.env.RAZZLE_ASSETS_MANIFEST!);
};
syncLoadAssets();

const productionMiddlewares = isProduction ? [compression()] : [compression()];
const HELMET_ATTRIBUTE_REGEXP = / data-react-helmet="true"/g;

DynamicRouteManager.default.fetch()
DynamicRouteManager.default.runFetchInterval()

const GoogleBotAgents = [
  'googlebot',
  'google-structured-data-testing-tool',
  'bingbot',
  'linkedinbot',
  'mediapartners-google',
  'chrome-lighthouse'
];

const server = express()
  .disable("x-powered-by")
  .use(...productionMiddlewares)
  .use(process.env.PUBLIC_PATH || '', express.static(process.env.RAZZLE_PUBLIC_DIR!))
  .use('/hz', HealthCheckMiddleware)
  .use('*', CollectiveGateway)
  .use('/collective', CollectiveGateway)
  .use('/hotel', HotelGateway)
  // .use(
  //   expressStaticGzip(process.env.RAZZLE_PUBLIC_DIR || '', {
  //     enableBrotli: true,
  //     orderPreference: ['br', 'gz'],
  //   }),
  // )
  .use(async (req, res) => {

    const userAgent = req.headers['user-agent']?.toLowerCase() || '';
    const isBotAgent = _.some(GoogleBotAgents.map(x => userAgent.indexOf(x) >= 0));
    const isMobileBotAgent = isBotAgent && userAgent.indexOf('mobile') >= 0;

    /** IMPORTANT: RootStore.create() must be called before the other. */
    RootStore.create();
    RootStore.default.setThemeStore(themes);

    if (isBotAgent) RootStore.default.ScreenStore.botType = 'desktop';
    if (isMobileBotAgent) RootStore.default.ScreenStore.botType = 'mobile';

    const routerContext: any = {};
    const modules: any[] = [];
    const sheet = new ServerStyleSheet();
    const materialSheet = new ServerStyleSheets();
    const { ServerDataContext, resolveData } = createServerContext();

    const dehydratedState = dehydrate({
      data: (req as any).DataGateway,
      route: DynamicRouteManager.default.route
    })

    const dataGateway = (req as any)?.DataGateway
    InitializeManager.default.rehydrate(dehydratedState);

    const markup = renderToString(
      <ServerDataContext>
        {sheet.collectStyles(
          materialSheet.collect(
            <Capture report={(moduleName) => modules.push(moduleName)}>
              <ThemeProvider theme={theme}>
                <StaticRouter location={req.url} context={routerContext}>
                  <Routes />
                </StaticRouter>
              </ThemeProvider>
            </Capture>
          )
        )}
      </ServerDataContext>
    );
    const css = materialSheet.toString();
    const styleTags = sheet.getStyleTags();
    const data = await resolveData();

    if (routerContext.url) {
      res.status(302).setHeader("Location", routerContext.url);
      res.end();
      return;
    }

    const stats = require("../dist/react-loadable.json").default;
    const bundles = getBundles(stats as any, modules);
    const chunks = bundles.filter((bundle) => bundle.file.endsWith(".js"));
    const styles = bundles.filter((bundle) => bundle.file.endsWith(".css"));

    let seo = [];
    if (data?.data[0]?.data.length > 0) {
      seo = (data?.data[0]?.data?.map((v: any) => v.seo));
    }
    res.status(routerContext.missed ? 404 : routerContext.serverStatusCode || 200)
      .send(
        oneLineTrim(
          htmlTemplate`<!doctype html>
          <html lang="th">
          <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="language" content="th">
          ${runtimeConfig.ENV_NAME !== 'production' ? `
            <meta name="robots" content="noindex,nofollow">
          ` : `
            <meta name="robots" content="index,follow">
          `}
          <meta name="author" content="ThaitravelCenter.com" />
          <link rel="shortcut icon" href="https://www.thaitravelcenter.com/favicon.ico">
          ${dataGateway?.seo?.title != undefined && `<title>${dataGateway?.seo?.title}</title>`}
          ${dataGateway?.seo?.metadata?.map((key: any, x: any) => {
            let property = ""
            for (const __key in key) {
              property += __key + '="' + key[__key] + '" '
            }
            return (
              `<meta ${property} />`
            )
          })}
          ${(seo && seo.length > 0) && `<title>${seo[0]?.title}</title>`}
          
          ${(seo && seo.length > 0) && seo[0]?.metadata?.map((key: any, x: any) => {
            let property = ''
            for (const __key in key) {
              property += __key + '="' + key[__key] + '" '
            }
            return `<meta ${property} />`;
          })}
          <meta property="fb:app_id" content="191364109480">
          <meta property="og:title" content="${dataGateway?.seo?.title ? dataGateway?.seo?.title : `บริษัททัวร์คุณภาพ ชั้นนำ ท่องเที่ยวครบวงจร - ไทยทราเวลเซ็นเตอร์`}">
          <meta property="og:site_name" content="Thai Travel Center">
          <meta property="og:description" content="${dataGateway?.seo?.description ? dataGateway?.seo?.description : `โลกทั้งใบอยู่ใกล้แค่เอื้อม ด้วยบริการท่องเที่ยวดีดี ตั๋วเครื่องบิน แพคเกจทัวร์ จองโรงแรม บริการจัดทัวร์ครบวงจร เที่ยวไปได้ทั่วโลกกับบริษัทท่องเที่ยวคุณภาพ`}">
          <meta property="og:image" content="https://www.thaitravelcenter.com/webdatas/image/fb-opengraph-thaitravelcenter.jpg">
          <meta property="og:type" content="website">
          <meta property="og:url" content="https://www.thaitravelcenter.com${req.url != '/' ? req.url : ``}">
          <script type="application/ld+json">{"@context":"http://schema.org","@type":"Organization","name":"ThaitravelCenter.com","alternateName":"ไทยทราเวลเซ็นเตอร์","url":"https://www.thaitravelcenter.com","logo":"https://www.thaitravelcenter.com/template/theme/images/TTC-Logo.png","contactPoint":{"@type":"ContactPoint","telephone":"+66-02-171-9999","contactType":"customer service","areaServed":"TH","availableLanguage":["Thai","en"]},"sameAs":["https://twitter.com/thaitravelenter","https://www.facebook.com/thaitravelcenter","https://www.youtube.com/thaitravelcenter","https://www.instagram.com/thaitravelcenter"],"address":{"@type":"PostalAddress","streetAddress":"3455 TTC Park Tower, Rama 9 Rd., Suanluang","addressRegion":"BKK","postalCode":"10250","addressCountry":"TH"}}</script>
          <meta name="google-site-verification" content="FX8OfOmVhgYoqWlRXTNN6x6Q-NT1SHuV1lJ79VrR4mg" />
          ${!isBotAgent ?
              isProduction ?
                `<link rel="prefetch" href="${process.env.PUBLIC_PATH}static/assets/fonts/DBHeaventRounded/DBHeaventRoundedv32.woff2" as="font" type="font/woff2" crossorigin>
            <link rel="prefetch" href="${process.env.PUBLIC_PATH}static/assets/fonts/DBHeaventRounded-Med/DBHeaventRoundedMedv32.woff2" as="font" type="font/woff2" crossorigin>
            <link rel="prefetch" href="${process.env.PUBLIC_PATH}static/assets/fonts/Sarabun/Sarabun-Regular.woff2" as="font" type="font/woff2" crossorigin>
            <link rel="preload" href="${process.env.PUBLIC_PATH}static/assets/fonts/font.css" as="style" crossorigin>
            <link rel="stylesheet" href="${process.env.PUBLIC_PATH}static/assets/fonts/font.css" as="style" crossorigin>` : ``
              :
              `<link href="/static/assets/fonts/DBHeaventRounded/DBHeaventRoundedv32.woff2" as="font" type="font/woff2" crossorigin>
            <link href="/static/assets/fonts/DBHeaventRounded-Med/DBHeaventRoundedMedv32.woff2" as="font" type="font/woff2" crossorigin>
            <link href="/static/assets/fonts/Sarabun/Sarabun-Regular.woff2" as="font" type="font/woff2" crossorigin>
            <link href="/static/assets/fonts/font.css" as="style" crossorigin>
            <link rel="stylesheet" href="/static/assets/fonts/font.css" as="style" crossorigin>`
            }
          ${assets.client.css ? `<link rel="preload" href="${assets.client.css}" as="style" >` : ""}
          ${assets.client.css ? `<link rel="stylesheet" href="${assets.client.css}" as="style" rel="preload">` : ""}
          ${styles.map((style) => {
              return `<link href="${style.file}" rel="preload"/>`;
            }).join("\n")}
          
          ${css ? `<style id='jss-ssr'>${css}</style>` : ""}
          <!-- Render the style tags gathered from the components into the DOM -->
          `
        ) +
        `${styleTags}` +
        oneLineTrim(
          htmlTemplate`
          ${ !isBotAgent ? `
          <!-- Google Tag Manager --><script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WXXQ6QQ');</script><!-- End Google Tag Manager -->
          <style>
            body { overflow: overlay; overflow-x: hidden; padding: 0 !important; }
            .MuiPopover-root { z-index:10000 !important; }
            .d-none { display: none !important; }
            @media(min-width:600px) { .d-md-none { display: none !important } .d-md-block { display: block !important } }
            body::-webkit-scrollbar { border-radius: 5px; width: 6px; }
            body::-webkit-scrollbar-thumb { background-color: #409; border: 1px solid #420999; border-radius: 5px; }
          </style>
          <link rel="dns-prefetch" href="https://lvs.truehits.in.th" >
          <link rel="dns-prefetch" href="https://connect.facebook.net" >
          <link rel="dns-prefetch" href="https://www.google-analytics.com" >
          <link rel="dns-prefetch" href="https://www.googleadservices.com" >
          <link rel="dns-prefetch" href="https://www.googletagmanager.com/ns.html?id=GTM-WXXQ6QQ" >   
          <link rel="dns-prefetch" href="https://googleads.g.doubleclick.net" > 
          <link rel="dns-prefetch" href="https://stats.g.doubleclick.net" >
          ` : ''}
          ${data.toHtml()}
          </head>
          <body>
          ${ !isBotAgent ? `<!-- Google Tag Manager (noscript) --><noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WXXQ6QQ" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript><!-- End Google Tag Manager (noscript) -->` : ''}
         
          ${chunks.map((chunk) =>
            isProduction
              ? `<script src="${process.env.PUBLIC_PATH}${chunk.file}"></script>`
              : `<script src="http://${process.env.HOST}:${
              parseInt(process.env.PORT || "", 10) + 1
              }/${chunk.file}" async defer></script>`
          ).join("\n")
            }
          <main id="root">${markup}</main>
          ${ !isBotAgent ? (isProduction ? `<script src="${assets.client.js}" defer></script><script type="text/javascript" src="https://www.thaitravelcenter.com/template/theme/js/lazysizes.min.js"></script>` : `<script type="text/javascript" src="https://www.thaitravelcenter.com/template/theme/js/lazysizes.min.js"></script><script src="${assets.client.js}?v=${Math.random()}"  async crossorigin></script>`) : ''}
          <script>window.env = ${serialize(runtimeConfig)};</script>
          <script>try{ window.main(); } catch(error) {}</script>
          <script id="__STATE">window.__STATE = ${dehydratedState}</script>
          </body>
          </html>`
        )
      );
  });

export default server;