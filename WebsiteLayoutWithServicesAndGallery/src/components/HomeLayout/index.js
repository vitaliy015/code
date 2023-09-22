import { useCallback, useState, forwardRef } from "react";
import HeroSection from "../HeroSection";
import "./style.css";

function HomeLayout() {
  return (
    <div className={`main-container`}>
      <div className={`main-header-container`}>
        <div className={`header-section`}>
          <div className={`ham-container`}>
            <p className={`heading-text`}>H</p>
          </div>
          <p className={`ham-text`}>
            <span className={`montserrat-heading`}>the</span>
            <span className={`ham-title`}>Ham</span>
          </p>
        </div>
        <div className={`flex-container8`}>
          <div className={`hover-home-about`}>
            <div className={`flex-container6`}>
              <div className={`creative-design-container`}>
                <p className={`hover-title`}>Hover</p>
                <p className={`home-link`}>home</p>
              </div>
              <p className={`hover-link`}>About</p>
            </div>
            <div className={`hover-button`} />
          </div>
          <div className={`navigation-bar`}>
            <p className={`navbar-link`}>Blog</p>
            <p className={`navbar-link`}>Skills</p>
            <p className={`navbar-link`}>Service</p>
            <p className={`navbar-link`}>Work</p>
            <p className={`navbar-link`}>Testimonial</p>
          </div>
          <div className={`center-image-container`}>
            <img className={`image-container14 img-content-3bd0ba1b`} />
          </div>
        </div>
      </div>
      <HeroSection />
    </div>
  );
}

export default HomeLayout;
