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

// Auto-initialize if script is loaded with data-url attribute
if (typeof window !== 'undefined') {
  const script = document.currentScript as HTMLScriptElement;
  if (script?.dataset.url) {
    window.addEventListener('load', () => {
      initGraph({
        dataUrl: script.dataset.url,
        containerId: script.dataset.container
      });
    });
  }
}
