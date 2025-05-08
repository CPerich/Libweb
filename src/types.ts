export interface Image {
  id: string;
  url: string;
  title?: string;
  description?: string;
  photographer?: string;
  tags?: string[];
  category?: string;
  dimensions?: string;
  size?: string;
}

export interface Collection {
  id: string;
  title: string;
  description?: string;
  coverImage: string;
  imageCount: number;
}

export interface Category {
  id: string;
  name: string;
}