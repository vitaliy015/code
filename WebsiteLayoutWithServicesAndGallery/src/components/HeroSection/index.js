import { useCallback, useState, forwardRef } from "react";
import HamTheme from "../HamTheme";
import CreativeSection from "../CreativeSection";
import "./style.css";

function HeroSection() {
  return (
    <div className={`creative-section2`}>
      <div className={`creative-section1`}>
        <div className={`creative-section`}>
          <HamTheme />
          <CreativeSection />
          <p className={`awesome-features-heading`}>Just Buy And Enjoy These Awesome Features</p>
        </div>
        <div className={`explore-purchase-buttons`}>
          <div className={`explore-now`}>
            <div className={`explore-button-container`} />
            {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
            <button className={`explore-button`}>EXPLORE NOW</button>
          </div>
          <div className={`purchase-button-container`}>
            <div className={`product-card`} />
            {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
            <button className={`purchase-button`}>purchase now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
