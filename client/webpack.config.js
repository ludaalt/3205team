const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: ["@babel/polyfill", "./src/index.jsx"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash].js",
  },
  // externals: {
  //   react: "React",
  // },
  // proxy: {
  //   "/api": "http://localhost:3001",
  // },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    port: 3000,

    proxy: {
      "/api": {
        target: "http://localhost:3000",
        router: () => "http://localhost:3001",
        //  logLevel: 'debug' /*optional*/
      },
    },
  },
  plugins: [
    new HTMLWebpackPlugin({ template: "./public/index.html" }),
    new CleanWebpackPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
          },
        },
      },
    ],
  },
};
