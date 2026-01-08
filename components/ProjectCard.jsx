import React from 'react';
import { ArrowUpRight, Code2 } from 'lucide-react';
import PropTypes from 'prop-types';

export const ProjectCard = ({ project, onClick }) => {
  return (
    <div 
      className="card bg-dark border-secondary text-white overflow-hidden cursor-pointer h-100 group"
      onClick={() => onClick(project)}
      style={{ cursor: 'pointer' }}
    >
      <div className="position-relative ratio ratio-16x9">
        <img 
          src={project.image} 
          alt={project.title} 
          className="card-img-top object-fit-cover w-100 h-100 opacity-75 hover-opacity-100 transition-all"
        />
        <div className="position-absolute bottom-0 start-0 w-100 p-4 bg-gradient-to-t from-black to-transparent">
          <div className="d-flex justify-content-between align-items-end">
             <div>
                <span className="badge bg-info text-dark mb-2 font-monospace">{project.category}</span>
                <h3 className="card-title h4 fw-bold">{project.title}</h3>
             </div>
             <div className="rounded-circle bg-white-50 p-2">
                <ArrowUpRight size={20} className="text-white" />
             </div>
          </div>
        </div>
      </div>
      
      <div className="card-footer bg-transparent border-0 d-flex align-items-center justify-content-between p-3">
         <div className="d-flex align-items-center gap-2 text-secondary">
            <Code2 size={16} />
            <div className="d-flex gap-2">
               {project.tags.slice(0, 3).map(tag => (
                 <span key={tag} className="small font-monospace">#{tag}</span>
               ))}
            </div>
         </div>
         <span className="small font-monospace text-secondary">{project.year}</span>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};