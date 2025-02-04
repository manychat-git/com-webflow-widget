import React from 'react';
import { createRoot } from 'react-dom/client';
import NetworkGraph from './components/NetworkGraph/NetworkGraph';
import './index.css';

interface GraphConfig {
  dataUrl: string;
  containerId?: string;
}

export function initGraph(config: GraphConfig) {
  const container = document.getElementById(config.containerId || 'graph-container');
  if (!container) {
    console.error('Graph container not found');
    return;
  }

  // Сохраняем URL данных для использования в компоненте
  window.GRAPH_DATA_URL = config.dataUrl;

  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <NetworkGraph />
    </React.StrictMode>
  );
}
