const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { log } = require("console");

const webpack = require("webpack");
class MyPlugin {
  apply(compiler) {
    console.log("MyPlugin 启动");
    compiler.hooks.emit.tap("MyPlugin", (compilation) => {
      for (const name in compilation.assets) {
        // console.log(compilation.assets[name].source());≥
        if (name.endsWith(".js")) {
          const contents = compilation.assets[name].source();
          const withoutComments = contents.replace(/\/\*.+\*\//g, "");
          compilation.assets[name] = {
            source: () => withoutComments,
            size: () => withoutComments.length,
          };
        }
      }
    });
  }
}

module.exports = {
  mode: "none",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    // publicPath: "diyDist/",
  },
  devServer: {
    hot: true,
  },
  module: {
    rules: [
      // {
      //   // 处理js
      //   test: /\.js$/,
      //   use: {
      //     loader: "babel-loader",
      //     options: {
      //       presets: ["@babel/preset-env"],
      //     },
      //   },
      // },
      {
        // 处理 html
        test: /\.html$/,
        use: {
          loader: "html-loader",
        },
      },
      {
        // 处理css
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        // 处理图片
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 400 * 1024,
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
