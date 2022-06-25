const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const Package = require("./package.json");

const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: `${Package.version.replace("^", "")}.js`,
    publicPath: "/",
    clean: true,
  },
  resolve: {
    alias: { "@": path.resolve(__dirname, "src") },
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                [
                  "@babel/preset-react",
                  {
                    runtime: "automatic",
                  },
                ],
              ],
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: sassRegex,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 3,
              sourceMap: true,
              modules: {
                mode: "icss",
              },
            },
          },
          "sass-loader",
        ],
        exclude: sassModuleRegex,
      },
      {
        test: sassModuleRegex,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 3,
              sourceMap: true,
              modules: {
                mode: "local",
                localIdentName: "[local]__[hash:base64:8]",
              },
            },
          },
          "sass-loader",
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
  ],
  devtool: process.env.BUILD_MODE !== "production" ? "source-map" : false,
  mode:
    process.env.BUILD_MODE === "localhost"
      ? "development"
      : process.env.BUILD_MODE,
  devServer: {
    host: "localhost",
    port: 3000,
    historyApiFallback: true,
    open: true,
    hot: true,
  },
};

if (process.env.BUILD_MODE === "localhost") {
  config.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = config;
