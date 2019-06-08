//logs.js

Page({
  data: {
    region: ["北京市", "北京市", "东城区"],
    cityCode: ["110000", "110100", "110101"],
    customItem: '全部',
    types: [
      {value: 1, name: '求购', checked: true},
      {value: 2, name: '转让', checked: false}
    ],
    explain: '',
    phone: '',
    publishType: 1,
  },
  //选择地区
  bindRegionChange(e) {
    console.log(e);
    this.setData({
      region: e.detail.value,
      cityCode: e.detail.code
    });
  },
  //选择发布类型
  radioChange(e) {
    this.setData({
      publishType: e.detail.value
    });
  },
  //设置输入框的值
  setValue(e) {
    let type = e.target.dataset.type;
    this.setData({
      [type]: e.detail.value
    });
  },
  //提交信息
  submit() {
    console.log(this.data);
  },
  //分享页面信息
  onShareAppMessage(){
    return {
      title: '萌宠交易平台',
      path: '/pages/index/index'
    }
  },
})
