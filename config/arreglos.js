import perfil from "../img/Perfil.jpg";
// Updated Data for Juanda Code
export const INITIAL_PROFILE = {
  name: "Juanda Code",
  title: "Full Stack Developer",
  bio: "Soy Juan David Valencia, desarrollador full stack especializado en construir aplicaciones y ecosistemas digitales a medida desde cero. No utilizo plantillas: diseño y desarrollo soluciones con código limpio, arquitectura escalable y una experiencia de usuario cuidada al detalle. Si buscas llevar tu idea a un nivel profesional, estable y competitivo, estás en el lugar correcto.",
  avatar: perfil,
  skills: [
    "Frontend Development (React, Vite)",
    "Backend Development (Node.js / Express)",
    "Relational Databases (PostgreSQL, MySQL)",
    "NoSQL Databases",
    "Responsive UI (Bootstrap 5, Tailwind)",
    "Desktop Applications (Electron)",
  ],

  email: "juanvalencia.code@gmail.com",
  phone: "573207643590",
};

export const INITIAL_PROJECTS = [
  {
    id: "1",
    title: "Nova Dashboard",
    category: "SaaS Platform",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
    description:
      "Una plataforma de análisis de datos en tiempo real construida para una Fintech internacional. Maneja millones de transacciones con visualización de datos usando D3.js y WebSockets para actualizaciones instantáneas.",
    tags: ["React", "D3.js", "WebSockets", "Node.js", "Tailwind", "Bootstrap"],
  },
  {
    id: "2",
    title: "Aura E-Commerce",
    category: "Custom E-Commerce",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1600&auto=format&fit=crop",
    description:
      "Solución de comercio electrónico 'headless' desarrollada desde cero. Sin Shopify, sin WooCommerce. Arquitectura de microservicios para escalar a 50k usuarios concurrentes durante lanzamientos de producto.",
    tags: ["Next.js", "Stripe API", "Redis", "PostgreSQL"],
  },
  {
    id: "3",
    title: "Desktop Sync",
    category: "Desktop App",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1600&auto=format&fit=crop",
    description:
      "Aplicación de escritorio multiplataforma (Mac/Windows) para sincronización de archivos segura en entornos corporativos. Encriptación de extremo a extremo y rendimiento nativo.",
    tags: ["Electron", "React", "C++ Bindings", "Security"],
  },
];
