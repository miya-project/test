/**
 * @copyright 2024 menma
 * @license Apache2.0
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import './index.css';
import 'lenis/dist/lenis.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
