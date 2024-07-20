const path = require("path");

module.exports = {
  // Entry point for the application
  entry: "./src/index.js",

  // Output configuration
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: [
              [
                "module-resolver",
                {
                  root: ["./src"],
                  alias: {
                    "@": "./src",
                  },
                },
              ],
            ],
          },
        },
      },
    ],
  },
};
