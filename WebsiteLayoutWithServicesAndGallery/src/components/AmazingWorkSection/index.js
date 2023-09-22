import { useCallback, useState, forwardRef } from "react";
import PortfolioSectionContainer from "../PortfolioSectionContainer";
import MainContainer from "../MainContainer";
import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";

function AmazingWorkSection() {
  return (
    <div className={`work-section`}>
      <div className={`amazing-work-container1`}>
        <p className={`amazing-work`}>Our Amazing Work</p>
        <div className={`work-image-container`}>
          <img className={`narrow-horizontal-bar img-content-528bc293`} />
        </div>
      </div>
      <div className={`creative-design-section2`}>
        <div className={`flex-container1`}>
          <div className={`green-line`} />
          <div className={`border-left-highlight`} />
          <div className={`container-section`}>
            <PortfolioSectionContainer />
          </div>
        </div>
        <MainContainer />
        <div className={`load-more-button`}>
          <SvgIcon1 className="svg-container1" />
          <p className={`load-more-button1`}>Load More</p>
        </div>
      </div>
    </div>
  );
}

export default AmazingWorkSection;
