// client/pages/login/login.js
var util = require('../../utils/util.js')
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'',
    password:'',
    isHide: false,
    db: null,
    openId: null,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    this.setData({
      db: wx.cloud.database()
    })
    wx.showLoading({
      title: '正在加载中',
    })
    wx.cloud.callFunction({
      name: 'getOpenId',
      complete: res => {
        console.log('callFunction test result: ', res)
        that.setData({
          openId: res.result.openid
        })
        console.log(this.data)
        if (this.data.openId != null) {
          this.data.db.collection('login_info').where({
            _openid: that.data.openId
          }).get({
            success(res) {
              wx.hideLoading();
              var b = (JSON.stringify(res.data) == "[]");
              console.log(b)
              console.log(JSON.stringify(res))
              if(!b){
                wx.redirectTo({
                  url: '../index/index'
                })
              }
            }
          })
        }
        else {
          console.log("未成功获取openId")
        }
      }
    })
  },


  /**
   * 登陆，并提交表单
   */
  formsubmit: function(e){
    var that = this;
    this.setData({
      username: e.detail.value.username,
      password: e.detail.value.password
    })
    var bindName = that.data.username;
    var bindPassword = that.data.password;
    var isSuccess = false;
    if (bindName.length !== 0 && bindPassword !== 0) {
      this.data.db.collection('login_info').add({
        data:{
          userName: bindName,
          passWord: escape(bindPassword)
        }
      })
      if (bindPassword == util.getOJUserInfo(bindName)){
        isSuccess = true;
      }
    }
    if (isSuccess) {
      this.setData({
        isHide: true
      })
    }
  },
  //js核心代码：其中利用backtype来确认授权登录后跳转回那个页面
  bindGetUserInfo: function (e) {
    console.log(app.globalData)
    if (e.detail.userInfo) {
      wx.redirectTo({
        url: '../index/index' 
      })
    } else {
      this.showZanTopTips('很遗憾，您拒绝了微信授权，宝宝很伤心');
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})