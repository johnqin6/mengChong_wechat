Page({
    data: {
        lists: [],
        queryValue: ''
    },
    onShow() {
        this.getTradeData();
    },
    goDetail(e) {
        console.log(e);
        let id = e.currentTarget.id;
        wx.navigateTo({
            url: '../detail/detail?id=' + id
        });
    },
    //设置搜索值
    setValue(e) {
        this.setData({
            queryValue: e.detail.value
        });
    },
    //搜索
    onSearch() {
        let params = {
            message: this.data.queryValue
        }
        this.getTradeData(params);
    },
    //获得交易数据
    getTradeData(params) {
        let apiUrl = 'http://localhost:3000/getTradeData';
        if(!params){
            let params = {};
        }
        wx.request({ //发送请求
            url: apiUrl,
            data: params,
            method: 'GET',
            header: {
                'content-type': 'application/json'
            },
            success: res => {
                console.log(res);
                let lists = res.data.data.filter(item => {
                    return item.type;
                });
                this.setData({
                    lists: lists
                });
            }
        });
    }
});