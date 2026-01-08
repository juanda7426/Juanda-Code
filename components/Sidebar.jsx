import React, { useRef } from "react";
import {
  Mail,
  Terminal,
  Camera,
  Linkedin,
  Twitter,
  Github,
  Cpu,
} from "lucide-react";
import PropTypes from "prop-types";

export const Sidebar = ({ profile, onUpdateAvatar }) => {
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      onUpdateAvatar(e.target.files[0]);
    }
  };

  return (
    <aside className="layout-sidebar bg-black border-end border-secondary text-white d-flex flex-column justify-content-between p-4 z-1">
      <div className="position-relative z-1 mb-5">
        {/* Status Badge */}
        <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill bg-dark border border-info mb-4">
          <span
            className="position-relative d-flex"
            style={{ width: "8px", height: "8px" }}
          >
            <span className="position-absolute d-inline-flex w-100 h-100 rounded-circle bg-info opacity-75 animate-ping"></span>
            <span className="position-relative d-inline-flex rounded-circle w-100 h-100 bg-info"></span>
          </span>
          <span className="small font-monospace text-info text-uppercase">
            Activo
          </span>
        </div>

        {/* Profile Image */}
        <div
          className="group position-relative mb-4"
          style={{ width: "12rem", height: "12rem" }}
        >
          <div className="position-absolute top-0 start-0 w-100 h-100 rounded-circle border border-2 border-dark overflow-hidden">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-100 h-100 object-fit-cover opacity-75 hover-opacity-100 transition-all"
            />
          </div>
          <button
            onClick={() => fileInputRef.current?.click()}
            className="position-absolute bottom-0 end-0 p-2 bg-info text-dark rounded-circle border-0 shadow-lg"
            aria-label="Update Avatar"
            style={{ right: "10px", bottom: "10px" }}
          >
            <Camera size={18} />
          </button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="d-none"
            accept="image/*"
          />
        </div>

        {/* Identity */}
        <div className="mb-4">
          <h1 className="display-4 fw-bold lh-1 mb-2 text-gradient">
            {profile.name}
          </h1>
          <div className="d-flex align-items-center gap-3 h4 text-info font-monospace">
            <Terminal size={24} />
            <span>{profile.title}</span>
          </div>
        </div>

        {/* Bio */}
        <div className="position-relative ps-3 border-start border-info mb-4">
          <p className="text-secondary lead fw-light">{profile.bio}</p>
        </div>

        {/* Skills */}
        <div>
          <h3 className="h6 font-monospace text-uppercase text-secondary mb-3 d-flex align-items-center gap-2">
            <Cpu size={14} /> Tech Stack
          </h3>
          <div className="d-flex flex-wrap gap-2">
            {profile.skills.map((skill) => (
              <span
                key={skill}
                className="badge bg-dark border border-secondary text-secondary fw-normal p-2 font-monospace"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer / Contact */}
      <div className="mt-auto z-1 position-relative">
        <button
          className="btn btn-light w-100 mb-4 d-flex align-items-center justify-content-center gap-2 py-2"
          onClick={() => (window.location.href = `mailto:${profile.email}`)}
        >
          <Mail size={20} />
          Iniciar Proyecto
        </button>

        <div className="d-flex align-items-center justify-content-between pt-4 border-top border-secondary">
          <div className="d-flex gap-3">
            {profile.socials.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary text-hover-white transition-colors"
                style={{ textDecoration: "none" }}
              >
                {social.platform === "Twitter" && <Twitter size={20} />}
                {social.platform === "LinkedIn" && <Linkedin size={20} />}
                {social.platform === "GitHub" && <Github size={20} />}
              </a>
            ))}
          </div>
          <p className="small font-monospace text-secondary mb-0 text-uppercase">
            v3.0.1 &bull; 2024
          </p>
        </div>
      </div>
    </aside>
  );
};

Sidebar.propTypes = {
  profile: PropTypes.object.isRequired,
  onUpdateAvatar: PropTypes.func.isRequired,
};
