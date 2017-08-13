var crypto = require('crypto');
var fs = require('fs');
var hostport = require('./Constants').hostport;
var common = require('./Common').common;

/*******************************************************************************
 * Health manage related APIs
 ******************************************************************************/

var publicPrefix = '/jeysine/architecture/public/user';


var UserApis = {
	login : function(callback) {
		var requestUrl = publicPrefix + '/';
		var reuqestMethod = 'GET';
		var options = {
			method : reuqestMethod,
			url : hostport + requestUrl,
			json : true,
			jar : true
		};
		common.requestCallback(options, callback);
	}
};

exports.UserApis = UserApis;
