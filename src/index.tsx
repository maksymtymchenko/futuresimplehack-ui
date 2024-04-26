import ReactDOM from 'react-dom/client';
import App from './App';
import ErrorBoundary from './common/components/ErrorBoundary/ErrorBoundary';
import { BrowserRouter } from 'react-router-dom';

import './styles/main.scss';
import { AuthProvider } from './common/components/AuthProvider/AuthProvider';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
  <ErrorBoundary>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </ErrorBoundary>
);
