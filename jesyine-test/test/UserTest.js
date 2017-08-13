var expect = require('chai').expect;
var should = require('chai').should;
var assert = require('chai').assert;

var UserApis = require("./UserApis").UserApis;


describe("User-相关测试", function() {
	it("User登录", function(done) {
        UserApis.login(function(error, response, apiResult) {
			console.log("User登录" + "响应: " + JSON.stringify(apiResult, null, 4));
			expect(apiResult.code).to.be.equal(2000);
			expect(response.statusCode).to.be.equal(200);
			done();
		});
	})
});
