import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import AppState from "./app/AppState";
import App from "./app/App";

import bookingData from "./assets/bookingData";
const { bookingDays, timeSlots, timeZone } = bookingData;

const appState = new AppState(bookingDays, timeSlots, timeZone);

ReactDOM.render(
  <Provider appState={appState}>
    <App/>
  </Provider>
, document.getElementById('render-target'));