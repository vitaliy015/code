import { useCallback, useState, forwardRef } from "react";
import CreativeDesignComponent from "../CreativeDesignComponent";
import "./style.css";

function CreativeLayout() {
  return (
    <div className={`creative-design-section3`}>
      <CreativeDesignComponent />
      <div className={`creative-design1`}>
        <div className={`progress-bar1`} />
      </div>
    </div>
  );
}

export default CreativeLayout;
