import React, { Fragment, useEffect, useState, useLayoutEffect } from "react";
import { inject, observer } from "mobx-react";
import RootStore from "stores";
import { ThemeProvider } from "styled-components";
import { ResetCSS } from "common/src/assets/css/style";
import { GlobalStyle } from "common/containers/Crypto/crypto.style";
import qs from "query-string";
import HotelManager from "modules/hotel/Manager/HotelManager";
import { cryptoTheme } from "common/src/theme/crypto";
import _ from "lodash";
import APIJSONResponse from "modules/hotel/models/APIJSONResponse";
import { START_DATE } from "@datepicker-react/styled";
import LoadableComponents from "common/components/LoadableComponents";
import Content from "./Content";
import { scroller } from "react-scroll";
import useInfiniteScroll from "react-infinite-scroll-hook";
import { useTheme, useMediaQuery } from "@material-ui/core";
import InitializeManager from "common/Manager/InitializeManager";
import {
  SectionDesktop,
  Containers,
} from "modules/hotel/component/SearchHotel/Style";

import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import MenuBar from "modules/hotel/component/MenuBar";
import NavigationManager from "common/Manager/NavigationManager";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import i18n from 'utilities/I18n';

interface Iprops {
  className?: string;
  stores?: RootStore;
  location: any;
}

const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

const changeTitle = (param: string) => {
  if (param === "incremental_price") {
    return i18n.t('hotel.pages.roomlist.info.roomprice');
  }
  return param;
};

const changeTitleDetail = (param: string) => {
  if (param === "incremental_price") {
    return i18n.t('hotel.search.room');
  }
  return "";
};

const isKeyImage = (param: string, path: any) => {
  if (
    param == "url_square60" ||
    param == "url_original" ||
    param == "url_max300"
  ) {
    return <img src={path} />;
  }
  return path;
};

const ObjLoop = (v: any, key: any, titledetail: any = "") => {
  return Object.keys(v).map((vin: any, index: number) => {
    if (key == "payment_terms") {
    }
    return (
      <Accordion key={index} square>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-content"
          id="panela-header"
        >
          <Typography
            component="span"
            style={{
              fontSize: 30,
            }}
          >
            {key} {parseInt(vin) >= 0 ? parseInt(vin) + 1 : vin} {titledetail}
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          style={{
            display: "block",
          }}
        >
          {v instanceof Array &&
            v.length > 0 &&
            Object.keys(v[vin]).map((vins: any, indexs: number) => {
              return (
                <div key={indexs} style={{ wordBreak: "break-all" }}>
                  <Typography
                    component="span"
                    style={{
                      fontSize: 30,
                    }}
                  >
                    <b>{vins}</b> :{" "}
                    {(typeof v[vin][vins] == "number" ||
                      typeof v[vin][vins] == "boolean" ||
                      typeof v[vin][vins] == "string") &&
                      isKeyImage(vins, v[vin][vins].toString())}
                    {!(v[vin][vins] instanceof Array) &&
                      typeof v[vin][vins] == "object" &&
                      v[vin][vins] != null &&
                      ObjLoop(
                        v[vin][vins],
                        changeTitle(vins),
                        changeTitleDetail(vins)
                      )}
                    {v[vin][vins] instanceof Array &&
                      v[vin][vins].length > 0 &&
                      ObjLoop(
                        v[vin][vins],
                        changeTitle(vins),
                        changeTitleDetail(vins)
                      )}
                  </Typography>
                </div>
              );
            })}

          {!(v instanceof Array) && typeof v == "object" && v != null && (
            <>
              <div style={{ wordBreak: "break-all" }}>
                <Typography
                  component="span"
                  style={{
                    fontSize: 30,
                  }}
                >
                  <b>{vin}</b> :{" "}
                  {(typeof v[vin] == "number" ||
                    typeof v[vin] == "boolean" ||
                    typeof v[vin] == "string") &&
                    isKeyImage(vin, v[vin].toString())}
                  {!(v[vin] instanceof Array) &&
                    typeof v[vin] == "object" &&
                    v[vin] != null &&
                    ObjLoop(v[vin], changeTitle(vin), changeTitleDetail(vin))}
                  {v[vin] instanceof Array &&
                    v[vin].length > 0 &&
                    ObjLoop(v[vin], changeTitle(vin), changeTitleDetail(vin))}
                </Typography>
              </div>
            </>
          )}
        </AccordionDetails>
      </Accordion>
    );
  });
};

