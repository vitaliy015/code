import { useCallback, useState, forwardRef } from "react";
import ImageGrid from "../ImageGrid";
import "./style.css";

function ImageGridContainer({ imageGridData }) {
  return (
    <div className={`image-gallery`}>
      {imageGridData.map((data, index) => {
        return <ImageGrid {...data} key={index} />;
      })}
    </div>
  );
}

export default ImageGridContainer;
