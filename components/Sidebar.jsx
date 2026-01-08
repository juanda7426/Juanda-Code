import React, { useRef } from "react";
import { Mail, Terminal, MessageCircle, Cpu } from "lucide-react";
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
        <div className="d-inline-flex align-items-center gap-2 px-3 py-1 mb-2">
          <h1 className="display-4 fw-bold lh-1 mb-2 text-gradient">
            {profile.name}
          </h1>
        </div>

        {/* Profile Image */}
        <div
          className="group position-relative mb-2"
          style={{ width: "15rem", height: "15rem" }}
        >
          <div className="position-absolute top-0 start-0 w-100 h-100 rounded-circle border border-2 border-secondary overflow-hidden">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-100 h-100 object-fit-cover opacity-75 hover-opacity-100 transition-all"
            />
          </div>
        </div>

        {/* Identity */}
        <div className="mb-2">
          <div className="d-flex align-items-center gap-3 h4 text-info font-monospace">
            <Terminal size={24} />
            <span>{profile.title}</span>
          </div>
        </div>

        {/* Bio */}
        <div className="position-relative ps-3 border-start border-info mb-2">
          <p
            className="text-secondary lead fw-semibold p-2"
            style={{ fontSize: "1.1rem" }}
          >
            {profile.bio}
          </p>
        </div>

        {/* Skills */}
        <div className="mb-2">
          <h5 className=" font-monospace text-uppercase text-info mb-2 d-flex align-items-center gap-2">
            <Cpu size={14} /> Tecnologías
          </h5>
          <div className="d-flex flex-wrap gap-2 p-2">
            {profile.skills.map((skill) => (
              <span
                key={skill}
                className="badge bg-secondary border border-light text-light fw-300 p-2 m-1 font-monospace"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer / Contact */}
      <div className="mt-auto z-1 position-relative">
        <div className="row">
          <div className="col">
            <button
              className="btn btn-light w-100 mb-3 d-flex align-items-center justify-content-center gap-2 py-2 fw-semibold"
              onClick={() => (window.location.href = `mailto:${profile.email}`)}
            >
              <Mail size={30} />
              Email
            </button>
          </div>
          <div className="col">
            <button
              className="btn btn-success w-100 mb-4 d-flex align-items-center justify-content-center gap-2 py-2 fw-semibold"
              onClick={() =>
                window.open(`https://wa.me/${profile.phone}`, "_blank")
              }
            >
              <MessageCircle size={30} />
              WhatsApp
            </button>
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-between pt-4 border-top border-secondary">
          <p className="small font-monospace text-secondary mb-0 text-uppercase">
            v3.0.1 &bull; 2023
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
