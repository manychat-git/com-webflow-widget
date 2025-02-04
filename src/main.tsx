import React from 'react';
import ReactDOM from 'react-dom/client';
import NetworkGraph from './components/NetworkGraph/NetworkGraph';
import './index.css';

ReactDOM.createRoot(document.getElementById('graph-container')!).render(
  <React.StrictMode>
    <NetworkGraph />
  </React.StrictMode>,
);
