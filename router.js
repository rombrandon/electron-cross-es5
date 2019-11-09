const Router = require('electron-cross').default

const router = new Router({
  routes: [
    {
      name: 'index',
      file: 'views/index.html',
      config: {
        width: 1200,
        height: 400
      }
    },
    {
      name: 'home',
      file: 'views/home.html',
      config: {
        width: 600,
        height: 800
      }
    }
  ]
})

if (router.process === 'main') {
  router.afterEach(function (app) {
    app.webContents.openDevTools()
  })
}

module.exports = router
