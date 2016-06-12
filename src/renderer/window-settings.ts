let WindowSettings: {route?: string} = {};
if ((<any> global).window) {
  let url = require('url');
  const queryParams = url.parse(window.location.href, true).query;
  WindowSettings = queryParams.windowParams ? JSON.parse(queryParams.windowParams) : {};
}

export default WindowSettings;
