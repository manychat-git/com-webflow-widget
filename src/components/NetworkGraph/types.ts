export type NodeType = 'article' | 'youtube_video' | 'special_project';

export interface Node {
  id: string;
  type: NodeType;
  title: string;
  description?: string;
  imageUrl?: string;
  author?: string;
  tags?: string;
  x?: number;
  y?: number;
  z?: number;
}

export interface Link {
  source: string;
  target: string;
  strength?: number;
}

export interface GraphData {
  nodes: Node[];
  links: Link[];
}