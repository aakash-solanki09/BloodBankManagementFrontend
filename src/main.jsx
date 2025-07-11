import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { AuthProvider } from './components/AuthContext'; // ✅ update path if needed
import './index.css'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>   {/* ✅ wrap your app with this */}
      <App />
    </AuthProvider>
  </StrictMode>,
);
