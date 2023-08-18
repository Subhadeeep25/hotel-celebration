import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./navbar.css";
import { Gallery } from "./gallery";
export const Navbar = () => {
  const [activeGallery, setActiveGallery] = useState(null);

  const handleGalleryChange = (gallery) => {
    setActiveGallery(gallery);
  };

  const handleHomeClick = () => {
    setActiveGallery(null);
  };

  useEffect(() => {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");
    navbarToggler.addEventListener("click", () => {
      navbarCollapse.classList.toggle("show");
    });
  }, []);

  return (
    <div >
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link
            to="/"
            onClick={handleHomeClick}
            style={{ textDecoration: "none" }}
          >
            <a className="navbar-brand brand">
              Hotel Celebration
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav ms-5 my-lg-1">
              <li className="nav-item">
                <Link
                  to="/"
                  onClick={handleHomeClick}
                  style={{ textDecoration: "none" }}
                >
                  <a className="nav-link active" aria-current="page">
                    Home
                  </a>
                </Link>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Gallery
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <Link
                      to="/gallery"
                      className="dropdown-item"
                      onClick={() => handleGalleryChange("banquet")}
                    >
                      Banquet Hall
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/gallery"
                      className="dropdown-item"
                      onClick={() => handleGalleryChange("rooms")}
                    >
                      Rooms
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item glowing-text">
                <Link to="/book-now" style={{textDecoration:"none"}} onClick={handleHomeClick}>
                  <a className="nav-link active" aria-current="page">
                    Book Now
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {activeGallery && <Gallery galleryType={activeGallery} />}
    </div>
  );
};
