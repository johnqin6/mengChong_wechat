const express = require('express');
const bodyParser = require('body-parser');
const mongo = require('./mongo.js');
const app = express();

// parse application/json
// app.use(bodyParser.json());
// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}));
// 该路由使用的中间件 timeLog
app.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

// 定义网站主页的路由
app.get('/', function (req, res) {
    // console.log(req);
    res.send('user home page');
});

//查询该用户下的交易记录
app.get('/getTradeData',(req, res) =>{
    let distinct = req.query.distinct;
    let tradeData = mongo.find({'distinct': distinct}, (err, data) => {
        if(err) throw err;
        res.send({
            code: 200,
            data: data
        });
    });
});

//查询该用户下当前id的交易记录
app.get('/getTradeDataWitnId',(req, res) =>{
    let id = req.query.id;
    let tradeData = mongo.find({'_id': id}, (err, data) => {
        if(err) throw err;
        res.send({
            code: 200,
            data: data
        });
    });
});

//添加一条交易记录
app.post('/addTrade', (req, res) => {
    console.log(req,req.body);
    let data = {
        address: req.body.address,
        latitude: req.body.latitude, 
        longitude: req.body.longitude, 
        message: req.body.message, 
        contact: req.body.contact, 
        type: req.body.type, 
        distinct: req.body.distinct,
        name: req.body.name
    }
    mongo.create(req.body, (err, data) => {
        if (err) throw err;
        res.send({code: 200, message: '交易创建成功！'});
    });
});

app.listen(3000, () => {
    console.log("服务器开启,端口：3000");
});
