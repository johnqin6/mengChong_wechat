Page({
  data: {
    address: '',
    latitude: '',
    longitude: '',
    types: [
        {value: 1, name: '求购', checked: true},
        {value: 2, name: '转让', checked: false}
    ],
    typeVale: '',
    message: '',
    contact: ''
  },
  onLoad(options) {
    console.log(options);
    let id = options.id;
    this.getTradeDataWitnId(id);
  },
  //根据id获取相应交易记录
  getTradeDataWitnId(id){
    let apiUrl = 'http://localhost:3000/getTradeDataWitnId';
    let params = {
      distinct: 'johnqin',
      id: id
    };
    wx.request({ //发送请求
      url: apiUrl,
      data: params,
      method: 'GET',
      header: {
          'content-type': 'application/json'
      },
      success: res => {
          console.log(res);
          this.setData({
            address: res.data.data[0].address,
            latitude: res.data.data[0].latitude,
            longitude: res.data.data[0].longitude,
            typeVale: res.data.data[0].type,
            message: res.data.data[0].message,
            contact: res.data.data[0].contact
          }); 
      }
    });
  }
});