const electron = require('electron')
const {app, BrowserWindow} = electron

app.on('ready', () => {
  let win = new BrowserWindow({width:800, height: 600})
  win.loadURL(`file://${__dirname}/index.html`)
  win.webContents.openDevTools()
})

exports.openWindow = () => {
  let win = new BrowserWindow({width:400, height: 200})
  win.loadURL(`file://${__dirname}/bear.html`)
}

exports.openWeb = () => {
  let AODweb = new BrowserWindow({width:1200, height: 800, frame: true})
  AODweb.loadURL(`http://opendata.atlas.cern`)
}

exports.openBigPanda = () => {
  let Pandaweb = new BrowserWindow({width:1200, height: 800})
  Pandaweb.loadURL(`http://bigpanda.cern.ch/user/arturos`)
}
