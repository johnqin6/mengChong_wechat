const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongo = require('./mongo.js');

app.get('/add',(req, res) => {
    console.log(req);
    //获取用户提交的数据
    let tradeData = {
        address: res.address,
        latitude: res.latitude, 
        longitude: res.longitude, 
        message: res.message, 
        contact: res.contact, 
        type: res.contact, 
        distinct: res.distinct
    }
    //创建一条交易记录到数据库
    mongo.create(tradeData, (err, data) => {
        if(err) throw err;
        res.send({code: 200, message: '交易创建成功'});
    });
});

app.listen(3000, () => {
    console.log("服务器开启,端口：3000");
});
