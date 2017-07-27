import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();
