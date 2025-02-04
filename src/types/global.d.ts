interface GraphConfig {
  dataUrl: string;
  containerId?: string;
}

declare global {
  interface Window {
    initGraph: (config: GraphConfig) => void;
    React: typeof import('react');
    ReactDOM: typeof import('react-dom');
    GRAPH_CONFIG_URL: string;
    GRAPH_DATA_URL: string;
    webflowConfig?: {
      popup?: {
        trigger?: { attribute: string };
        elements?: Record<string, { attribute: string }>;
      };
    };
  }
}

export {}; 