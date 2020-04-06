// pages/detail/detail.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    date: "",
    arr2: []
  },
  // 编写一个函数 获取日期对应的数据
  get_weather_data: function (date) {
    // 取值 
    var result = wx.getStorageSync('result');
    console.log(result,"result");
    //  判断
    if (result.length == 0) { //没用数据
      wx.showToast({
        title: '没用找到数据',
        icon: 'none'
      })
      //终止代码
      return;
    }
    var arr3 = [];
    for (var i = 0; i < result.length; i++) {
      //判断日期是否一致
      if (date == result[i].date) {
        //给arr3赋值
        arr3 = result[i];
        //跳出循环
        break;
      }
    }
    this.setData({
      arr2: arr3
     
    })
    console.log(this.data.arr2,'arr2');
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    // 获取页面传递的参数
    var date = options.date;
    // 获取日期对应的天气信息
    this.get_weather_data(date);
    // 显示日期
    this.setData({
      date: date
    })
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