const info = inject("stores")(
  observer((props: Iprops) => {
    const isClient = typeof window === "object";
    if (isClient) {
      const [hotelState, setHotelState] = React.useState("hotel");

      const handleChangeHotel = (panel: any) => (
        event: any,
        newExpanded: any
      ) => {
        setHotelState(newExpanded ? panel : false);
      };

      const [roomState, setroomState] = React.useState("room");

      const handleChangeroom = (panel: any) => (
        event: any,
        newExpanded: any
      ) => {
        setroomState(newExpanded ? panel : false);
      };

      const data: any = InitializeManager.default.get()?.data.data;
      const uiStore = props.stores!.HotelRootStore;
      uiStore.setValueByUrl(props.location);

      const html: any = "";
      const data_html = { ...data };
      const locationSearch = props.location.search;
      function renderTableData(value: any) {
        return (
          <>
            <Accordion square expanded={true}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panela-content"
                id="panela-header"
              >
                <Typography
                  component="span"
                  style={{
                    fontSize: 30,
                  }}
                >
                  {i18n.t('hotel.pages.roomlist.info.roomdetail')}
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography
                  component="span"
                  style={{
                    fontSize: 30,
                  }}
                >
                  {value.block.map((v: any, keys: number) => {
                    return (
                      <>
                        <Accordion key={keys} square>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel-content"
                            id="panela-header"
                          >
                            <Typography
                              component="span"
                              style={{
                                fontSize: 30,
                              }}
                            >
                              Block
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails
                            style={{
                              display: "block",
                            }}
                          >
                            {ObjLoop(v, i18n.t('hotel.search.room'))}
                          </AccordionDetails>
                        </Accordion>
                      </>
                    );
                  })}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </>
        );
      }

      function renderTableDataHotel(value: any) {
        const images_url_original: any = [];
        const images_url_max300: any = [];
        const images_url_square60: any = [];
        for (const a of value.hotel_info.hotel_photos) {
          images_url_original.push({
            original: a.url_original,
            thumbnail: a.url_square60,
          });
          images_url_max300.push({
            original: a.url_max300,
            thumbnail: a.url_square60,
          });
          images_url_square60.push({
            original: a.url_square60,
            thumbnail: a.url_square60,
          });
        }

        return (
          <>
            <Accordion
              square
              expanded={hotelState === "hotel"}
              onChange={handleChangeHotel("hotel")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panela-content"
                id="panela-header"
              >
                <Typography
                  component="span"
                  style={{
                    fontSize: 30,
                  }}
                >
                  {i18n.t('hotel.pages.roomlist.desktop.hoteldesc')}
                </Typography>
              </AccordionSummary>

              <AccordionDetails style={{ display: "block" }}>
                <Typography
                  component="div"
                  style={{
                    fontSize: 20,
                  }}
                >
                  <Accordion square>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panela-content"
                      id="panela-header"
                    >
                      <Typography
                        component="span"
                        style={{
                          fontSize: 20,
                        }}
                      >
                        images_url_original
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{ display: "block" }}>
                      <ImageGallery
                        showPlayButton={false}
                        showBullets={false}
                        items={images_url_original}
                      />
                    </AccordionDetails>
                  </Accordion>
                </Typography>
                <Typography
                  component="div"
                  style={{
                    fontSize: 20,
                  }}
                >
                  <Accordion square>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panela-content"
                      id="panela-header"
                    >
                      <Typography
                        component="span"
                        style={{
                          fontSize: 20,
                        }}
                      >
                        images_url_max300
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{ display: "block" }}>
                      <ImageGallery
                        showPlayButton={false}
                        showBullets={false}
                        items={images_url_max300}
                      />
                    </AccordionDetails>
                  </Accordion>
                </Typography>
                <Typography
                  component="div"
                  style={{
                    fontSize: 20,
                  }}
                >
                  <Accordion square>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panela-content"
                      id="panela-header"
                    >
                      <Typography
                        component="span"
                        style={{
                          fontSize: 20,
                        }}
                      >
                        images_url_square60
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{ display: "block" }}>
                      <ImageGallery
                        showPlayButton={false}
                        showBullets={false}
                        items={images_url_square60}
                      />
                    </AccordionDetails>
                  </Accordion>
                </Typography>

                {[
                  "name",
                  "hotel_description",
                  "address",
                  "class",
                  "city",
                  "city_id",
                  "class_is_estimated",
                  "country",
                  "creditcard_required",
                  "currency",
                  "default_language",
                  "exact_class",
                  "hotel_important_information",
                  "hotel_type_id",
                  "is_closed",
                  "ranking",
                  "zip",
                ].map((v: any, keys: number) => {
                  return (
                    <Typography
                      key={keys}
                      component="div"
                      style={{
                        fontSize: 20,
                      }}
                    >
                      <b>{v}</b> :{" "}
                      {value["hotel_info"][v] &&
                        value["hotel_info"][v].toString()}
                    </Typography>
                  );
                })}

                {["spoken_languages", "theme_ids"].map(
                  (v: any, keys: number) => {
                    return (
                      <Typography
                        key={keys}
                        component="div"
                        style={{
                          fontSize: 20,
                        }}
                      >
                        <b>{v}</b> :{" "}
                        {value["hotel_info"][v] &&
                          value["hotel_info"][v].join(",").toString()}
                      </Typography>
                    );
                  }
                )}
                {[
                  "can_pay_now",
                  "cc_required",
                  "checkin",
                  "checkout",
                  "cvc_required",
                  "direct_payment",
                  "hotel_id",
                  "hotel_url",
                  "is_flash_deal",
                ].map((v: any, keys: number) => {
                  return (
                    <Typography
                      key={keys}
                      component="div"
                      style={{
                        fontSize: 20,
                      }}
                    >
                      <b>{v}</b> : {value[v] && value[v].toString()}
                    </Typography>
                  );
                })}
                {["checkin_checkout_times", "payment_options", "location"].map(
                  (v: any, k: number) => {
                    return (
                      <Typography
                        key={k}
                        component="div"
                        style={{
                          fontSize: 20,
                        }}
                      >
                        <b>{v}</b> :{" "}
                        {Object.keys(value["hotel_info"][v]).map(
                          (a: any, keys: number) => {
                            return (
                              <Typography
                                key={keys}
                                component="div"
                                style={{
                                  fontSize: 20,
                                  textIndent: "15px",
                                }}
                              >
                                - <b>{a}</b> :{" "}
                                {value["hotel_info"][v][a].toString()}
                              </Typography>
                            );
                          }
                        )}
                      </Typography>
                    );
                  }
                )}

                {["hotel_policies", "payment_details"].map(
                  (v: any, keys: number) => {
                    return (
                      <Typography
                        key={keys}
                        component="div"
                        style={{
                          fontSize: 20,
                        }}
                      >
                        <b>{v}</b> :{" "}
                        {Array.isArray(value["hotel_info"][v]) &&
                          (value["hotel_info"][v] as any).map(
                            (vs: any, kk: number) => {
                              return (
                                <Typography
                                  key={kk}
                                  component="div"
                                  style={{
                                    fontSize: 20,
                                    textIndent: "15px",
                                  }}
                                >
                                  <Typography
                                    key={kk}
                                    component="div"
                                    style={{
                                      fontSize: 20,
                                      textIndent: "15px",
                                    }}
                                  >
                                    - <b>{kk + 1}</b> :
                                  </Typography>
                                  {Object.keys(vs).map(
                                    (a: any, keyss: number) => {
                                      return (
                                        <Typography
                                          key={keyss}
                                          component="div"
                                          style={{
                                            fontSize: 20,
                                            textIndent: "30px",
                                          }}
                                        >
                                          - <b>{a}</b> : {vs[a].toString()}
                                        </Typography>
                                      );
                                    }
                                  )}
                                </Typography>
                              );
                            }
                          )}
                      </Typography>
                    );
                  }
                )}

                {["facility"].map((v: any, keys: number) => {
                  return (
                    <Typography
                      key={keys}
                      component="div"
                      style={{
                        fontSize: 20,
                      }}
                    >
                      <b>{v}</b> :{" "}
                      {Array.isArray(value["hotel_info"][v]) &&
                        (value["hotel_info"][v] as any).map(
                          (vs: any, kk: number) => {
                            return (
                              <Typography
                                key={kk}
                                component="div"
                                style={{
                                  fontSize: 20,
                                  textIndent: "15px",
                                }}
                              >
                                <Typography
                                  key={kk}
                                  component="div"
                                  style={{
                                    fontSize: 20,
                                    textIndent: "15px",
                                  }}
                                >
                                  -{" "}
                                  <b>
                                    {vs.tagGroup["th"] || vs.tagGroup["en"]}
                                  </b>{" "}
                                  :
                                </Typography>
                                {Array.isArray(vs.hotel_facility) &&
                                  (vs.hotel_facility as any).map(
                                    (vss: any, kkk: number) => {
                                      return (
                                        <Typography
                                          key={kkk}
                                          component="div"
                                          style={{
                                            fontSize: 20,
                                            textIndent: "30px",
                                          }}
                                        >
                                          - {vss.tag.th.toString()}
                                        </Typography>
                                      );
                                    }
                                  )}
                              </Typography>
                            );
                          }
                        )}
                    </Typography>
                  );
                })}
              </AccordionDetails>
            </Accordion>
          </>
        );
      }
      function renderTableDataRoom(value: any) {
        const images_url_original: any = [];
        const images_url_max300: any = [];
        const images_url_square60: any = [];
        // for(const a of value.hotel_info.hotel_photos){
        //   images_url_original.push({
        //     original: a.url_original,
        //     thumbnail: a.url_square60,
        //   })
        //   images_url_max300.push({
        //     original: a.url_max300,
        //     thumbnail: a.url_square60,
        //   })
        //   images_url_square60.push({
        //     original: a.url_square60,
        //     thumbnail: a.url_square60,
        //   })
        // }

        return (
          <>
            <Accordion
              square
              expanded={roomState === "room"}
              onChange={handleChangeroom("room")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panela-content"
                id="panela-header"
              >
                <Typography
                  component="span"
                  style={{
                    fontSize: 30,
                  }}
                >
                  {i18n.t('hotel.pages.roomlist.info.roomdetail')}
                </Typography>
              </AccordionSummary>

              <AccordionDetails style={{ display: "block" }}>
                {value.map((value_v: any, value_k: number) => {
                  if (Array.isArray(value_v)) {
                    return (
                      <Accordion key={value_k} expanded={true}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panela-content"
                          id="panela-header"
                        >
                          <Typography
                            component="span"
                            style={{
                              fontSize: 20,
                              color: "#409",
                            }}
                          >
                            <b>{value_v[0].room_name}</b>
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails style={{ display: "block" }}>
                          {value_v.map((value_vv: any, value_kk: number) => {
                            return (
                              <>
                                <Typography
                                  key={value_kk}
                                  component="div"
                                  style={{
                                    fontSize: 20,
                                    marginTop: 10,
                                    color: "#009780",
                                  }}
                                >
                                  <b>block_id: {value_vv.block_id} </b>
                                </Typography>
                                {Object.keys(value_vv)
                                  .sort()
                                  .map((kkk_t: any, value_kkk: number) => {
                                    if (
                                      typeof value_vv[kkk_t] === "string" ||
                                      typeof value_vv[kkk_t] === "boolean"
                                    ) {
                                      return (
                                        <Typography
                                          key={value_kkk}
                                          component="div"
                                          style={{
                                            fontSize: 20,
                                            textIndent: "15px",
                                          }}
                                        >
                                          <b>{kkk_t} :</b>{" "}
                                          {value_vv[kkk_t].toString()}
                                        </Typography>
                                      );
                                    }
                                    if (kkk_t == "payment_terms") {
                                      return (
                                        <Typography
                                          key={value_kkk}
                                          component="div"
                                          style={{
                                            fontSize: 20,
                                            textIndent: "15px",
                                          }}
                                        >
                                          <b>{kkk_t}</b> :{" "}
                                          {Object.keys(value_vv[kkk_t]).map(
                                            (a: any, keys: number) => {
                                              return (
                                                <Typography
                                                  key={keys}
                                                  component="div"
                                                  style={{
                                                    fontSize: 20,
                                                    textIndent: "30px",
                                                  }}
                                                >
                                                  - <b>{a}</b> :{" "}
                                                  {value_vv[kkk_t][
                                                    a
                                                  ].toString()}
                                                </Typography>
                                              );
                                            }
                                          )}
                                        </Typography>
                                      );
                                    }

                                    if (kkk_t == "room_info") {
                                      return (
                                        <Typography
                                          key={value_kkk}
                                          component="div"
                                          style={{
                                            fontSize: 20,
                                            textIndent: "15px",
                                          }}
                                        >
                                          <b>{kkk_t}</b> :{" "}
                                          {Object.keys(value_vv[kkk_t]).map(
                                            (a: any, keys: number) => {
                                              if (a == "bedrooms") {
                                                return (
                                                  <Typography
                                                    key={keys}
                                                    component="div"
                                                    style={{
                                                      fontSize: 20,
                                                      textIndent: "30px",
                                                    }}
                                                  >
                                                    <b>- {a}</b> :{" "}
                                                    {value_vv[kkk_t][a].map(
                                                      (
                                                        sv: any,
                                                        keyu: number
                                                      ) => {
                                                        return (
                                                          <div key={keyu}>
                                                            {Object.keys(
                                                              sv
                                                            ).map(
                                                              (
                                                                s: any,
                                                                keyss: number
                                                              ) => {
                                                                if (
                                                                  s ==
                                                                  "bed_configurations"
                                                                ) {
                                                                  return (
                                                                    <div
                                                                      key={
                                                                        keyss
                                                                      }
                                                                    >
                                                                      <Typography
                                                                        key={
                                                                          keys
                                                                        }
                                                                        component="div"
                                                                        style={{
                                                                          fontSize: 20,
                                                                          textIndent:
                                                                            "45px",
                                                                        }}
                                                                      >
                                                                        <b>
                                                                          - {s}
                                                                        </b>{" "}
                                                                        :
                                                                        {sv[
                                                                          s
                                                                        ].map(
                                                                          (
                                                                            vsv: any,
                                                                            ksv: number
                                                                          ) => {
                                                                            return (
                                                                              <div
                                                                                key={
                                                                                  ksv
                                                                                }
                                                                              >
                                                                                {Object.keys(
                                                                                  vsv
                                                                                ).map(
                                                                                  (
                                                                                    vsvv: any,
                                                                                    ksvv: number
                                                                                  ) => {
                                                                                    if (
                                                                                      Array.isArray(
                                                                                        vsv[
                                                                                          vsvv
                                                                                        ]
                                                                                      )
                                                                                    ) {
                                                                                      return (
                                                                                        <div>
                                                                                          {vsv[
                                                                                            vsvv
                                                                                          ].map(
                                                                                            (
                                                                                              vsvvv: any,
                                                                                              ksvvv: number
                                                                                            ) => {
                                                                                              return (
                                                                                                <div
                                                                                                  key={
                                                                                                    ksvvv
                                                                                                  }
                                                                                                >
                                                                                                  <Typography
                                                                                                    key={
                                                                                                      keys
                                                                                                    }
                                                                                                    component="div"
                                                                                                    style={{
                                                                                                      fontSize: 20,
                                                                                                      textIndent:
                                                                                                        "60px",
                                                                                                    }}
                                                                                                  >
                                                                                                    <b>
                                                                                                      -{" "}
                                                                                                      {
                                                                                                        vsvv
                                                                                                      }{" "}
                                                                                                      {
                                                                                                        ksvvv
                                                                                                      }
                                                                                                    </b>{" "}
                                                                                                    :{" "}
                                                                                                    {Object.keys(
                                                                                                      vsvvv
                                                                                                    ).map(
                                                                                                      (
                                                                                                        ss: any,
                                                                                                        keysss: number
                                                                                                      ) => {
                                                                                                        return (
                                                                                                          <Typography
                                                                                                            key={
                                                                                                              keysss
                                                                                                            }
                                                                                                            component="div"
                                                                                                            style={{
                                                                                                              fontSize: 20,
                                                                                                              textIndent:
                                                                                                                "75px",
                                                                                                            }}
                                                                                                          >
                                                                                                            -{" "}
                                                                                                            <b>
                                                                                                              {
                                                                                                                ss
                                                                                                              }
                                                                                                            </b>{" "}
                                                                                                            :{" "}
                                                                                                            {vsvvv[
                                                                                                              ss
                                                                                                            ].toString()}
                                                                                                          </Typography>
                                                                                                        );
                                                                                                      }
                                                                                                    )}
                                                                                                  </Typography>
                                                                                                </div>
                                                                                              );
                                                                                            }
                                                                                          )}
                                                                                        </div>
                                                                                      );
                                                                                    }
                                                                                    return (
                                                                                      <Typography
                                                                                        key={
                                                                                          ksvv
                                                                                        }
                                                                                        component="div"
                                                                                        style={{
                                                                                          fontSize: 20,
                                                                                          textIndent:
                                                                                            "60px",
                                                                                        }}
                                                                                      >
                                                                                        -{" "}
                                                                                        <b>
                                                                                          {
                                                                                            vsvv
                                                                                          }
                                                                                        </b>{" "}
                                                                                        :{" "}
                                                                                        {vsv[
                                                                                          vsvv
                                                                                        ].toString()}
                                                                                      </Typography>
                                                                                    );
                                                                                  }
                                                                                )}
                                                                              </div>
                                                                            );
                                                                          }
                                                                        )}
                                                                      </Typography>
                                                                    </div>
                                                                  );
                                                                }
                                                                return (
                                                                  <Typography
                                                                    key={keyss}
                                                                    component="div"
                                                                    style={{
                                                                      fontSize: 20,
                                                                      textIndent:
                                                                        "45px",
                                                                    }}
                                                                  >
                                                                    - <b>{s}</b>{" "}
                                                                    :{" "}
                                                                    {sv[
                                                                      s
                                                                    ].toString()}
                                                                  </Typography>
                                                                );
                                                              }
                                                            )}
                                                          </div>
                                                        );
                                                      }
                                                    )}
                                                  </Typography>
                                                );
                                              }
                                              if (a == "room_size") {
                                                return (
                                                  <Typography
                                                    key={keys}
                                                    component="div"
                                                    style={{
                                                      fontSize: 20,
                                                      textIndent: "30px",
                                                    }}
                                                  >
                                                    <b>- {a}</b> :{" "}
                                                    {Object.keys(
                                                      value_vv[kkk_t][a]
                                                    ).map(
                                                      (
                                                        s: any,
                                                        keyss: number
                                                      ) => {
                                                        return (
                                                          <Typography
                                                            key={keyss}
                                                            component="div"
                                                            style={{
                                                              fontSize: 20,
                                                              textIndent:
                                                                "45px",
                                                            }}
                                                          >
                                                            - <b>{s}</b> :{" "}
                                                            {value_vv[kkk_t][a][
                                                              s
                                                            ].toString()}
                                                          </Typography>
                                                        );
                                                      }
                                                    )}
                                                  </Typography>
                                                );
                                              }
                                              return (
                                                <Typography
                                                  key={keys}
                                                  component="div"
                                                  style={{
                                                    fontSize: 20,
                                                    textIndent: "30px",
                                                  }}
                                                >
                                                  - <b>{a}</b> :{" "}
                                                  {value_vv[kkk_t][
                                                    a
                                                  ].toString()}
                                                </Typography>
                                              );
                                            }
                                          )}
                                        </Typography>
                                      );
                                    }
                                    if (
                                      kkk_t == "cancellation_info" ||
                                      kkk_t == "room_photos"
                                    ) {
                                      return (
                                        <Typography
                                          key={value_kkk}
                                          component="div"
                                          style={{
                                            fontSize: 20,
                                            textIndent: "15px",
                                          }}
                                        >
                                          <b>{kkk_t}</b> :{" "}
                                          {Array.isArray(value_vv[kkk_t]) &&
                                            (value_vv[kkk_t] as any).map(
                                              (
                                                vs: any,
                                                cancellation_info_k: number
                                              ) => {
                                                return (
                                                  <Typography
                                                    key={cancellation_info_k}
                                                    component="div"
                                                    style={{
                                                      fontSize: 20,
                                                      textIndent: "30px",
                                                    }}
                                                  >
                                                    <Typography
                                                      key={cancellation_info_k}
                                                      component="div"
                                                      style={{
                                                        fontSize: 20,
                                                        textIndent: "30px",
                                                      }}
                                                    >
                                                      -{" "}
                                                      <b>
                                                        {cancellation_info_k +
                                                          1}
                                                      </b>{" "}
                                                      :
                                                    </Typography>
                                                    {Object.keys(vs)
                                                      .sort()
                                                      .map(
                                                        (
                                                          a: any,
                                                          cancellation_info_kk: number
                                                        ) => {
                                                          return (
                                                            <Typography
                                                              key={
                                                                cancellation_info_kk
                                                              }
                                                              component="div"
                                                              style={{
                                                                fontSize: 20,
                                                                textIndent:
                                                                  "45px",
                                                              }}
                                                            >
                                                              - <b>{a}</b> :{" "}
                                                              {a !=
                                                                "url_max300" &&
                                                                a !=
                                                                  "url_original" &&
                                                                a !=
                                                                  "url_square60" &&
                                                                vs[
                                                                  a
                                                                ].toString()}
                                                              {(a ==
                                                                "url_max300" ||
                                                                a ==
                                                                  "url_original" ||
                                                                a ==
                                                                  "url_square60") && (
                                                                <img
                                                                  src={vs[
                                                                    a
                                                                  ].toString()}
                                                                />
                                                              )}
                                                            </Typography>
                                                          );
                                                        }
                                                      )}
                                                  </Typography>
                                                );
                                              }
                                            )}
                                        </Typography>
                                      );
                                    }

                                    if (kkk_t == "incremental_price") {
                                      return (
                                        <Typography
                                          key={value_kkk}
                                          component="div"
                                          style={{
                                            fontSize: 20,
                                            textIndent: "15px",
                                          }}
                                        >
                                          <b>{kkk_t}</b> :{" "}
                                          {Array.isArray(value_vv[kkk_t]) &&
                                            (value_vv[kkk_t] as any).map(
                                              (
                                                vs: any,
                                                incremental_pricek: number
                                              ) => {
                                                return (
                                                  <Typography
                                                    key={incremental_pricek}
                                                    component="div"
                                                    style={{
                                                      fontSize: 20,
                                                      textIndent: "30px",
                                                    }}
                                                  >
                                                    <Typography
                                                      key={incremental_pricek}
                                                      component="div"
                                                      style={{
                                                        fontSize: 20,
                                                        textIndent: "30px",
                                                      }}
                                                    >
                                                      -{" "}
                                                      <b>
                                                        {incremental_pricek + 1}
                                                      </b>{" "}
                                                      :
                                                    </Typography>
                                                    {Object.keys(vs)
                                                      .sort()
                                                      .map(
                                                        (
                                                          a: any,
                                                          incremental_pricekk: number
                                                        ) => {
                                                          if (
                                                            a ==
                                                            "extra_charges_breakdown"
                                                          ) {
                                                            return (
                                                              <div
                                                                key={
                                                                  incremental_pricekk
                                                                }
                                                              >
                                                                <Typography
                                                                  component="div"
                                                                  style={{
                                                                    fontSize: 20,
                                                                    textIndent:
                                                                      "45px",
                                                                  }}
                                                                >
                                                                  -{" "}
                                                                  <b>
                                                                    net_price
                                                                  </b>{" "}
                                                                  :{" "}
                                                                  {vs[
                                                                    a
                                                                  ].net_price.toString()}
                                                                </Typography>
                                                                <Typography
                                                                  component="div"
                                                                  style={{
                                                                    fontSize: 20,
                                                                    textIndent:
                                                                      "45px",
                                                                  }}
                                                                >
                                                                  -{" "}
                                                                  <b>
                                                                    currency
                                                                  </b>{" "}
                                                                  :{" "}
                                                                  {vs[a]
                                                                    .currency !=
                                                                    undefined &&
                                                                    vs[
                                                                      a
                                                                    ].currency.toString()}
                                                                </Typography>

                                                                {Array.isArray(
                                                                  vs[a]
                                                                    .extra_charge
                                                                ) &&
                                                                  (vs[a]
                                                                    .extra_charge as any).map(
                                                                    (
                                                                      vss: any,
                                                                      incremental_pricekkk: number
                                                                    ) => {
                                                                      return (
                                                                        <Typography
                                                                          key={
                                                                            incremental_pricekkk
                                                                          }
                                                                          component="div"
                                                                          style={{
                                                                            fontSize: 20,
                                                                            textIndent:
                                                                              "60px",
                                                                          }}
                                                                        >
                                                                          <Typography
                                                                            key={
                                                                              incremental_pricekkk
                                                                            }
                                                                            component="div"
                                                                            style={{
                                                                              fontSize: 20,
                                                                              textIndent:
                                                                                "60px",
                                                                            }}
                                                                          >
                                                                            -{" "}
                                                                            <b>
                                                                              extra_charge
                                                                              :{" "}
                                                                              {incremental_pricekkk +
                                                                                1}
                                                                            </b>
                                                                          </Typography>
                                                                          {Object.keys(
                                                                            vss
                                                                          )
                                                                            .sort()
                                                                            .map(
                                                                              (
                                                                                a: any,
                                                                                incremental_pricekkkk: number
                                                                              ) => {
                                                                                return (
                                                                                  <Typography
                                                                                    key={
                                                                                      a
                                                                                    }
                                                                                    component="div"
                                                                                    style={{
                                                                                      fontSize: 20,
                                                                                      textIndent:
                                                                                        "75px",
                                                                                    }}
                                                                                  >
                                                                                    -{" "}
                                                                                    <b>
                                                                                      {
                                                                                        a
                                                                                      }
                                                                                    </b>{" "}
                                                                                    :{" "}
                                                                                    {vss[
                                                                                      a
                                                                                    ].toString()}
                                                                                  </Typography>
                                                                                );
                                                                              }
                                                                            )}
                                                                        </Typography>
                                                                      );
                                                                    }
                                                                  )}
                                                              </div>
                                                            );
                                                          }
                                                          return (
                                                            <Typography
                                                              key={
                                                                incremental_pricekk
                                                              }
                                                              component="div"
                                                              style={{
                                                                fontSize: 20,
                                                                textIndent:
                                                                  "45px",
                                                                wordBreak:
                                                                  "break-all",
                                                              }}
                                                            >
                                                              - <b>{a}</b> :{" "}
                                                              {vs[a].toString()}
                                                            </Typography>
                                                          );
                                                        }
                                                      )}
                                                  </Typography>
                                                );
                                              }
                                            )}
                                        </Typography>
                                      );
                                    }
                                    if (kkk_t == "facility") {
                                      return (
                                        <Typography
                                          key={value_kkk}
                                          component="div"
                                          style={{
                                            fontSize: 20,
                                            textIndent: "15px",
                                          }}
                                        >
                                          <b>room {kkk_t}</b> :{" "}
                                          {Array.isArray(value_vv[kkk_t]) &&
                                            (value_vv[kkk_t] as any).map(
                                              (vs: any, facilityk: number) => {
                                                return (
                                                  <Typography
                                                    key={facilityk}
                                                    component="div"
                                                    style={{
                                                      fontSize: 20,
                                                      textIndent: "30px",
                                                    }}
                                                  >
                                                    <Typography
                                                      key={facilityk}
                                                      component="div"
                                                      style={{
                                                        fontSize: 20,
                                                        textIndent: "30px",
                                                      }}
                                                    >
                                                      -{" "}
                                                      <b>
                                                        {vs.tagGroup["th"] ||
                                                          vs.tagGroup["en"]}
                                                      </b>{" "}
                                                      :
                                                    </Typography>
                                                    {Array.isArray(
                                                      vs.room_facility
                                                    ) &&
                                                      (vs.room_facility as any).map(
                                                        (
                                                          vss: any,
                                                          facilitykk: number
                                                        ) => {
                                                          return (
                                                            <Typography
                                                              key={facilitykk}
                                                              component="div"
                                                              style={{
                                                                fontSize: 20,
                                                                textIndent:
                                                                  "45px",
                                                              }}
                                                            >
                                                              -{" "}
                                                              {vss.tag.th.toString()}
                                                            </Typography>
                                                          );
                                                        }
                                                      )}
                                                  </Typography>
                                                );
                                              }
                                            )}
                                        </Typography>
                                      );
                                    }
                                    return <div key={value_kkk}></div>;
                                  })}
                              </>
                            );
                          })}
                        </AccordionDetails>
                      </Accordion>
                    );
                  }
                  return <div key={value_k}></div>;
                })}
              </AccordionDetails>
            </Accordion>
          </>
        );
      }

      const block = data_html.block;
      const data_htmls = { ...data_html };
      delete data_html.block;
      return (
        <ThemeProvider theme={cryptoTheme}>
          <Fragment>
            <ResetCSS />
            <GlobalStyle />
            <MenuBar />
            <SectionDesktop>
              <Containers>
                {renderTableDataHotel(data_html)}
                {renderTableDataRoom(data_htmls.block)}
              </Containers>
            </SectionDesktop>
          </Fragment>
        </ThemeProvider>
      );
    } else {
      return <div></div>;
    }
  })
);

export default info;