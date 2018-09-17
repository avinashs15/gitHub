/* global by, browser */
var launchPage = function() {
	this.linkSignIn = element(by.xpath('//a[@href="/login"]'));
	
	this.clickSignIn = function(callback){
		var self = this;
		this.linkSignIn.isPresent().then(function(status){
			if(status){
			    self.linkSignIn.click();
			    callback(status);
			    return require('../Pages/loginPage');			    
			}
			else{
				callback(status);
			}
		});		
	};
	
	this.launchGitHub = function(){
		browser.driver.get(browser.baseUrl);
		browser.ignoreSynchronization = true;
	};
};
module.exports = new launchPage();