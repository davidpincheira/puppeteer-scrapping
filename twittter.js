const puppeteer = require('puppeteer');

(async () => {

    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.goto('https://twitter.com/login')
    
    await page.type('input[name="session[username_or_email]"]', '<USER>')
    await page.type('input[name="session[password]', '<PASSWORD>')
    
    await page.click('[data-testid=LoginForm_Login_Button]')
    await page.waitForSelector('[role=link]')
    await page.scresenhot({path:'twitter2.jpg'})

    await browser.close();
})();
