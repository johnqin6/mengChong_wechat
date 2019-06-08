//app.js
App({
  onLaunch() {
    this.getSystemInfoSync();
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
  globalData: {
    systemInfo: null
  }
})