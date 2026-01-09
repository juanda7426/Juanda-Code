import { Terminal, Cpu, Home, Briefcase, User, Send } from "lucide-react";
import PropTypes from "prop-types";

export const Sidebar = ({ profile }) => {
  const navLinks = [
    {
      name: "Inicio",
      icon: <Home size={20} strokeWidth={1.5} />,
      href: "#inicio",
    },
    {
      name: "Proyectos",
      icon: <Briefcase size={20} strokeWidth={1.5} />,
      href: "#proyectos",
    },
    {
      name: "Sobre Mí",
      icon: <User size={20} strokeWidth={1.5} />,
      href: "#sobre-mi",
    },
    {
      name: "Contacto",
      icon: <Send size={20} strokeWidth={1.5} />,
      href: "#contacto",
    },
  ];

  return (
    <aside className="layout-sidebar bg-black border-end border-secondary text-white d-flex flex-column p-4 z-1 shadow-2xl">
      <div className="position-relative z-1">
        {/* Identity Section */}
        <div className="mb-5 mt-2">
          <div className="d-flex align-items-center gap-2 text-info font-monospace extra-small mb-2 opacity-75">
            <Terminal size={14} />
            <span
              className="text-uppercase tracking-widest"
              style={{ fontSize: "0.7rem" }}
            >
              {profile.title}
            </span>
          </div>
          <h1 className="h3 fw-bold mb-0 text-white letter-spacing-tight">
            {profile.name.split(" ")[0]}{" "}
            <span className="text-info">{profile.name.split(" ")[1]}</span>
          </h1>
        </div>

        {/* Profile Image - Con efecto de anillo de luz */}
        <div className="mb-5 d-flex justify-content-center">
          <div
            className="position-relative p-1 rounded-circle"
            style={{
              width: "120px",
              height: "120px",
              background:
                "linear-gradient(45deg, var(--tech-accent), transparent)",
            }}
          >
            <div className="w-100 h-100 rounded-circle border border-2 border-dark overflow-hidden bg-tech-900 shadow-lg">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-100 h-100 object-fit-cover opacity-90 transition-all hover-scale-110"
                style={{ transition: "transform 0.5s ease" }}
              />
            </div>
          </div>
        </div>

        {/* NAVIGATION MENU - Diseño más limpio y premium */}
        <nav className="mb-5">
          <ul className="list-unstyled d-flex flex-column gap-3">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="group d-flex align-items-center gap-3 px-3 py-2 rounded-2 text-secondary text-decoration-none transition-all hover-white"
                  style={{
                    fontSize: "0.95rem",
                    borderLeft: "2px solid transparent",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderLeft =
                      "2px solid var(--tech-accent)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderLeft = "2px solid transparent";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  <span className="nav-icon transition-all text-info">
                    {link.icon}
                  </span>
                  <span className="fw-medium">{link.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Stack Principal - Rediseñado para ser más minimalista */}
        <div className="mt-5 pt-4">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <h6
              className="font-monospace text-uppercase text-info mb-0 small tracking-wider opacity-50"
              style={{ fontSize: "0.7rem" }}
            >
              Core Stack
            </h6>
            <Cpu size={14} className="text-info opacity-50" />
          </div>
          <div
            className="d-grid gap-2"
            style={{ gridTemplateColumns: "1fr 1fr" }}
          >
            {profile.skills.slice(0, 4).map((skill) => (
              <div
                key={skill}
                className="p-2 border border-secondary border-opacity-25 rounded text-secondary font-monospace text-center"
                style={{
                  fontSize: "0.65rem",
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                {skill.split(" (")[0]}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Minimalista */}
      <div className="mt-auto pt-4 border-top border-secondary border-opacity-10 text-center">
        <p
          className="font-monospace text-secondary mb-0 opacity-40 text-uppercase tracking-tighter"
          style={{ fontSize: "0.6rem" }}
        >
          Systems Online &bull; 2025
        </p>
      </div>
    </aside>
  );
};

Sidebar.propTypes = {
  profile: PropTypes.object.isRequired,
};
