import React, { useEffect } from 'react';
import { X, Calendar, ExternalLink, Code, Database } from 'lucide-react';
import PropTypes from 'prop-types';

export const Modal = ({ isOpen, onClose, project }) => {
  useEffect(() => {
    const handleEsc = (e) => {
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
    <div className="modal show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.9)' }}>
      <div className="modal-dialog modal-xl modal-dialog-centered" role="document">
        <div className="modal-content bg-dark text-white border-secondary overflow-hidden">
          <div className="position-absolute top-0 end-0 p-3 z-3">
             <button type="button" className="btn-close btn-close-white" aria-label="Close" onClick={onClose}></button>
          </div>
          
          <div className="row g-0">
             <div className="col-lg-7">
                <img src={project.image} alt={project.title} className="w-100 h-100 object-fit-cover" style={{ minHeight: '300px' }} />
             </div>
             
             <div className="col-lg-5 p-4 p-lg-5 d-flex flex-column">
                <div className="mb-4">
                   <div className="d-flex align-items-center gap-3 mb-3">
                      <span className="badge bg-soft-purple text-info border border-info font-monospace">{project.category}</span>
                      <span className="text-secondary small font-monospace d-flex align-items-center gap-1">
                         <Calendar size={14} /> {project.year}
                      </span>
                   </div>
                   
                   <h2 className="display-5 fw-bold mb-3">{project.title}</h2>
                   
                   <p className="text-secondary lead fw-light">
                      {project.description}
                   </p>
                </div>
                
                <div className="mt-auto">
                   <h4 className="h6 font-monospace text-uppercase text-secondary mb-3 d-flex align-items-center gap-2">
                      <Database size={16} /> Stack Tecnológico
                   </h4>
                   <div className="d-flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                         <span key={tag} className="badge bg-secondary text-dark fw-normal p-2 font-monospace">
                            {tag}
                         </span>
                      ))}
                   </div>
                   
                   <div className="d-flex gap-3">
                      <button className="btn btn-light flex-grow-1 d-flex align-items-center justify-content-center gap-2 fw-bold text-uppercase">
                         Ver Live Demo <ExternalLink size={18} />
                      </button>
                      <button className="btn btn-outline-light px-4">
                         <Code size={20} />
                      </button>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  project: PropTypes.object,
};