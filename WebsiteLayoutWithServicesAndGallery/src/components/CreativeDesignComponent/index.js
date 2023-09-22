import { useCallback, useState, forwardRef } from "react";
import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";

function CreativeDesignComponent() {
  return (
    <div className={`creative-design`}>
      <div className={`creative-design-container2`}>
        <div className={`container-with-svg`}>
          <SvgIcon1 className="svg-container" />
        </div>
        <div className={`svg-container2`}>
          <div className={`white-box`} />
        </div>
      </div>
      <div className={`creative-design4`}>
        <p className={`creative-design3`}>creative design</p>
        <p className={`creative-design2`}>Web Design</p>
      </div>
    </div>
  );
}

export default CreativeDesignComponent;
