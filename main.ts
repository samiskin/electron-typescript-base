import { app, BrowserWindow } from 'electron';
import Application from 'src/browser/application';

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('ready', function() {
  const application = new Application();
});
