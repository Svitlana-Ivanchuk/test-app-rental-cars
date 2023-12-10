import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { GlobalStyle } from 'components/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/">
        <PersistGate loading={null} persistor={persistor}>
          <App />
          <GlobalStyle />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
