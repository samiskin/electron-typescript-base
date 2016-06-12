import * as url from 'url';
import { BrowserWindow, screen, globalShortcut } from 'electron';
import ReduxComponent from 'lib/redux-component';
import * as Store from 'lib/store';
import { getCounter } from 'reducers/app-reducer';

interface State {
  counter: boolean
};

export default class Application extends ReduxComponent<State>{
  state: State;
  mainWindow: Electron.BrowserWindow;

  constructor() {
    super();

    this.mainWindow = new BrowserWindow({
      width: 640,
      height: 480,
    });

    this.loadFileUrl(
      this.mainWindow,
      { route: '/main' }
    );
  }

  protected getState(store: State): State | {} {
    return {
      counter: getCounter(store),
    };
  }

  private loadFileUrl(wnd: Electron.BrowserWindow, params?: { route: string }, pathname?: string) {
    if (!pathname) {
      let htmlFile = process.env.HOT ? `index-hot.html` : `index.html`;
      pathname = `${process.cwd()}/static/${htmlFile}`;
    }

    let targetUrl = url.format({
      protocol: 'file',
      pathname: pathname,
      slashes: true,
      query: {windowParams: JSON.stringify(params)}
    });

    wnd.loadURL(targetUrl);
  }

  protected update(prevState: State) {
    if (prevState.counter !== this.state.counter) {
      console.log(`Application state changed: ${this.state.counter}`);
    }
  }

}
