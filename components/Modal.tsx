import React, { useEffect } from 'react';
import { X, Calendar, Layers, ExternalLink, Code, Database } from 'lucide-react';
import { Project } from '../types';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, project }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 lg:p-8">
      <div 
        className="absolute inset-0 bg-black/95 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      <div className="relative w-full h-full lg:h-auto lg:max-w-6xl bg-tech-950 lg:rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row max-h-[95vh] animate-in fade-in zoom-in-95 duration-300 border border-white/10">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-black/50 text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 border border-white/10"
        >
          <X size={24} />
        </button>

        {/* Image Section */}
        <div className="w-full lg:w-7/12 h-[40vh] lg:h-auto relative bg-black group">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-tech-950 via-transparent to-transparent lg:bg-gradient-to-r" />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-5/12 p-8 lg:p-12 overflow-y-auto bg-tech-950 flex flex-col border-l border-white/5 relative">
          
          {/* Decorative Grid Background */}
          <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>

          <div className="mb-8 relative z-10">
            <div className="flex items-center gap-3 mb-4">
               <span className="px-3 py-1 bg-tech-purple/20 text-tech-purple border border-tech-purple/30 text-xs font-mono font-bold uppercase rounded tracking-wider">
                  {project.category}
               </span>
               <span className="text-gray-500 text-xs font-mono flex items-center gap-1">
                 <Calendar size={12} /> {project.year}
               </span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-none mb-6 tracking-tight">
              {project.title}
            </h2>
            
            <div className="prose prose-invert prose-lg">
               <p className="text-gray-300 font-light leading-relaxed">
                 {project.description}
               </p>
            </div>
          </div>

          <div className="mt-auto relative z-10">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-gray-500 mb-6 flex items-center gap-2">
               <Database size={14} /> Stack Tecnológico
            </h4>
            <div className="flex flex-wrap gap-2 mb-10">
              {project.tags.map(tag => (
                <span key={tag} className="px-4 py-2 bg-tech-800 text-tech-accent text-xs font-mono rounded border border-white/5 hover:border-tech-accent/50 transition-colors">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
               <button className="flex-1 py-4 bg-white text-black font-bold font-mono uppercase tracking-wider hover:bg-tech-accent hover:shadow-[0_0_20px_rgba(0,242,255,0.4)] transition-all duration-300 flex items-center justify-center gap-2 group">
                 Ver Live Demo
                 <ExternalLink size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
               </button>
               <button className="px-6 py-4 bg-transparent border border-white/20 text-white hover:bg-white/10 transition-colors flex items-center justify-center">
                 <Code size={20} />
               </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};