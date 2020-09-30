const puppeteer = require('puppeteer')

const URL = process.env.URL || 'https://keen-davinci-854e86.netlify.app/'

let scrape = async () => {
    const browser = await puppeteer.launch({headless: true})
    const page = await browser.newPage()

    await page.coverage.startCSSCoverage()
    await page.goto(URL, {waitUntil: 'load'})

    const cssCoverage = await page.coverage.stopCSSCoverage()

    let criticalCSS = ''
    for (const entry of cssCoverage){
        for (const range of entry.ranges ){
            criticalCSS += entry.text.slice(range.start, range.end) + "\n"
        }
    }

    await page.close()

    await browser.close()

    return criticalCSS

}

scrape().then((value)=>{
    console.log(value)
})
