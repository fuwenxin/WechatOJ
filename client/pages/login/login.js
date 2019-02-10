// client/pages/login/login.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'',
    password:'',
    isHide: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },


  /**
   * 登陆，并提交表单
   */
  formsubmit: function(e){
    var that = this;
    console.log(e)
    this.setData({
      username: e.detail.value.username,
      password: e.detail.value.password
    })
    var bindName = that.data.username;
    var bindPassword = that.data.password;
    var isSuccess = false;
    console.log(this.data)
    if (bindName.length !== 0 && bindPassword !== 0) {
      isSuccess = true;
      wx.cloud.init({
        env: 'wechatoj-env-21b763',
        traceUser: true
      })
    }
    if (isSuccess) {
      this.setData({
        isHide: true
      })
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