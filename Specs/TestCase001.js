/* global browser, expect */

var launchPage = require('../Pages/launchPage');
var loginPage = require('../Pages/loginPage');
var utils = require('../library/utils');
var testData = require('../Data/testData');
var homePage, createRepoPage, repoName, repoDescription, repoREadMecomment;

repoName = "TestRepo" + utils.getRandomInt(1,5000000);
repoDescription = "Test Description : " + utils.getRandomInt(1,1000);

describe('Launch and login GitHub', function(){
	it('should be able to login and launch gitHub', function(){
		launchPage.launchGitHub();
		launchPage.clickSignIn(function(status){
			expect(status).toBe(true);
		});
		homePage = loginPage.logingitHub(browser.params.username, browser.params.password);
		homePage.verifyLogin(function(status){
			expect(status).toBe(true);
		});
	});
	
	it('should be able to create a reposititory', function(){
		repoName = "TestRepo" + utils.getRandomInt(1,5000000);
		repoDescription = "Test Description : " + utils.getRandomInt(1,1000);
		repoReadMecomment = repoName + " " + testData.repoDescription;
		createRepoPage = homePage.addRepository();
		createRepoPage.addNewRepository(repoName, repoDescription);
		repositoryPage = createRepoPage.createReadMe(repoReadMecomment);
		utils.addDataToJSON({"TestCase001Reponame" : repoName});
	});
	
	it('should be able to verify that the repository is created named : ' + repoName, function(){
		repositoryPage.verifyRepositoryCreated(repoName, repoDescription, function(status){
		    expect(status).toBe(true);
		});
	});
	
	it('should be able to delete the repository ' + repoName, function(){
		homePage.navigateHome();
		homePage.findRepository(repoName, function(status){
			expect(status).toBe(true);
		});
		repositoryPage.navigateToTabs("Settings");		
		repositoryPage.deleteRepository(repoName, function(status){
			expect(status).toBe(false);
		});
	});
	
	it('should verify if the repository is deleted : ' +repoName, function(){
		homePage.navigateHome();
		homePage.findRepository(repoName, function(status){
			expect(status).toBe(false);
		});
	});
	
	it('should be able to logout of github', function(){
		homePage.navigateHome();
		homePage.logout();
	});
});