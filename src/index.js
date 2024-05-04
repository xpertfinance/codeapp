import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import PWAPrompt from 'react-ios-pwa-prompt';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
    <PWAPrompt
    promptOnVisit={1}
    timesToShow={3}
    copyClosePrompt="Close"
    permanentlyHideOnDismiss={false}
  />
  </React.StrictMode>
);
serviceWorkerRegistration.unregister();

reportWebVitals();