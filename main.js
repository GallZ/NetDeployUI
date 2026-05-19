const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  // Create the browser window with a professional size
  const win = new BrowserWindow({
    width: 1280,
    height: 850,
    title: "NetDeploy UI - Network Configuration Suite",
    backgroundColor: '#0B1120', // Matches your UI theme
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  // Load the production build of your React app
  // This looks for the index.html inside the 'build' or 'dist' folder
  win.loadFile(path.join(__dirname, 'build/index.html'));

  // Remove the default menu bar for a cleaner "app" look
  win.setMenuBarVisibility(false);
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});