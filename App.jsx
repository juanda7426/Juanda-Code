import { useState, useEffect } from "react";
import { Sidebar } from "./components/Sidebar";
import { ProjectCard } from "./components/ProjectCard";
import { Modal } from "./components/Modal";
import { Loader } from "./components/Loader";
import { INITIAL_PROFILE, INITIAL_PROJECTS } from "./config/arreglos";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const App = () => {
  const profile = INITIAL_PROFILE;
  const projects = INITIAL_PROJECTS;
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulamos una carga de datos para mostrar el loader premium
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  const realProjects = projects.filter((p) => p.isReal);
  const conceptualProjects = projects.filter((p) => !p.isReal);

  return (
    <div className="d-flex flex-column flex-lg-row min-vh-100 bg-dark text-light overflow-x-hidden">
      {/* Barra Lateral Navegación */}
      <Sidebar profile={profile} />

      {/* Contenido Principal */}
      <main className="layout-main bg-black position-relative">
        <div className="p-4 p-lg-5 position-relative z-1">
          {/* SECCIÓN MUESTRA (INICIO / HERO) */}
          <section
            id="inicio"
            className="mb-5 pb-5 border-bottom border-secondary"
          >
            <h1 className="display-3 fw-bold text-white mb-4 animate-fade-in">
              Transformando ideas en{" "}
              <span className="text-info">soluciones digitales</span> de alto
              impacto.
            </h1>
            <p
              className="lead text-secondary max-w-2xl mb-5"
              style={{ maxWidth: "800px", fontSize: "1.25rem" }}
            >
              {profile.bio}
            </p>

            <div className="row g-4 mt-2 mb-5">
              <h3 className="h5 font-monospace text-info text-uppercase mb-4">
                Problemas que resuelvo:
              </h3>
              {profile.problemsSolved.map((problem, index) => (
                <div key={index} className="col-md-6">
                  <div className="d-flex gap-3 align-items-start p-3 bg-tech-900 border border-secondary rounded-3 hover-lift transition-all">
                    <div
                      className="bg-info rounded-circle mt-1"
                      style={{ width: "12px", height: "12px", flexShrink: 0 }}
                    ></div>
                    <p className="mb-0 text-light opacity-75">{problem}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5">
              <a
                href={profile.demosLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-info btn-lg px-5 py-3 fw-bold animate-fade-in hover-lift"
                style={{ borderWidth: "2px" }}
              >
                PROBAR DEMOS EN VIVO
              </a>
            </div>
          </section>

          {/* SECCIÓN PROYECTOS */}
          <section id="proyectos" className="mb-5 pb-5">
            <header className="mb-5">
              <h2 className="display-5 fw-bold text-white mb-2">
                Proyectos <span className="text-secondary">Destacados</span>
              </h2>
              <p className="text-info font-monospace uppercase">
                Expertise Real en Mercado
              </p>
            </header>

            <div className="row g-5">
              {realProjects.map((project) => (
                <div
                  key={project.id}
                  className="col-12 project-item hover-lift transition-all duration-700"
                >
                  <ProjectCard project={project} onClick={setSelectedProject} />
                </div>
              ))}
            </div>

            <header className="mb-5 mt-5 pt-5">
              <h2 className="h2 fw-bold text-white mb-2">
                Proyectos <span className="text-secondary">Conceptuales</span>
              </h2>
              <p className="text-info font-monospace uppercase">
                Investigación y Nuevas Tecnologías
              </p>
            </header>

            <div className="row g-4">
              {conceptualProjects.map((project) => (
                <div
                  key={project.id}
                  className="col-md-6 project-item hover-lift transition-all"
                >
                  <ProjectCard project={project} onClick={setSelectedProject} />
                </div>
              ))}
            </div>
          </section>

          {/* SECCIÓN SOBRE MÍ */}
          <section
            id="sobre-mi"
            className="mb-5 pb-5 border-top border-secondary pt-5"
          >
            <div className="row align-items-center">
              <div className="col-lg-12">
                <h2 className="display-5 fw-bold text-white mb-4">
                  Perfil <span className="text-info">Técnico</span>
                </h2>
                <div className="bg-tech-900 p-4 p-md-5 rounded-4 border border-secondary shadow-lg">
                  <p className="lead text-secondary mb-4">
                    Mi enfoque como <strong>Full Stack Developer</strong> se
                    centra en la robustez y la experiencia de usuario.
                    Especializado en el ecosistema JavaScript, combino la
                    agilidad de la web con la potencia de aplicaciones de
                    escritorio nativas.
                  </p>
                  <div className="row g-4">
                    <div className="col-md-4">
                      <h4 className="h6 text-info text-uppercase font-monospace mb-3">
                        Enfoque Web
                      </h4>
                      <p className="small text-secondary">
                        Desarrollo de SPAs y aplicaciones progresivas altamente
                        interactivas con React y arquitecturas escalables en
                        Node.js.
                      </p>
                    </div>
                    <div className="col-md-4">
                      <h4 className="h6 text-info text-uppercase font-monospace mb-3">
                        Enfoque Desktop
                      </h4>
                      <p className="small text-secondary">
                        Creación de software multiplataforma (Windows/macOS)
                        mediante Electron, integrando seguridad local y alto
                        rendimiento.
                      </p>
                    </div>
                    <div className="col-md-4">
                      <h4 className="h6 text-info text-uppercase font-monospace mb-3">
                        Arquitectura
                      </h4>
                      <p className="small text-secondary">
                        Diseño de bases de datos relacionales y no relacionales
                        escalables, priorizando la integridad y seguridad de la
                        información.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECCIÓN CONTACTO */}
          <section id="contacto" className="mb-5 pb-5 text-center">
            <div className="py-5 bg-gradient-to-b from-transparent to-tech-900 rounded-5 border border-info border-opacity-25">
              <h2 className="display-4 fw-bold text-white mb-3">
                ¿Listo para comenzar su proyecto?
              </h2>
              <p className="lead text-secondary mb-5">
                Hablemos sobre cómo puedo ayudarte a alcanzar tus objetivos
                digitales.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="btn btn-info btn-lg px-5 py-3 fw-bold shadow-lg"
                >
                  Contactar por Email
                </a>
                <a
                  href={profile.demosLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-info btn-lg px-5 py-3 fw-bold"
                >
                  Explorar Demos
                </a>
                <a
                  href={`https://wa.me/${profile.phone}?text=${encodeURIComponent(profile.msgWhatsApp)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-info btn-lg px-5 py-3 fw-bold"
                >
                  Escribir al WhatsApp
                </a>
              </div>
            </div>
          </section>
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
