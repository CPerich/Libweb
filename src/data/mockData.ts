import { Image, Collection, Category } from '../types';

export const categories: Category[] = [
  { id: 'all', name: 'All Categories' },
  { id: 'nature', name: 'Nature' },
  { id: 'architecture', name: 'Architecture' },
  { id: 'business', name: 'Business' },
  { id: 'technology', name: 'Technology' },
  { id: 'food', name: 'Food & Drink' },
  { id: 'people', name: 'People' },
  { id: 'travel', name: 'Travel' },
];

export const mockImages: Image[] = [
  {
    id: '1',
    url: 'https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Mountain Landscape',
    photographer: 'Alex Weber',
    description: 'Beautiful mountain landscape with snow-capped peaks at sunset.',
    tags: ['mountains', 'landscape', 'nature', 'sunset'],
    category: 'nature',
    dimensions: '5472 x 3648',
    size: '4.2 MB'
  },
  {
    id: '2',
    url: 'https://images.pexels.com/photos/1172064/pexels-photo-1172064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Modern Architecture',
    photographer: 'Sarah Johnson',
    description: 'Contemporary architectural design with clean lines and glass facade.',
    tags: ['building', 'modern', 'architecture', 'urban'],
    category: 'architecture',
    dimensions: '3888 x 2592',
    size: '3.7 MB'
  },
  {
    id: '3',
    url: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Business Meeting',
    photographer: 'Michael Brown',
    description: 'Professional team discussing strategies in a modern office space.',
    tags: ['business', 'meeting', 'office', 'professional'],
    category: 'business',
    dimensions: '4256 x 2832',
    size: '5.1 MB'
  },
  {
    id: '4',
    url: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Tech Workspace',
    photographer: 'Lisa Chen',
    description: 'Modern technology workspace with computer and accessories.',
    tags: ['technology', 'workspace', 'computer', 'desk'],
    category: 'technology',
    dimensions: '5184 x 3456',
    size: '4.8 MB'
  },
  {
    id: '5',
    url: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Fresh Fruit Platter',
    photographer: 'Daniel Martinez',
    description: 'Colorful arrangement of fresh seasonal fruits on a wooden board.',
    tags: ['food', 'fruits', 'healthy', 'fresh'],
    category: 'food',
    dimensions: '4000 x 2667',
    size: '3.9 MB'
  },
  {
    id: '6',
    url: 'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Portrait of Woman',
    photographer: 'Emily Wilson',
    description: 'Artistic portrait of a woman with natural lighting.',
    tags: ['portrait', 'woman', 'people', 'model'],
    category: 'people',
    dimensions: '3840 x 5760',
    size: '6.2 MB'
  },
  {
    id: '7',
    url: 'https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Beach Sunset',
    photographer: 'Thomas Anderson',
    description: 'Stunning sunset view at a tropical beach with palm trees silhouette.',
    tags: ['beach', 'sunset', 'travel', 'tropical'],
    category: 'travel',
    dimensions: '4912 x 3264',
    size: '5.5 MB'
  },
  {
    id: '8',
    url: 'https://images.pexels.com/photos/872498/pexels-photo-872498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Running Stream',
    photographer: 'Oliver Harris',
    description: 'Crystal clear water running through rocks in a forest stream.',
    tags: ['water', 'stream', 'forest', 'nature'],
    category: 'nature',
    dimensions: '4500 x 3000',
    size: '4.3 MB'
  },
  {
    id: '9',
    url: 'https://images.pexels.com/photos/1011334/pexels-photo-1011334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Historic Building',
    photographer: 'Jessica Taylor',
    description: 'Ancient architectural marvel with intricate stonework and detailing.',
    tags: ['historic', 'building', 'architecture', 'old'],
    category: 'architecture',
    dimensions: '5760 x 3840',
    size: '6.7 MB'
  },
  {
    id: '10',
    url: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Team Collaboration',
    photographer: 'Robert Johnson',
    description: 'Diverse business team collaborating on a project in a creative workspace.',
    tags: ['team', 'collaboration', 'business', 'workplace'],
    category: 'business',
    dimensions: '4096 x 2731',
    size: '4.6 MB'
  },
  {
    id: '11',
    url: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Tech Gadgets',
    photographer: 'Andrew Smith',
    description: 'Collection of modern technology gadgets on a desk.',
    tags: ['technology', 'gadgets', 'electronics', 'modern'],
    category: 'technology',
    dimensions: '4288 x 2848',
    size: '5.2 MB'
  },
  {
    id: '12',
    url: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Gourmet Dessert',
    photographer: 'Maria Rodriguez',
    description: 'Elegantly plated gourmet chocolate dessert with fruit garnish.',
    tags: ['food', 'dessert', 'gourmet', 'sweet'],
    category: 'food',
    dimensions: '3936 x 2624',
    size: '4.1 MB'
  },
];

export const mockCollections: Collection[] = [
  {
    id: '1',
    title: 'Natural Landscapes',
    description: 'Breathtaking views of mountains, forests, and lakes',
    coverImage: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1600',
    imageCount: 42
  },
  {
    id: '2',
    title: 'Urban Exploration',
    description: 'City life, architecture, and urban landscapes',
    coverImage: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1600',
    imageCount: 38
  },
  {
    id: '3',
    title: 'Minimal Workspace',
    description: 'Clean, minimal workspaces and office setups',
    coverImage: 'https://images.pexels.com/photos/6444/pencil-typography-black-design.jpg?auto=compress&cs=tinysrgb&w=1600',
    imageCount: 24
  }
];