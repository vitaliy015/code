import { useCallback, useState, forwardRef } from "react";
import SvgIcon1 from "./icons/SvgIcon1";
import SvgIcon2 from "./icons/SvgIcon2";
import "./style.css";

function RenderedImages() {
  return (
    <div className={`container-with-svg-divs`}>
      <div className={`flex-container10`}>
        <SvgIcon1 className="svg-container5" />
      </div>
      <div className={`blue-box`}>
        <SvgIcon2 className="svg-container6" />
      </div>
    </div>
  );
}

export default RenderedImages;
