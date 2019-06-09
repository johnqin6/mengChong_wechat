const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//MongoDB会自动建立mengchong数据库
mongoose.connect('mongodb://localhost:27017/mengchong');
const db = mongoose.connection;
console.log(db);
db.on("error", error => {
    console.log("数据库连接失败：" + error);
});

db.on("open", () => {
    console.log("数据库连接成功");
});

//声明一个数据集 对象
const tradeSchema = Schema({
    address: 'String',
    latitude: 'Number', 
    longitude: 'Number', 
    message: 'String', 
    contact: 'String', 
    type: 'Number', 
    distinct: 'String',
    name: 'String'
});

module.exports = mongoose.model('trade', tradeSchema);


