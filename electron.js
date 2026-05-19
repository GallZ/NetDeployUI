const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    backgroundColor: '#0B1120',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  // This forces the console window to open so we can catch any blank screen bugs!
  mainWindow.webContents.openDevTools();
  mainWindow.setMenuBarVisibility(false);

  // If we have a dev URL environment variable, load it (Vite Dev Server)
  // Otherwise, use loadFile to read the production build safely
  if (process.env.ELECTRON_START_URL) {
    mainWindow.loadURL(process.env.ELECTRON_START_URL);
  } else {
    mainWindow.loadFile(path.join(__dirname, 'dist-react', 'index.html'));
  }
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});