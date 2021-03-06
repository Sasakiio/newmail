export default function (date, fmt) {
	//获取年份
	if(/(y+)/.test(fmt)) {
		fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
	}
	//时间格式化
	let o = {
		'M+': date.getMonth() + 1,
		'd+': date.getDate(),
		'h+': date.getHours(),
		'm+': date.getMinutes(),
		's+': date.getSeconds()
	};
	
	for(let k in o) {
		if(new RegExp(`(${k})`).test(fmt)) {
			// console.log(RegExp.$1);
			let str = o[k] + '';
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : addZero(str))
		}
	}
	return fmt;
};
function addZero(str) {
		return ('00' + str).substr(str.length)
	}