const get = (url, params) => {
    wx.request({
        url: url,
        data: params,
        header: {
            'content-type': 'application/json'
        },
        success: function(res) {
            console.log(res);
            return new Promise((reslove, reject) => {
                reslove(res.data);
            });
        }
    })
}

const post = (url, params) => {
    wx.request({
        url: url,
        data: params,
        header: {
            'content-type': 'application/x-www-form-urlencoded'
        },
        success: function(res) {
            console.log(res);
            return new Promise((reslove, reject) => {
                reslove(res.data);
            });
        }
    })
}

module.exports = {
    get,
    post
} 