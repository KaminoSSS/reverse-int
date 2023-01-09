module.exports = function reverse (n) {
	let str = n + '';
	let result = '';
	for(let i = str.length - 1; i >= 0; i--){
		if (str[i] == '-'){
			continue ;
		} else{
			result += str[i];
		}
	}
	return result
}
