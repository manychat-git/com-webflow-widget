import React from 'react';
import ReactDOM from 'react-dom/client';
import NetworkGraph from './components/NetworkGraph/NetworkGraph';
import { initializeWebflowIntegration } from './config/webflowIntegration';
import './index.css';

interface GraphConfig {
  dataUrl: string;
  containerId?: string;
}

// Экспортируем функцию инициализации для Webflow
export function initGraph(config: GraphConfig) {
  const container = document.getElementById(config.containerId || 'graph-container');
  if (!container) {
    console.error('Graph container not found');
    return;
  }

  // Инициализируем интеграцию с Webflow
  const webflow = initializeWebflowIntegration();

  // Создаем div для графа
  const graphDiv = document.createElement('div');
  graphDiv.style.width = '100%';
  graphDiv.style.height = '100vh';
  container.appendChild(graphDiv);

  // Рендерим React компонент
  ReactDOM.createRoot(graphDiv).render(
    <React.StrictMode>
      <NetworkGraph webflowIntegration={webflow} />
    </React.StrictMode>
  );
}
