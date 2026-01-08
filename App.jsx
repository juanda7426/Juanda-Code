import React, { useState } from "react";
import { Plus, ChevronDown } from "lucide-react";
import { Sidebar } from "./components/Sidebar";
import { ProjectCard } from "./components/ProjectCard";
import { Modal } from "./components/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"; // We will use this for custom dark theme overrides
import perfil from "./img/Perfil.jpg";

// Updated Data for Juanda Code
const INITIAL_PROFILE = {
  name: "Juanda Code",
  title: "Full Stack Developer",
  bio: "Soy Juan David Valencia, desarrollador full stack especializado en construir aplicaciones y ecosistemas digitales a medida desde cero. No utilizo plantillas: diseño y desarrollo soluciones con código limpio, arquitectura escalable y una experiencia de usuario cuidada al detalle. Si buscas llevar tu idea a un nivel profesional, estable y competitivo, estás en el lugar correcto.",
  avatar: perfil,
  skills: [
    "Frontend Development (React, Vite)",
    "Backend Development (Node.js / Express)",
    "Relational Databases (PostgreSQL, MySQL)",
    "NoSQL Databases",
    "Responsive UI (Bootstrap 5)",
    "Desktop Applications (Electron)",
  ],

  email: "juanvalencia.code@gmail.com",
  phone: "573207643590",
  socials: [
    { platform: "Twitter", url: "#" },
    { platform: "LinkedIn", url: "#" },
    { platform: "GitHub", url: "#" },
  ],
};

const INITIAL_PROJECTS = [
  {
    id: "1",
    title: "Nova Dashboard",
    category: "SaaS Platform",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
    description:
      "Una plataforma de análisis de datos en tiempo real construida para una Fintech internacional. Maneja millones de transacciones con visualización de datos usando D3.js y WebSockets para actualizaciones instantáneas.",
    tags: ["React", "D3.js", "WebSockets", "Node.js"],
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

const App = () => {
  const [profile, setProfile] = useState(INITIAL_PROFILE);
  const [projects, setProjects] = useState(INITIAL_PROJECTS);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleUpdateAvatar = (file) => {
    const objectUrl = URL.createObjectURL(file);
    setProfile((prev) => ({ ...prev, avatar: objectUrl }));
  };

  const handleAddProject = () => {
    const newProject = {
      id: Date.now().toString(),
      title: "Proyecto Confidencial " + (projects.length + 1),
      category: "In Development",
      year: new Date().getFullYear().toString(),
      image: `https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop&random=${Date.now()}`,
      description:
        "Desarrollo en curso. Arquitectura definida, sprint 1 completado. Detalles bajo NDA.",
      tags: ["DevOps", "Cloud", "API"],
    };
    setProjects([...projects, newProject]);

    // Smooth scroll to bottom
    setTimeout(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="d-flex flex-column flex-lg-row min-vh-100 bg-dark text-light overflow-x-hidden">
      {/* Fixed Sidebar */}
      <Sidebar profile={profile} onUpdateAvatar={handleUpdateAvatar} />

      {/* Main Content Area */}
      <main className="layout-main bg-black position-relative">
        <div className="p-4 p-lg-5 position-relative z-1">
          <header className="mb-5 d-flex align-items-end justify-content-between">
            <div>
              <h2 className="h6 text-info text-uppercase letter-spacing-2 mb-2 d-flex align-items-center gap-2">
                <span
                  className="d-inline-block rounded-circle bg-info"
                  style={{ width: "8px", height: "8px" }}
                ></span>{" "}
                Portfolio
              </h2>
              <h1 className="display-4 fw-bold text-white">
                Proyectos <span className="text-secondary">Recientes</span>
              </h1>
            </div>
            <div className="d-none d-lg-block text-secondary">
              <ChevronDown size={24} />
            </div>
          </header>

          <div className="row g-4">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="col-12 project-item hover-lift transition-all duration-700"
              >
                <ProjectCard project={project} onClick={setSelectedProject} />
              </div>
            ))}
          </div>

          <div className="mt-5 pt-5 border-top border-secondary d-flex justify-content-center">
            <button
              onClick={handleAddProject}
              className="btn btn-link text-decoration-none group d-flex flex-column align-items-center gap-3 text-secondary text-hover-info transition-colors"
              style={{ boxShadow: "none" }}
            >
              <div className="p-4 rounded-circle border border-secondary border-dashed transition-all bg-dark">
                <Plus size={32} />
              </div>
              <span className="small text-uppercase fw-bold letter-spacing-2">
                Cargar Nuevo Desarrollo
              </span>
            </button>
          </div>

          <footer className="mt-5 pt-4 border-top border-secondary d-lg-none text-center text-secondary small font-monospace">
            <p>JUANDA CODE &copy; {new Date().getFullYear()}</p>
          </footer>
        </div>
      </main>

      {/* Project Modal */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </div>
  );
};

export default App;
