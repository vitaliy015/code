import { useCallback, useState, forwardRef } from "react";
import "./style.css";

function PortfolioSection() {
  return (
    <div className={`flex-container`}>
      <p className={`green-text`}>All</p>
      <p className={`graphic-design-text1`}>Graphic Design</p>
    </div>
  );
}

export default PortfolioSection;
