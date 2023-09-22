import { useCallback, useState, forwardRef } from "react";
import CreativeLayout from "../CreativeLayout";
import "./style.css";

function MainContainer() {
  return (
    <div className={`creative-design-container1`}>
      <div className={`creative-design-container`}>
        <CreativeLayout />
        <div className={`creative-design-section4`} />
      </div>
      <div className={`creative-design-section`} />
      <div className={`creative-design-section1`} />
    </div>
  );
}

export default MainContainer;
