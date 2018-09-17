/* global by */
var loginPage = function() {
	this.txtUsername = element(by.name('login'));
	this.txtPassword = element(by.name('password'));
	this.btnLogin = element(by.name('commit'));
	
	this.logingitHub = function(txtStrUserName, txtStrPassword){
		this.txtUsername.sendKeys(txtStrUserName);
		this.txtPassword.sendKeys(txtStrPassword);
		this.btnLogin.click();
		return require('../Pages/homePage');
	};
};
module.exports = new loginPage();