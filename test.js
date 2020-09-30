const puppeteer = require('puppeteer'); 
/* extract data from css */
let scrape = async () => { 

	const browser = await puppeteer.launch({args: ['--no-sandbox', '--disabled-setuid-sandbox']}); 
	const page = await browser.newPage(); 
	
    await page.goto('https://www.google.com.ar/maps/search/carnicerias/@-34.600504,-58.4214692,13z/data=!4m2!2m1!6e6');
    await page.waitFor(1000); 

	const result = await page.evaluate(() => {

	let fullName = document.querySelector('.section-hero-header-title').innerHTML;

	return { 
        fullName
	}
    });

	browser.close(); 
	return result; 
};

scrape().then((value) => { 
	console.log(value); 
});