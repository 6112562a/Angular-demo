/**
 * 天气结果
 */
export class Weather {
    date: string;
    message: string;
    status: number;
    city: string;
    count: number;
    data: WeatherData;
}
/**
 * 天气数据主体
 */
export class WeatherData {
    shidu: string;
    pm25: string;
    pm10: string;
    quality: string;
    wendu: string;
    ganmao: string;
    yesterday: WeatherYesterday;
    forecast: Forecast[];

}
/**
 * 预报
 */
export class Forecast {
    date: string;
    sunrise: string;
    high: string;
    low: string;
    sunset: string;
    aqi: string;
    fx: string;
    fl: string;
    type: string;
    notice: string;
}
/**
 * 昨日情况
 */
export class WeatherYesterday extends Forecast {
    
}
/*
{
	"date": "20170927",
	"message": "Success !",
	"status": 200,
	"city": "南京",
	"count": 2,
	"data": {
		"shidu": "95%",
		"pm25": 25.0,
		"pm10": 37.0,
		"quality": "优",
		"wendu": "24",
		"ganmao": "各类人群可自由活动",
		"yesterday": {
			"date": "26日星期二",
			"sunrise": "05:54",
			"high": "高温 29.0℃",
			"low": "低温 23.0℃",
			"sunset": "17:57",
			"aqi": 50.0,
			"fx": "西风",
			"fl": "3-4级",
			"type": "阴",
			"notice": "阴天没有晴天的明朗，却依然明亮"
		},
		"forecast": [{
			"date": "27日星期三",
			"sunrise": "05:55",
			"high": "高温 25.0℃",
			"low": "低温 20.0℃",
			"sunset": "17:56",
			"aqi": 38.0,
			"fx": "无持续风向",
			"fl": "4-5级",
			"type": "雷阵雨",
			"notice": "空旷场地不要使用有金属尖端的雨伞"
		},
		{
			"date": "28日星期四",
			"sunrise": "05:56",
			"high": "高温 25.0℃",
			"low": "低温 18.0℃",
			"sunset": "17:55",
			"aqi": 50.0,
			"fx": "东北风",
			"fl": "3-4级",
			"type": "多云",
			"notice": "今日多云，骑上单车去看看世界吧"
		},
		{
			"date": "29日星期五",
			"sunrise": "05:56",
			"high": "高温 24.0℃",
			"low": "低温 19.0℃",
			"sunset": "17:53",
			"aqi": 57.0,
			"fx": "东南风",
			"fl": "3-4级",
			"type": "阴",
			"notice": "阴天是彩虹的前期之景"
		},
		{
			"date": "30日星期六",
			"sunrise": "05:57",
			"high": "高温 24.0℃",
			"low": "低温 20.0℃",
			"sunset": "17:52",
			"aqi": 34.0,
			"fx": "东南风",
			"fl": "4-5级",
			"type": "雷阵雨",
			"notice": "雷雨闪电时，应切断电器电源，以免损坏"
		},
		{
			"date": "01日星期日",
			"sunrise": "05:57",
			"high": "高温 28.0℃",
			"low": "低温 22.0℃",
			"sunset": "17:51",
			"aqi": 36.0,
			"fx": "西北风",
			"fl": "4-5级",
			"type": "雷阵雨",
			"notice": "雷雨较大时要远离树木，选择建筑物躲雨"
		}]
	}
}
*/