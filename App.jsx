import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Sidebar } from "./components/Sidebar";
import { ProjectCard } from "./components/ProjectCard";
import { Modal } from "./components/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { INITIAL_PROFILE } from "./config/arreglos";
import { INITIAL_PROJECTS } from "./config/arreglos";
import "./index.css";

const App = () => {
  const profile = INITIAL_PROFILE;
  const projects = INITIAL_PROJECTS;
  const [selectedProject, setSelectedProject] = useState(null);

  //******************** */
  return (
    <div className="d-flex flex-column flex-lg-row min-vh-100 bg-dark text-light overflow-x-hidden">
      {/* Fixed Sidebar */}
      <Sidebar profile={profile} />

      {/* Main Content Area */}
      <main className="layout-main bg-black position-relative">
        <div className="p-4 p-lg-5 position-relative z-1">
          <header className="mb-5 d-flex align-items-end justify-content-between">
            <div>
              <h2 className="h6 text-info text-uppercase letter-spacing-2 mb-2 d-flex align-items-center gap-2">
                <span
                  className="d-inline-block rounded-circle bg-info"
                  style={{ width: "8px", height: "8px" }}
                ></span>
                Portfolio
              </h2>
              <h2 className="fw-bold text-white mt-3 mb-0">
                Algunos Proyectos
              </h2>
            </div>
          </header>

          <div className="row g-4">
            {projects.map((project) => (
              <div
                key={project.id}
                className="col-12 project-item hover-lift transition-all duration-700 mt-5"
              >
                <ProjectCard project={project} onClick={setSelectedProject} />
              </div>
            ))}
          </div>
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
