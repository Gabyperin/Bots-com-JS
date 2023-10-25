const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false}); // para poder acompanhar o navegador
  const page = await browser.newPage();
  await page.goto('https://github.com/Gabyperin'); //nome do site que vc desejar
  await page.screenshot({ path: 'github.png' }); 

  await page.goto('https://gabyperin.github.io/'); //site2 
  await page.screenshot({ path: 'pagina.png' });

  await browser.close();
})();


// Vai no terminal e escreve assim: npm install puppeteer 
// Vai instalar e aparecer uma pasta "node_modules, package-lock.json, package.json"