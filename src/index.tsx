import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import 'react-toastify/dist/ReactToastify.min.css';
import 'react-widgets/dist/css/react-widgets.css';
import './index.css';
import App from './app/';
import ScrollToTop from './components/scroll-to-top';
import * as serviceWorker from './serviceWorker';
import dateFnsLocalizer from 'react-widgets-date-fns';

dateFnsLocalizer();

export const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
