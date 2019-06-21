const NodemonPlugin = require("nodemon-webpack-plugin") // Ding
const path = require("path")

module.exports = {
  mode: "development",
  entry: "./server/index.js",
  output: {
    path: __dirname + "/server/",
    filename: "server.bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },
  plugins: [
    new NodemonPlugin({
      watch: path.resolve("./server/index.js"),
      script: "./server/server.bundle.js"
    })
  ]
}
