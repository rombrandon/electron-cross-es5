const {app} = require('electron')
const router = require('./router')

let main

app.on('ready', function () {
  main = router.init().app
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (main === null) {
    main = router.init().app
  }
})
