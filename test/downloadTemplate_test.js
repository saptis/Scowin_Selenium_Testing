var webdriver = require("selenium-webdriver");
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

let options = new chrome.Options()
let nextPort = 9222 //for example
options.addArguments(["--remote-debugging-port=" + nextPort])

var browser= new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).setChromeOptions(options).build();
browser.get('http://localhost:3000/manageStudent');
const By = webdriver.By;
var x2 = browser.then(() => browser.findElement(By.css('#upload-students')).click())
.then(() => browser.findElement(By.css('.download-template')).click())