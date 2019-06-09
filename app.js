//app.js
App({
  onLaunch() {
    this.getSystemInfoSync();
    this.getUserInfo();
  },
  //同步获取系统信息
  getSystemInfoSync() {
    try {
      const res = wx.getSystemInfoSync();
      this.globalData.systemInfo = res;
    } catch (e) {
      console.log(e);
    }
  },
  //获取用户数据
  getUserInfo(){
    wx.getUserInfo({
      success: res => {
        this.globalData.userInfo = res.userInfo;
        console.log(res);
      }
    });
  },
  globalData: {
    systemInfo: null,
    userInfo: null
  }
})