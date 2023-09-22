import { useCallback, useState, forwardRef } from "react";
import "./style.css";

function ThemeCard() {
  return (
    <div className={`theme-option-container`}>
      <img className={`theme-option-image img-content-86b7da7e`} />
      <p className={`theme-option-title`}>Different theme option</p>
    </div>
  );
}

export default ThemeCard;
