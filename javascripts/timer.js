var timer = {
	do: function() {
		var _this = this;
		_this.everySecond();
		setInterval(function() {
			_this.everySecond();
		},1000);
	},
	everySecond: function() {
		var day, hour, minute, second, finishTime = new Date(2018, 05 , 07, 08, 00, 00);
		var startTime = new Date();
		var remainning = (finishTime.getTime() - startTime.getTime())/1000;
		day = Math.floor(remainning / 86400);
		remainning = remainning % 86400;
		hour = Math.floor(remainning / 3600);
		remainning = remainning % 3600;
		minute = Math.floor(remainning / 60)
		second = Math.floor(remainning % 60);
		second = second < 10 ? "0" + second : second;
		var text = day + "天" + hour + "小时" + minute + "分" + second + "秒";
		document.getElementsByTagName("h4")[0].innerHTML = text;
	}
}
timer.do();