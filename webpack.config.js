const  path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',
  output:{
    // filename:"dist",
    path: path.join(__dirname, 'GBD-theme/dist'),
  },
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [{
      test: /\.(s[ac]|c)ss$/i,
      use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
    }]
  }
};