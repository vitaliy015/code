import { useCallback, useState, forwardRef } from "react";
import "./style.css";

function ResponsiveImage() {
  return (
    <div className={`responsive-container`}>
      <img className={`responsive-image-caption img-content-e8cd4ff9`} />
      <p className={`customizable-heading`}>responsive all device</p>
    </div>
  );
}

export default ResponsiveImage;
