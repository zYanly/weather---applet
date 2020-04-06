Page({
  data:{
    city: '深圳',
    arr:[],
    v2:''
  },
  // 获取输入框内容
  inp_event:function(event){
    this.setData({
      v2: event.detail.value
    })
  },
  // 点击搜索按钮--把输入框内容传到data并得到city返回到getWeatherData
  click_event:function(){
    console.log(this.data.city);
    this.data.city = this.data.v2;
    this.getWeatherData(city);
  },
  getWeatherData:function(city_name){
    var _this = this;   
    var url = 'http://api.tianapi.com/txapi/tianqi/index?key=bf415678dc382cb11398fbab39dc9fe9';
    wx.request({
      url,
      data:{
        city:city_name
      },
      success:function(res){
        console.log(_this);
        _this.setData({
          city: city_name,
          arr: res.data.newslist
        })
        console.log(_this.data.arr,'arr');
        // 设置缓存数据
        wx.setStorageSync('result', _this.data.arr)
      }
    })
  },
  
  onLoad:function(){
    this.getWeatherData('深圳');
  }
})