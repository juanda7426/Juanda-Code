import { useEffect } from "react";
import { Calendar, ExternalLink, Database } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import PropTypes from "prop-types";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export const Modal = ({ isOpen, onClose, project }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const projectImages = project.images || [project.image];

  //*************************** */
  return (
    <div
      className="modal show d-block"
      tabIndex="-1"
      role="dialog"
      style={{ backgroundColor: "rgba(0,0,0,0.9)", zIndex: 1050 }}
    >
      <div
        className="modal-dialog modal-huge modal-dialog-centered"
        role="document"
      >
        <div
          className="modal-content bg-dark text-white border-secondary shadow-lg"
          style={{
            minHeight: "85vh",
            maxHeight: "95vh",
            overflow: "hidden",
          }}
        >
          <div className="position-absolute top-0 end-0 p-3 z-3">
            <button
              type="button"
              className="btn-close btn-close-white shadow-none"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>

          <div className="row g-0 h-100 flex-grow-1">
            <div className="col-lg-8 bg-black d-flex align-items-center justify-content-center border-end border-secondary">
              <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                effect="fade"
                loop={projectImages.length > 1}
                className="w-100 h-100"
              >
                {projectImages.map((img, index) => (
                  <SwiperSlide key={index}>
                    <div className="w-100 h-100 d-flex align-items-center justify-content-center p-2">
                      <img
                        src={img}
                        alt={`${project.title} - ${index + 1}`}
                        className="w-100 h-100 object-fit-contain"
                        style={{ maxHeight: "85vh" }}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div
              className="col-lg-4 p-4 p-lg-5 d-flex flex-column overflow-auto"
              style={{ maxHeight: "95vh" }}
            >
              <div className="mb-4">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <span
                    className="badge bg-info text-dark font-monospace px-3 py-2"
                    style={{ fontSize: "1rem" }}
                  >
                    {project.category}
                  </span>
                  <span
                    className="font-monospace d-flex align-items-center gap-1"
                    style={{ color: "#afafafff" }}
                  >
                    <Calendar size={18} /> {project.year}
                  </span>
                </div>

                <h2 className="display-6 fw-bold mb-3 text-info">
                  {project.title}
                </h2>

                <p
                  className="lead fw-light"
                  style={{ fontSize: "1.1rem", color: "#afafafff" }}
                >
                  {project.description}
                </p>
              </div>

              <div className="mt-auto">
                <h4 className="h6 font-monospace text-uppercase text-info mb-3 d-flex align-items-center gap-2">
                  <Database size={20} /> Stack Tecnológico
                </h4>
                <div className="d-flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{ color: "#afafafff" }}
                      className="badge border border-secondary  fw-normal p-2 font-monospace"
                    >
                      {tag}
                    </span>
                  ))}
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
  project: PropTypes.shape({
    title: PropTypes.string,
    category: PropTypes.string,
    year: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
    tags: PropTypes.arrayOf(PropTypes.string),
    link: PropTypes.string,
  }),
};
