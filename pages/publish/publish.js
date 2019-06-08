//logs.js
const request = require('../../utils/request');
Page({
  data: {
    address: '点击选择,要勾选哟',
    successTipShow: false,
    types: [
      {value: 'buy', name: '求购', checked: true},
      {value: 'sell', name: '转让', checked: false}
    ],
    // explain: '',
    // phone: '',
    type: 'buy',
  },
  staticData: {},
  //选择地区
  chooseAddress() {
    wx.chooseLocation({
      success: this.setAddress.bind(this)
    })
  },
  //重新设置地址信息
  setAddress(res) {
    this.setData({
      address: res.address
    });
    //Object.assign 将后边对象的内容拷贝到前边的对象内
    Object.assign(this.staticData, {
      latitude: res.latitude,
      longitude: res.longitude,
      address: res.address
    });
  },
  //选择发布类型
  radioChange(e) {
    // this.setData({
    //   type: e.detail.value
    // });
    this.staticData.type = e.detail.value;
  },
  //设置输入框的值
  setValue(e) {
    let type = e.target.dataset.type;
    // this.setData({
    //   [type]: e.detail.value
    // });
    this.staticData[type] = e.detail.value;
  },
  //提交信息
  submit() {
    if(!this.data.address || this.data.address === '点击选择,要勾选哟'){
      this.alertTip('请选择地址!');
      return;
    }
    if(!this.staticData.message){
      this.alertTip('请输入说明!');
      return;
    }
    if(!this.staticData.contact){
      this.alertTip('请输入联系方式!');
      return;
    }
    let data = Object.assign({}, this.staticData, {
      distinct: 'jonhnqin'
    });
    console.log(data);
    this.setData({
      successTipShow: true
    });
    let apiUrl = 'https://nuanwan.wekeji.cn/student/index.php/trade/add_item';
    wx.request({ //发送请求
      url: 'https://nuanwan.wekeji.cn/student/index.php/trade/add_item',
      data: data,
      header: {
          'content-type': 'application/x-www-form-urlencoded'
      },
      success: function(res) {
          console.log(res);
      }
    });
  },
  backIndex() {
    wx.navigateTo({
      url: "../index/index"
    });
  },
  //弹出提示框
  alertTip(title){
    wx.showToast({
      title: title,
      icon: 'none',
      duration: 2000
    });
  },
  //分享页面信息
  onShareAppMessage(){
    return {
      title: '萌宠交易平台',
      path: '/pages/index/index'
    }
  },
})
