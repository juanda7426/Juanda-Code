import React from 'react';
import { ArrowUpRight, Code2 } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div 
      className="group relative cursor-pointer"
      onClick={() => onClick(project)}
    >
      {/* Tech Border Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-tech-accent to-tech-purple opacity-0 group-hover:opacity-75 transition-opacity duration-500 rounded-lg blur-sm"></div>
      
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-tech-900 border border-white/10">
        <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-black/0 transition-colors duration-500" />
        <img 
          src={project.image} 
          alt={project.title} 
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 filter saturate-50 group-hover:saturate-100"
        />
        
        {/* Overlay Content */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 z-20" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 z-30 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex justify-between items-end">
            <div>
              <span className="inline-block px-2 py-1 mb-2 text-xs font-mono font-bold text-black bg-tech-accent rounded-sm">
                {project.category}
              </span>
              <h3 className="text-2xl font-bold text-white group-hover:text-tech-accent transition-colors">
                {project.title}
              </h3>
            </div>
            <div className="p-2 bg-white/10 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity delay-100 hover:bg-white/20">
              <ArrowUpRight className="h-5 w-5 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Tech decoration details */}
      <div className="mt-4 flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
           <Code2 size={14} className="text-gray-500" />
           <div className="flex gap-2">
             {project.tags.slice(0, 3).map(tag => (
               <span key={tag} className="text-xs font-mono text-gray-500 group-hover:text-gray-300 transition-colors">
                 #{tag}
               </span>
             ))}
           </div>
        </div>
        <span className="text-xs font-mono text-gray-600">{project.year}</span>
      </div>
    </div>
  );
};