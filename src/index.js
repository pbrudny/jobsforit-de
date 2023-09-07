import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import TagManager from 'react-gtm-module';
import history from './history';
import App from './App';
import styles from './styles/App.scss';
import SetupFontAwesome from './utils/setupFontAwesome';  // Updated import path
import SetupFacebookProvider from './utils/setupFacebookProvider';  // New import

const tagManagerArgs = {
  gtmId: process.env.REACT_APP_GTM_ID,
  events: {
    sendUserInfo: 'userInfo'
  }
};

TagManager.initialize(tagManagerArgs);

const rootElement = document.getElementById('root');

render(
  <Router history={history}>
    <SetupFacebookProvider appId="536292400544593"> {/* Include SetupFacebookProvider */}
      <SetupFontAwesome />  {/* Included the SetupFontAwesome component */}
      <App />
    </SetupFacebookProvider>
  </Router>,
  rootElement
);

// If you want your common to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
