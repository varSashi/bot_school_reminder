const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
  })
  const page = await browser.newPage()
  await page.goto('https://web.whatsapp.com/')
  await page.waitFor(5000)
  await page.mouse.click(82,81)
  await page.keyboard.type('salvar coisas')
  await page.waitFor(1000)
  await page.mouse.click(71,207)
  await page.waitFor(1000)
  await page.keyboard.type('https://sashiupload.imgbb.com/')
  await page.keyboard.press('Enter')
  const cookies = await page.cookies();
  await browser.close()
})()