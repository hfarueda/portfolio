// blogData.ts

// Interfaz de Post
export interface Post {
  id: number;
  description: string; // Texto de la publicación
  mediaUrl?: string; // URL de la imagen o video
  mediaType?: "image" | "video"; // Tipo de medio
  date: string; // Fecha de la publicación
  authorName?: string;
  authorPhoto?: string;
}

// Lista de publicaciones
export const rawBlogPosts: Omit<Post, "authorName" | "authorPhoto">[] = [
  {
    id: 1,
    description:
      "Hola, mi nombre es Hoover, docente de la Universidad Industrial de Santander",
    date: "2024-09-19", // Fecha actual asignada automáticamente
  },

  {
    id: 2,
    description:
      "¿Quieres unirte a una comunidad que comparte tu pasión por la tecnología? El Semillero de Investigación “Hands-on Computer Vision” te ofrece una oportunidad única para sumergirte en el mundo de la visión por computadora. 📸💻 Conoce más👉https://semillerocv.github.io",
    mediaUrl: "/posts/post.jpeg",
    mediaType: "image",
    date: "2024-09-19", // Fecha actual asignada automáticamente
  },

  {
    id: 3,
    description:
      "How colors change as you go deeper underwater, because water selectively scatters and absorbs certain wavelengths of visible light [📹 Kendall Roberg]",
    mediaUrl: "/posts/video.mp4",
    mediaType: "video",
    date: "2024-09-19", // Fecha actual asignada automáticamente
  },
  
  
];
