
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from '@/App';
import '@/index.css';

const basename = process.env.VITE_BASE_URL || '/';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </>
);
