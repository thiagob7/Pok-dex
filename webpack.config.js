// webpack.config.js
const path = require("path");

module.exports = {
  // outras configurações...
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src"), // ou o diretório desejado
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"], // adicione as extensões que você usa
  },
};
