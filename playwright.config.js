const {PlaywrightTestConfig} = require('@playwright/test');

const config = {
    retries: 1,
    timeout: 30000,
    reporter: './reporter.js',
    use: {
        baseURL: "https://the-internet.herokuapp.com",
        headless: true,
        viewport: {width: 1200, height: 720},
        //video: "on-first-retry" will replay again until its success
        video: "off", 
        screenshot: "only-on-failure", //only-on-failure will just take screenshot or video from failed page
        trace: "on"
    },

    projects: [
        {
            name: 'Chrome',
            use: {browserName: 'chromium'}
        },
        {
            name: 'Firefox',
            use: {browserName: 'firefox'}
        },
        {
            name: 'Webkit',
            use: {browserName: 'webkit'}
        }
    ]
}

module.exports = config;