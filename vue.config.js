const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  devServer: {
    port: 3000
  },
  chainWebpack(config) {
    config.resolve.alias.set("components", resolve('./src/components'))
  }
}