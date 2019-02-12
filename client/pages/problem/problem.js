//获取应用实例
const app = getApp()
var page = 1;
var isfinish = false;//加载完毕
function loadmore(that) {
  if (isfinish) return;
  wx.showLoading({
    title: '正在加载中',
  })
  // wx.request({
  //   url: "test.php",
  //   data: {
  //     page: page,
  //     condition: that.data.condition
  //   },
  //   success: (res) => {
  //     console.log(res.data.data);
  //     var data = res.data.data;
  //     wx.hideLoading();
  //     if (data.length > 0) {
  //       var student = that.data.student;
  //       for (var i = 0; i < data.length; i++) {
  //         student.push(data[i]);
  //       }
  //       that.setData({ student: student });
  //       page++;
  //     } else {
  //       isfinish = true;
  //     }
  //     wx.stopPullDownRefresh();
  //   }
  // })
  var stulist = [{ 'no': '1', 'id': '123', 'name': 'abc', 'sex': 'male', 'age': '20' },
   { 'no': '2', 'id': '456', 'name': 'efg', 'sex': 'female', 'age': '21' },
   { 'no': '3', 'id': '789', 'name': 'hig', 'sex': 'male', 'age': '20'}]
  var student = that.data.student;
  for (var i = 0; i < 3; i++) {
    student.push(stulist[i]);
  }
  that.setData({ student: student });
  page++;
  wx.hideLoading();
}
Page({
  data: {
    student: [],
    inputShowed: false,
    inputVal: "",
    condition: ''
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false,
      condition: '',
      student: []
    });
    page = 1
    loadmore(this)
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  onPullDownRefresh: function () {
    page = 1;
    isfinish = false;
    this.setData({ student: [] });
    loadmore(this);
  },
  onReachBottom: function () {
    var that = this;
    loadmore(that);
    console.log(page)
  },
  formSubmit: function (e) {
    console.log(e.detail.value.condition);
    this.setData({ condition: e.detail.value.condition });
    var that = this
    page = 1
    this.setData({ student: [] })
    loadmore(that)
  },
  onShow: function () {
    loadmore(this)
  }
})


