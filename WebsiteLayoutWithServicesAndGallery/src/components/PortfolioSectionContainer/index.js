import { useCallback, useState, forwardRef } from "react";
import PortfolioSection from "../PortfolioSection";
import "./style.css";

function PortfolioSectionContainer() {
  return (
    <div className={`flex-container3`}>
      <div className={`flex-container2`}>
        <div className={`progress-bar`} />
        <PortfolioSection />
        <div className={`graphic-design-border`} />
      </div>
      <div className={`flex-column-box`}>
        <p className={`graphic-design-text1`}>Web Design</p>
      </div>
      <div className={`flex-column-box`}>
        <p className={`graphic-design-text1`}>Landing Pages</p>
      </div>
      <div className={`flex-column-center`}>
        <p className={`graphic-design-text1`}>Wordpress</p>
      </div>
    </div>
  );
}

export default PortfolioSectionContainer;
