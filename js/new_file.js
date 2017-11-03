原型图
https://prototype.yongche.org/hujingjing/%E5%8F%8C%E5%8D%81%E4%B8%80%E6%8A%BD%E5%A5%96%E6%B4%BB%E5%8A%A8/index.html#g=1&p=home

16825825825
16886318947
16820171161
16886318957 测试手机号


// 抽奖接口

http://yaoyakun.market.yongche.org/miscellaneous/DoubleEleven/getResult?cellphone=16825825825

参数说明  
	
cellphone  司机的电话号码


code说明
 	
* 200 中奖了 or 请求ok
	
* 201 司机不存在
 	
* 202 抽奖活动暂未开始
 	
* 203 请登陆后再来抽奖
 	
* 204 未中奖
 	
* 205 请完成随叫随到订单后再来抽奖
	
* 206 已抽过奖


返回值

	{
    		
	"code": 204,
	    		
	"msg": "未中奖"
		
	}




// 判断该司机是否可抽奖

http://yaoyakun.market.yongche.org/miscellaneous/DoubleEleven/awardOrNot?cellphone=16825825825

参数说明  
	
cellphone  司机的电话号码


返回值

{
    
	"code": "200",
	    
	"msg": "OK",
	    
	"result": {
	        "flag": 0 // 1 已中奖或已抽过奖  0 未中奖或未抽过奖
    }

}


// 获取随叫随到订单数
http://yaoyakun.market.yongche.org/miscellaneous/DoubleEleven/getOrderNum?driver_id=50056790

参数说明  
  cellphone  司机ID

返回值

{
    "code": 200,
    "msg": "OK",
    "result": {
        "count": 15,
        "currentTimeStamp": 1509688081,  // 当前时间戳
        "currentTimeRange": "13" // 当前抽奖时间段  
		
    }
}	
currentTimeRange
10 => 10：00-10：05  
13 => 13：00-13：05  
17 => 17：00-17：05 
20 => 20：00-20：05  





// 获取各抽奖时间段的中奖司机列表
http://yaoyakun.market.yongche.org/miscellaneous/DoubleEleven/getDriverList?type=13


参数说明 
     * type
     * 10 => 10：00-10：05 充电宝中奖者 200个
     * 13 => 13：00-13：05 免佣金中奖者 2名
     * 17 => 17：00-17：05 空气净化器中奖者 50个
     * 20 => 20：00-20：05 免佣金中奖者 3名

返回值


{
    "code": 200,
    "msg": "OK",
    "result": [
        {
            "id": 9,
            "name": "易到测试司机16825825825",
            "cellphone": 16825825825
        },
        {
            "id": 10,
            "name": "易到测试司机16825825825",
            "cellphone": 16825825825
        },
        {
            "id": 11,
            "name": "易到测试司机16825825825",
            "cellphone": 16825825825
        }
    ]
}

--------------------------------------新接口-----------------------------------------------
// 抽奖入口页面
http://yaoyakun.market.yongche.org/miscellaneous/DoubleEleven/getInitPage?driver_id=50056790
参数说明 dirvier_id 司机ID

返回值

{
    "code": 200,
    "msg": "OK",
    "result": {
        "count": 17, // 随机随到单数
        "currentTimeStamp": 1509700889, // 当前时间戳
        "currentTimeRange": 3, // 当前时间区间  0 => -10：05  1 => 10：05-13：05  2 => 13：05-17：05  3 => 17：05-20：05 4 => 20：05-24：00 
        "isClick": 0, // 是否可抽奖
        "driverList": [ // 中奖司机列表
            {
                "name": "A*1",
                "cellphone": "168****8947",
                "award_type": 17
            },
            {
                "name": "易*",
                "cellphone": "168****5825",
                "award_type": 17
            },
            {
                "name": "巫*2号",
                "cellphone": "168****1161",
                "award_type": 14
            },
            {
                "name": "李*智",
                "cellphone": "137****6909",
                "award_type": 13
            },
            {
                "name": "沈*青",
                "cellphone": "137****2284",
                "award_type": 13
            }
        ],
        "isLogin": 0  // 是否登录
    }
}
 

						
9  =>      -10：00    奖品展示“充电宝”							空白?
10 => 10：00-10：05  奖品展示“充电宝”   			抽奖按钮可点击   	     展示充电宝中奖名单

11 => 10：05-13：00  奖品展示“30天内所有订单免佣”   			    展示充电宝中奖名单
13 => 13：00-13：05  奖品展示“30天内所有订单免佣”   抽奖按钮可点击	     展示30天内所有订单免佣中奖名单

14 => 13：05-17：00  奖品展示“车载净化器”						     展示30天内所有订单免佣中奖名单
17 => 17：00-17：05  奖品展示“车载净化器”   		抽奖按钮可点击	     展示30天内所有订单免佣中奖名单

18 => 17：05-20：00  奖品展示“30天内所有订单免佣”				     展示车载净化器中奖名单
20 => 20：00-20：05  奖品展示“30天内所有订单免佣”  	抽奖按钮可点击      	     展示车载净化器中奖名单

21 => 20：05-24:00  没有展示      								     展示30天内所有订单免佣中奖名单
