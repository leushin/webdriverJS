"use strict";

let webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until,
    driver = new webdriver.Builder().withCapabilities({'browserName': 'chrome' }).build();
    //driver = new webdriver.Builder().withCapabilities({'browserName': 'firefox', acceptSslCerts: true, acceptInsecureCerts: true});


driver.get('https://github.com/pricing').then(() => {
    //driver.sleep(2000);
    driver.findElement(By.css('.btn-outline-green')).click().then(() => {
        //driver.sleep(2000);
        driver.findElement(By.css('#user_login')).sendKeys('Selenium').then(() => {
            //driver.sleep(2000);
            driver.navigate().to('http://react-component.github.io/slider/examples/slider.html').then(() => {
                driver.sleep(2000);
                let elem = driver.findElement(By.css('.rc-slider-handle'));
                //driver.actions().mouseMove(elem).mouseDown().mouseMove({x: 300, y: 0}).mouseUp().perform().then(() => {
                driver.actions().dragAndDrop(elem, {x: 300, y: 0}).perform().then(() => {
                    driver.sleep(2000);
                    driver.navigate().to('http://rubaxa.github.io/Sortable/').then(() => {
                        driver.sleep(2000);
                        let from = driver.findElement(By.css('#foo > li:first-of-type'));
                        let to = driver.findElement(By.css('.logo'));
                        driver.actions().dragAndDrop(from, to).perform();
                    });
                });
            });
        });
    });

    driver.sleep(5000);
    driver.quit();

});