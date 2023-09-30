import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import './satoshi.css';
import { Provider } from 'react-redux';
import { store } from './store/index';

// console.log(store);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <Router basename='/vamvam_panel'> */}
    <Router>
      <Provider store={store()}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);
