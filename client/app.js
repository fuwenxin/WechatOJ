//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')

App({
    onLaunch: function () {
      qcloud.setLoginUrl(config.service.loginUrl)
      wx.cloud.init({
        env: 'wechatoj-test-aaa146',
        traceUser: true
      })
    },
    globalData: {
      userInfo: {}
    }
})