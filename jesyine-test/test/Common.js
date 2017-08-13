var request = require("request");
var common = {
	requestCallback : function(options, callback) {
		console.log("================ " + options.method + " " + options.url + " ===================");
		console.log(JSON.stringify(options, null, 4));
		request(options, callback);
	},
	sleep : function(sleepTime) {
		for (var start = +new Date; +new Date - start <= sleepTime;) {
		}
	}
}

exports.common = common;
