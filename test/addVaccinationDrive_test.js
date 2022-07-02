var webdriver = require("selenium-webdriver");
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

let options = new chrome.Options()
let nextPort = 9222 //for example
options.addArguments(["--remote-debugging-port=" + nextPort])

var browser= new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).setChromeOptions(options).build();
browser.get('http://localhost:3000/vaccinationDrive');
const By = webdriver.By;
browser.then(() => browser.findElement(By.css('.vaccination-drive-button')).click())
.then(() => browser.findElement(By.css('.vaccine-name')).sendKeys('Covaxin'))
.then(() => browser.findElement(By.css('.slots')).sendKeys('95'))
.then(() => browser.findElement(By.css('.vaccine-date')).sendKeys('2022-01-19'))
.then(() => browser.findElement(By.css('.doses-available')).sendKeys('95'))