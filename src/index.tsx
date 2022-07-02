import { createRoot } from 'react-dom/client';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AnimatedRoutes } from './components/container/AnimatedRoutes';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <Router>
      <AnimatedRoutes />
    </Router>
  </React.StrictMode>
);
