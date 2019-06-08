//index.js
//获取应用实例
const app = getApp()
const systemInfo = app.globalData.systemInfo; //系统信息

Page({
  data: {
    longitude: '',
    latitude: '',
    systemInfo: {
      windowWidth: 370,
      windowHeight: 603
    }, //系统信息
    controls: [{ //不随地图移动的控件,中心点
      iconPath: '/images/pin.png',
      position: {
        left: (systemInfo.windowWidth / 2) - 11,
        top: (systemInfo.windowHeight / 2) - 31,
        width: 22,
        height: 31
      }
    },{ //返回图标
      id: 1,
      iconPath: '/images/center.png',
      position: {
        left: 20,
        top: systemInfo.windowHeight - 100,
        width: 30,
        height: 30
      },
      clickable: true  //控制图标能否点击
    }]
  },
  //点击图标返回
  controlback(e) {
    this.mapCtx.moveToLocation();
  },
  //分享页面信息
  onShareAppMessage(){
    return {
      title: '萌宠交易平台',
      path: '/pages/index/index'
    }
  },
  //页面首次渲染时
  onReady() {
    this.mapCtx = wx.createMapContext('map'); //获得地图上下文
  },
  //页面显示时
  onShow(){
    this.getLocation();
  },
  //获取当前位置
  getLocation() {
    wx.getLocation({ //调用前需在app.json进行权限配置（permission）
      type: 'gcj02',
      success: this.handleGetLocationSucc.bind(this) //bind用于将上下文绑定到handleGetLocationSucc函数
     })
  },
  //获取当前位置的回调函数
  handleGetLocationSucc(res){
    this.setData({
      longitude: res.longitude,
      latitude: res.latitude
    })
  }
  
})
