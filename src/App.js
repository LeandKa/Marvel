import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import store from './store';
import Theme from './Theme/Theme';
import ContextStore from './ContextStore';
import Routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <ContextStore>
        <BrowserRouter>
          <Theme />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <Routes />
        </BrowserRouter>
      </ContextStore>
    </Provider>
  );
}

export default App;
