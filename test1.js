
//test1.js

	var webdriverio = require('webdriverio'),
    should = require('should');

    describe('Open Frontier landing page', function() {

    this.timeout(20000);
    var driver = {};
    before( function () {
    driver = webdriverio.remote({ desiredCapabilities: {browserName: 'chrome'} });
    return driver.init();
    });
	

    it('open Frontier page and verify title', function () {
    return driver
    .url('https://internet.frontier.com/')
    .getTitle().then( function (title) {
    (title).should.be.equal("Frontier® Internet Service | 877-870-4601 | Frontier Communications");
     });
  });		  
    after(function() {
    return driver.end();
    });
 });