const {app, BrowserWindow} = require('electron')

let win;

console.log(num.num)

function createWindow() {
    win = new BrowserWindow({
        height: 800,
        width: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.loadFile('./html/index.html')

    win.on('closed', () => {
        win = null;
        return process.exit(0)
    })
}

app.on('ready', () => {
    createWindow()
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
