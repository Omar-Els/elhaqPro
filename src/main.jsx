import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './app/store';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter
        future={{
          v7_relativeSplatPath: true,
          v7_startTransition: true
        }}
      >
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);



