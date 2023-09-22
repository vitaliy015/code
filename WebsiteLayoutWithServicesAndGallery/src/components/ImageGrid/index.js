import { useCallback, useState, forwardRef } from "react";
import "./style.css";

function ImageGrid({ imgContent2, imgContent3, imgContent4 }) {
  return (
    <div className={`image-container15`}>
      <div className={`image-container10`}>
        <img className={`image-container4`} style={{ content: imgContent2 }} />
      </div>
      <div className={`image-container10`}>
        <img className={`image-container5`} style={{ content: imgContent3 }} />
      </div>
      <div className={`image-container10`}>
        <img className={`image-container7`} style={{ content: imgContent4 }} />
      </div>
    </div>
  );
}

export default ImageGrid;
