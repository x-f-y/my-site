// vue-cli的配置文件
module.exports = {
  // 配置publicPath主要是解决部署到github pages之后css和js文件404的问题
  publicPath: process.env.NODE_ENV === "production" ? "/my-site/": "/",
  devServer: {
    proxy: {
      "/api": {
        target: "http://test.my-site.com"
      }
    }
  },
  // configureWebpack选项对应的对象最终会和vue-cli的默认配置对象合并（webpack-merge）
  configureWebpack: require('./webpack.config')
}