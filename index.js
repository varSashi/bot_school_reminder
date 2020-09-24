const { waitForDebugger } = require('inspector')
const robots = {
    school: require('./scrapper_bot/projeto.js'),
    uploader: require('./uploader_bot/upload.js'),
  }

  async function start() {
    robots.input()
    await robots.school()
    await robots.uploader()
  };