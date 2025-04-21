const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');
const chrome = require('selenium-webdriver/chrome');

describe('Google Seacrh Test', function () {
    let driver;

    beforeEach(async function () {
        driver = await new Builder().forBrowser('chrome').build();
    });

    it('Visit SauceDemo pakai FireFox dan cek page title', async function () {
        await driver.get('https://www.saucedemo.com');
        const title = await driver.getTitle();
    });
    
    it('Visit SauceDemo pakai Chrome dan cek page title', async function () {
        await driver.get('https://www.saucedemo.com');
        const title = await driver.getTitle();
    });

    it('Visit SauceDemo pakai FireFox dan cek page title', async function () {
        await driver.get('https://www.saucedemo.com');
        const title = await driver.getTitle();
    });

    this.afterEach(async function () {
        await driver.quit()

  });
});