const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
  const page = await browser.newPage();
  await page.goto('https://www.registrocivil.cl/OficinaInternet/servlet/HomeVenta');
  await page.screenshot({path: 'registrocivil.png'});

  await browser.close();
})();