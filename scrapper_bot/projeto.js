const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    args:[
      '--window-size=1920,1080'
    ]
  })
  const page = await browser.newPage()
  page.setViewport({ width: 1920, height: 1080 })
  await page.goto('https://cpbedu.me/login')
  await page.type('#m_login', '####')
  await page.keyboard.press("Tab")
  await page.keyboard.type('####')
  await page.click('#m_login_signin_submit')
  await page.waitFor(3000)
  page.evaluate(_ => {
    window.scrollBy(0, 350);
  })
  await page.waitFor(2000)
  await page.mouse.click(1661, 545)
  await page.waitFor(2000)
  page.evaluate(_ => {
    window.scrollBy(0, 350);
  })
  await page.screenshot({path: "aula1.png"})
  await page.goBack()

  await page.waitFor(2000)
  page.evaluate(_ => {
    window.scrollBy(0, 350);
  })
  await page.waitFor(2000)
  await page.mouse.click(1661, 604)
  await page.waitFor(2000)
  page.evaluate(_ => {
    window.scrollBy(0, 350);
  })
  await page.screenshot({path: "aula2.png"})
  await page.goBack()

  await page.waitFor(2000)
  page.evaluate(_ => {
    window.scrollBy(0, 350);
  })
  await page.waitFor(2000)
  await page.mouse.click(1661, 662)
  await page.waitFor(2000)
  page.evaluate(_ => {
    window.scrollBy(0, 350);
  })
  await page.screenshot({path: "aula3.png"})
  await page.goto('https://cpbedu.me/e-class')

  await page.waitFor(2000)
  page.evaluate(_ => {
    window.scrollBy(0, 350);
  })
  await page.waitFor(2000)
  await page.mouse.click(1661, 721)
  await page.waitFor(2000)
  page.evaluate(_ => {
    window.scrollBy(0, 350);
  })
  await page.screenshot({path: "aula4.png"})
  await page.goBack()

  await page.waitFor(2000)
  page.evaluate(_ => {
    window.scrollBy(0, 350);
  })
  await page.waitFor(2000)
  await page.mouse.click(1661, 772)
  await page.waitFor(2000)
  page.evaluate(_ => {
    window.scrollBy(0, 350);
  })
  await page.screenshot({path: "aula5.png"})
  await page.goBack()

  await page.waitFor(2000)
  page.evaluate(_ => {
    window.scrollBy(0, 350);
  })
  await page.waitFor(2000)
  await page.mouse.click(1661, 839)
  await page.waitFor(2000)
  page.evaluate(_ => {
    window.scrollBy(0, 350);
  })
  await page.screenshot({path: "aula6.png"})
  page.goBack()
  await browser.close()
})()