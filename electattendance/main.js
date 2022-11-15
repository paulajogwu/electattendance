const { app, BrowserWindow } = require('electron')
const path = require('path')

const server = require('./server'); 

let mainWindow;

function createWindow () {

  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  mainWindow.loadURL('http://localhost:8070')  //ADD THIS
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})






// app.on('ready', createWindow)

// app.on('resize', function(e,x,y){
//   mainWindow.setSize(x, y);
// });

// app.on('window-all-closed', function () {
//   if (process.platform !== 'darwin') {
//     app.quit()
//   }
// })

// app.on('activate', function () {
//   if (mainWindow === null) {
//     createWindow()
//   }
// })