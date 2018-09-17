/* global by */

var homePage = function() {
	this.btnAdd  = element(by.xpath('//summary[@class="HeaderNavlink"]'));
	this.dropDownNewRepo = element(by.xpath('//details//a[@href="/new"]'));
	this.summaryUserHeader = element(by.xpath('//summary[@class="HeaderNavlink"]'));
	this.btnNavigateHome = element(by.xpath('//a[@class="header-logo-invertocat"]'));
	this.userIcon = element(by.xpath('//summary[@class="HeaderNavlink name mt-1"]'));
	this.btnLogOut = element(by.xpath('//form[@class="logout-form"]/button'));
	this.txtFindRepo = element(by.id('dashboard-repos-filter'));
	
	
	this.addRepository = function(){
		this.btnAdd.click();
		this.dropDownNewRepo.click();
		return require('../Pages/createRepoPage.js');
	};
	
	this.verifyLogin = function(callback){
		this.summaryUserHeader.isPresent().then(function(status){
			callback(status);
	    	});
	};
	
	this.logout = function(){
		this.userIcon.click();
		this.btnLogOut.click();
	};
	
	this.navigateHome = function(){
		this.btnNavigateHome.click();
	};
	
	this.findRepository = function(txtRepoName, callback){
		var self = this;
		this.txtFindRepo.isPresent().then(function(status){
			if(status){
			    self.txtFindRepo.clear();
			    self.txtFindRepo.sendKeys(txtRepoName);
			    var repoSitory = element(by.xpath('//li[contains(@class,"public source")]//span[@title ="'+txtRepoName+'"]'));
			    repoSitory.isPresent().then(function(status){
				    if(status){
					    callback(status);
					    repoSitory.click();
				    }
				    else{
					    callback(false);
				    }
			    });			    
			}
			else{
				callback(false);
			}
		});		
	};
};
module.exports = new homePage();