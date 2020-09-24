const puppeteer = require('puppeteer');

(async () => {
    let launchOptions = { 
        headless: false
    }

    const browser = await puppeteer.launch(launchOptions)
    const page = await browser.newPage()

    await page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36')
    await page.goto('https://imgbb.com/upload')
    await page.mouse.click(648,25)
    await page.waitFor(1000)
    await page.mouse.click(170,467)
    await page.keyboard.type('###')
    await page.keyboard.press('Tab')
    await page.keyboard.type('####')
    await page.keyboard.press('Enter')
    await page.waitFor(2000)
    await page.goto('https://imgbb.com/upload')
    await page.waitFor(60000)
    await page.waitForSelector('input[type=file]')
    await page.waitFor(1000)

    const inputUploadHandle = await page.$('input[type=file]')

    let image_1 = 'aula1.png'
    let image_2 = 'aula2.png'
    let image_3 = 'aula3.png'
    let image_4 = 'aula4.png'
    let image_5 = 'aula5.png'
    let image_6 = 'aula6.png'

    inputUploadHandle.uploadFile(image_1,image_2,image_3,image_4,image_5,image_6)
    await page.waitFor(1000)
    await page.mouse.click(393,551)
    await page.waitFor(5000)
    await browser.close()
})();