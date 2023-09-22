import { useCallback, useState, forwardRef } from "react";
import "./style.css";

function CustomizableContent() {
  return (
    <div className={`customizable-container`}>
      <img className={`customizable-image img-content-a163b473`} />
      <p className={`customizable-heading`}>fully customizable</p>
    </div>
  );
}

export default CustomizableContent;
