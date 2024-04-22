import ReactDOM from 'react-dom/client';
import App from './App';
import ErrorBoundary from './common/components/ErrorBoundary/ErrorBoundary';
import { BrowserRouter } from 'react-router-dom';

import './styles/main.scss';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
  <ErrorBoundary>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ErrorBoundary>
);
