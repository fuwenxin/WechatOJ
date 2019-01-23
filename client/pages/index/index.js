//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  },
  onProblem: function(){
    wx.navigateTo({
      url: '../problem/problem'
    })
  },
  onSolve: function () {
    wx.navigateTo({
      url: '../solve/solve'
    })
  },
  onAnalyse: function () {
    wx.navigateTo({
      url: '../analyse/analyse'
    })
  },
  onHome: function(){
    wx.navigateTo({
      url: '../home/home',
    })
  },
  onLoad: function () {
  }
})
