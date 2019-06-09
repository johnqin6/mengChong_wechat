//app.js
App({
  onLaunch() {
    this.getSystemInfoSync();
    this.login();
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
  //用户登录
  login() {
    let that = this;
    if(this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo);
    }else{
      //调用登录接口
      wx.login({
        success() {
          wx.getUserInfo({
            success(res) {
              that.globalData.userInfo = res.userInfo;
              that.globalData.userInfo.signature = res.signature;
              typeof cb == "function" && cb(that.globalData.userInfo);
            }
          })
        }
      })
    } 
  },
  //获取用户数据
  getUserInfo(){
    wx.getUserInfo({
      success: res => {
        this.globalData.userInfo = res.userInfo;
        this.globalData.userInfo.signature = res.signature;
      }
    });
  },
  globalData: {
    systemInfo: null,
    userInfo: null
  }
})