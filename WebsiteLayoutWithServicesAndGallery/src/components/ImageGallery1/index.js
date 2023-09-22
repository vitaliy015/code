import { useCallback, useState, forwardRef } from "react";
import ImageRenderer from "../ImageRenderer";
import "./style.css";

function ImageGallery1({ imageContents1 }) {
  return (
    <div className={`flex-column-container`}>
      {imageContents1.map((data, index) => {
        return <ImageRenderer {...data} key={index} />;
      })}
    </div>
  );
}

export default ImageGallery1;
