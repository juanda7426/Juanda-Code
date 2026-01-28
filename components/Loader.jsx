import React from "react";

export const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader-content">
        <div className="loader-logo">
          <span className="text-white fw-bold">JUANDA</span>
          <span className="text-info">CODE</span>
        </div>
        <div className="loader-bar-container">
          <div className="loader-bar"></div>
        </div>
        <div className="loader-text font-monospace text-info small mt-3">
          INITIALIZING_SYSTEMS...
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .loader-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #050505;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          flex-direction: column;
        }
        .loader-content {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .loader-logo {
          font-size: 2.5rem;
          letter-spacing: -0.05em;
          margin-bottom: 2rem;
          animation: pulse 2s infinite ease-in-out;
        }
        .loader-bar-container {
          width: 200px;
          height: 2px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          overflow: hidden;
          position: relative;
        }
        .loader-bar {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 50%;
          background: var(--tech-accent, #00f2ff);
          box-shadow: 0 0 15px var(--tech-accent, #00f2ff);
          animation: slide 1.5s infinite ease-in-out;
        }
        .loader-text {
          letter-spacing: 0.2em;
          opacity: 0.8;
          animation: blink 1s infinite step-end;
        }
        @keyframes slide {
          0% { left: -50%; }
          100% { left: 100%; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(0.98); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.1; }
        }
      `,
        }}
      />
    </div>
  );
};
