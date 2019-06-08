# 萌宠平台接口数据

3. 获取当前经纬度是否可用
接口地址：https://nuanwan.wekeji.cn/student/index.php/trade/check_location_valid
接口参数：latitude, longitude 经纬度
接口类型：POST

4. 获取具体id对应的交易信息
接口地址：https://nuanwan.wekeji.cn/student/index.php/trade/get_item
接口参数：id: 信息id
接口类型：POST

5. 增加一条交易信息
接口地址：https://nuanwan.wekeji.cn/student/index.php/trade/add_item
接口参数：address, latitude, longitude, message, contact, type(sell,buy), openid(可不传) 
接口类型：POST

6. 获取用户信息
接口地址：https://nuanwan.wekeji.cn/student/index.php/wechat/get_user_info
接口参数：code 
接口类型：POST

返回的数据格式：{ret: true, data: {}}

7. 
method: 'post'
url: 'https//nuanwan.wekeji.cn/student/index.php/wechat/get_user_info',
header: {'content-type': 'application/x-www-form-urlencoded'}