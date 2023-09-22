import { useCallback, useState, forwardRef } from "react";
import "./style.css";

function HamTheme() {
  return (
    <div className={`theme-container`}>
      <p className={`ham-theme-title`}>
        <span className={`ham-theme-description`}>The Ham is </span>
        <span className={`wordpress-theme-highlight`}>Wordpress theme</span>
      </p>
    </div>
  );
}

export default HamTheme;
