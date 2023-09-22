import { useCallback, useState, forwardRef } from "react";
import ImageRenderer1 from "../ImageRenderer1";
import "./style.css";

function ImageGallery({ imageContents }) {
  return (
    <div className={`flex-container11`}>
      {imageContents.map((data, index) => {
        return <ImageRenderer1 {...data} key={index} />;
      })}
    </div>
  );
}

export default ImageGallery;
