import React, { useState } from 'react';
import { Plus, ChevronDown } from 'lucide-react';
import { Sidebar } from './components/Sidebar';
import { ProjectCard } from './components/ProjectCard';
import { Modal } from './components/Modal';
import { Project, UserProfile } from './types';

// Updated Data for Juanda Code
const INITIAL_PROFILE: UserProfile = {
  name: "Juanda Code",
  title: "Full Stack Developer",
  bio: "Soy Juan David Valencia. No uso plantillas. Construyo ecosistemas digitales robustos y aplicaciones a medida desde cero. Si buscas llevar tu idea a otro nivel con código limpio, arquitectura escalable y una UX que sorprende, estás en el lugar correcto.",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=400&h=400&q=80",
  skills: ["React / Next.js", "Node.js / Express", "PostgreSQL", "Tailwind CSS", "Electron (Desktop)", "Stripe Integration"],
  email: "contacto@juandacode.com",
  socials: [
    { platform: "Twitter", url: "#" },
    { platform: "LinkedIn", url: "#" },
    { platform: "GitHub", url: "#" }
  ]
};

const INITIAL_PROJECTS: Project[] = [
  {
    id: '1',
    title: "Nova Dashboard",
    category: "SaaS Platform",
    year: "2024",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
    description: "Una plataforma de análisis de datos en tiempo real construida para una Fintech internacional. Maneja millones de transacciones con visualización de datos usando D3.js y WebSockets para actualizaciones instantáneas.",
    tags: ["React", "D3.js", "WebSockets", "Node.js"]
  },
  {
    id: '2',
    title: "Aura E-Commerce",
    category: "Custom E-Commerce",
    year: "2023",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1600&auto=format&fit=crop",
    description: "Solución de comercio electrónico 'headless' desarrollada desde cero. Sin Shopify, sin WooCommerce. Arquitectura de microservicios para escalar a 50k usuarios concurrentes durante lanzamientos de producto.",
    tags: ["Next.js", "Stripe API", "Redis", "PostgreSQL"]
  },
  {
    id: '3',
    title: "Desktop Sync",
    category: "Desktop App",
    year: "2023",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1600&auto=format&fit=crop",
    description: "Aplicación de escritorio multiplataforma (Mac/Windows) para sincronización de archivos segura en entornos corporativos. Encriptación de extremo a extremo y rendimiento nativo.",
    tags: ["Electron", "React", "C++ Bindings", "Security"]
  }
];

const App: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile>(INITIAL_PROFILE);
  const [projects, setProjects] = useState<Project[]>(INITIAL_PROJECTS);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleUpdateAvatar = (file: File) => {
    const objectUrl = URL.createObjectURL(file);
    setProfile(prev => ({ ...prev, avatar: objectUrl }));
  };

  const handleAddProject = () => {
    const newProject: Project = {
      id: Date.now().toString(),
      title: "Proyecto Confidencial " + (projects.length + 1),
      category: "In Development",
      year: new Date().getFullYear().toString(),
      image: `https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop&random=${Date.now()}`,
      description: "Desarrollo en curso. Arquitectura definida, sprint 1 completado. Detalles bajo NDA.",
      tags: ["DevOps", "Cloud", "API"]
    };
    setProjects([...projects, newProject]);
    
    // Smooth scroll to bottom
    setTimeout(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-tech-950 text-gray-200">
      
      {/* Fixed Sidebar */}
      <Sidebar profile={profile} onUpdateAvatar={handleUpdateAvatar} />

      {/* Main Content Area */}
      <main className="flex-1 lg:ml-[40%] min-h-screen bg-tech-950 relative">
        {/* Abstract Background Elements */}
        <div className="fixed inset-0 pointer-events-none z-0">
           <div className="absolute top-[10%] left-[50%] w-96 h-96 bg-tech-purple/10 rounded-full blur-[100px]"></div>
           <div className="absolute bottom-[20%] right-[10%] w-64 h-64 bg-tech-accent/5 rounded-full blur-[80px]"></div>
        </div>

        <div className="p-6 lg:p-24 max-w-7xl mx-auto relative z-10">
          
          <header className="mb-20 fade-in flex items-end justify-between">
            <div>
              <h2 className="text-sm font-mono text-tech-accent uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-tech-accent rounded-full inline-block"></span> Portfolio
              </h2>
              <h1 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
                Proyectos <span className="text-gray-600">Recientes</span>
              </h1>
            </div>
            <div className="hidden lg:block text-gray-500 animate-bounce">
              <ChevronDown size={24} />
            </div>
          </header>

          <div className="grid grid-cols-1 gap-y-20 gap-x-12">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className={`transform transition-all duration-700 hover:-translate-y-2 ${
                  index % 2 === 0 ? 'lg:mr-12' : 'lg:ml-12 lg:mt-24'
                }`}
              >
                <ProjectCard 
                  project={project} 
                  onClick={setSelectedProject} 
                />
              </div>
            ))}
          </div>

          <div className="mt-40 border-t border-white/10 pt-20 flex justify-center">
            <button 
              onClick={handleAddProject}
              className="group flex flex-col items-center gap-4 text-gray-500 hover:text-tech-accent transition-colors duration-300"
            >
              <div className="p-6 rounded-full border border-dashed border-gray-700 group-hover:border-tech-accent group-hover:shadow-[0_0_15px_rgba(0,242,255,0.3)] transition-all duration-300 bg-black">
                <Plus size={32} />
              </div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] font-bold">Cargar Nuevo Desarrollo</span>
            </button>
          </div>
          
          <footer className="mt-24 pt-12 border-t border-white/5 lg:hidden text-center text-gray-600 text-xs font-mono">
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