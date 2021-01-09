"use strict";
const path = require("path");
const webpack = require("webpack");
const { ReactLoadablePlugin } = require("react-loadable/webpack");
const TerserPlugin = require('terser-webpack-plugin');
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  plugins: [
    {
      name: "typescript",
      options: {
        useBabel: true,
        useEslint: true,
        forkTsChecker: {
          tsconfig: "./tsconfig.json",
          tslint: undefined,
          watch: "./src",
          typeCheck: false,
        },
      },
    },
    {
      name: "compression",
      options: {
        brotli: true,
        gzip: true,
        compressionPlugin: {
          filename: "[path].gz[query]",
          algorithm: "gzip",
          test: /\.(js|css|html|svg)$/,
          compressionOptions: { level: 9 },
          minRatio: 0.8,
        },
        brotliPlugin: {
          asset: "[path].br[query]",
          test: /\.(js|css|html|svg)$/,
          minRatio: 0.8,
        },
      },
    },
    // {
    //   name: 'serviceworker',
    //   options: {
    //     // autoUpdate: true,
    //     relativePaths: false
    //   }
    // }
  ],
  modify(config, { target, dev }) {
    if (!dev) config.devtool = false;
    else config.devtool = "source-map";

    const appConfig = config; //  stay immutable here
    if (target === "node" && !dev) {
      appConfig.externals = [];
    }

    const srcPath = path.resolve("./src");
    appConfig.resolve.modules.push(srcPath);

    if (target === "web") {
      return {
        ...config,
        plugins: [
          ...config.plugins,
          new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /th|en-us/),

          new ReactLoadablePlugin({
            filename: "./dist/react-loadable.json",
          }),
          ...(!dev
            ? [
              // Production plugins
              new CompressionPlugin({
                cache: true,
                algorithm: "gzip",
                test: /\.js$|\.css$|\.html$/,
              }),
            ]
            : []),

          ...(process.env.BUNDLE_ANALYZE == "true"
            ? [new BundleAnalyzerPlugin()]
            : []),
        ],
        optimization: {
          minimize: dev ? false : true,
          minimizer: dev
            ? []
            : [
              // new TerserPlugin({
              //   parallel: true,
              //   cache: true,
              // }),
              ...(config.optimization.minimizer || []),
              new webpack.optimize.ModuleConcatenationPlugin(),
              new webpack.optimize.AggressiveMergingPlugin(),
              new OptimizeCssAssetsPlugin({
                cssProcessorOptions: {
                  map: {
                    inline: false,
                    annotation: true,
                  },
                },
              }),
            ],

          // splitChunks: {
          //   chunks: 'async',
          //   minSize: 30000,
          //   // minRemainingSize: 0,
          //   maxSize: 0,
          //   minChunks: 1,
          //   maxAsyncRequests: 6,
          //   maxInitialRequests: 4,
          //   automaticNameDelimiter: '~',
          //   automaticNameMaxLength: 30,
          //   cacheGroups: {
          //     defaultVendors: {
          //       test: /[\\/]node_modules[\\/]/,
          //       priority: -10
          //     },
          //     default: {
          //       minChunks: 2,
          //       priority: -20,
          //       reuseExistingChunk: true
          //     }
          //   }
          // },
          // mangleWasmImports: !dev, //added
          // removeAvailableModules: !dev, //added
          // mergeDuplicateChunks: !dev, //added
          // flagIncludedChunks: !dev,
          // occurrenceOrder: false,
          // usedExports: !dev,
          // runtimeChunk: 'single'
          // runtimeChunk: {
          //   name: entrypoint => `runtimechunk~${entrypoint.name}`
          // }



        },
      };
    }

    // appConfig.resolve.extensions.push(".ts", ".tsx")
    // appConfig.module.rules.push({
    //   test: /\.(ts|js)x?$/,
    //   exclude: /node_modules/,
    //   loader: "babel-loader",
    // })
    return appConfig;
  },
  // modifyBabelOptions: mainBabelOptions => {
  //   return {
  //     ...mainBabelOptions,
  //     ...{ plugins: [].concat(mainBabelOptions.plugins ? mainBabelOptions.plugins : [], ['lodash']) }
  //   };
  // }
};
