import ReactDOM from 'react-dom/client';
import App from './app';

import { BrowserRouter } from 'react-router-dom';
import { setupStore } from './app/appStore';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = setupStore();

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
