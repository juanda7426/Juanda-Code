import { Code2 } from "lucide-react";
import PropTypes from "prop-types";

export const ProjectCard = ({ project, onClick }) => {
  return (
    <div
      className="card bg-dark border-secondary text-white overflow-hidden cursor-pointer h-100 group"
      onClick={() => onClick(project)}
      style={{
        cursor: "pointer",
        boxShadow: "7px 7px 10px rgba(27, 204, 248, 0.36)",
      }}
    >
      <div className="position-relative ratio ratio-16x9">
        <img
          className="card-img-top opacity-75 hover-opacity-100 transition-all"
          src={project.image}
          alt={project.title}
        />
      </div>

      <div className="card-footer bg-transparent border-0 d-flex align-items-center justify-content-between p-3">
        <div className="d-flex align-items-center gap-2 text-secondary">
          <Code2 size={20} />
          <div className="d-flex gap-2">
            {project.tags.slice(0, 5).map((tag) => (
              <span key={tag} className=" font-monospace">
                #{tag}
              </span>
            ))}
          </div>
        </div>
        <span className="font-monospace text-secondary">{project.year}</span>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};
