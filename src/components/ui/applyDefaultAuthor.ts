// applyDefaultAuthor.ts

import { Post } from '@/components/data/blogData'; // Asegúrate de que la ruta sea correcta

// Valores por defecto
const DEFAULT_AUTHOR_NAME = "Hoover F. Rueda-Chacón";
const DEFAULT_AUTHOR_PHOTO = "/assets/profesor.webp";

// Función para aplicar valores por defecto
export const applyDefaultAuthor = (posts: Omit<Post, 'authorName' | 'authorPhoto'>[]): Post[] => {
  return posts.map(post => ({
    ...post,
    authorName: DEFAULT_AUTHOR_NAME, 
    authorPhoto: DEFAULT_AUTHOR_PHOTO,
  }));
};
