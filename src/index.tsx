import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import AppState from "./app/AppState";
import App from "./app/App";

const appState = new AppState();

ReactDOM.render(
  <Provider appState={appState}>
    <App/>
  </Provider>
, document.getElementById('render-target'));
