const path = require("path");

module.exports = {
  mode: "none",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "diyDist"),
    publicPath: "diyDist/",
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
          options: {
            attrs: ["img:src", "a:href"],
          },
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
};
