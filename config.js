/* global browser */

var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {
	baseUrl:"https://github.com/",	
	framework: 'jasmine2',
	allScriptsTimeout: 720000,
	getPageTimeout: 90000,
	geckoDriver: './Drivers/geckodriver.exe',
	
		
	jasmineNodeOpts: {
		showColors: true,
		defaultTimeoutInterval: 720000,
		isVerbose: true
	},
		
	params: {
		username: 'new10TestUser',			
		password :'Pa$$word08*#',
		invalidPassword: 'test12345'			
	},

	capabilities: {		
		'browserName': 'chrome',
		'time-zone': 'Amsterdam',				
		acceptInsecureCerts : true,
		'prefs': {
			'credentials_enable_service': false
		},
		'moz:firefoxOptions': {
			'args': ['disable-infobars']
		},
		'chromeOptions': {
			'args': ['disable-infobars']//, "--headless", "--window-size=1920x1080"]
		}
	},

	suites: {	
		specs: ['Specs/T*.js']
	},
	onPrepare: function() {
		browser.driver.manage().window().maximize();
		jasmine.getEnv().addReporter(new HtmlReporter({
			baseDirectory: 'Execution Results',
			docTitle: 'GItHub Functional Test Case Execution Results',
			docName: 'gitHub.html',
			preserveDirectory: false
		}).getJasmine2Reporter());
	}
};
