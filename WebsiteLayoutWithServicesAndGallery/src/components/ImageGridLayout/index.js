import { useCallback, useState, forwardRef } from "react";
import RenderedImages from "../RenderedImages";
import ImageGridContainer from "../ImageGridContainer";
import ImageContainer from "../ImageContainer";
import "./style.css";

function ImageGridLayout({ imageGridData }) {
  return (
    <div className={`container2`}>
      <div className={`creative-design-container`}>
        <div className={`image-container10`}>
          <img className={`image-container19 img-content-ed56b9d`} />
        </div>
        <div className={`flex-container12`}>
          <RenderedImages />
        </div>
      </div>
      <ImageGridContainer imageGridData={imageGridData} />
      <ImageContainer />
    </div>
  );
}

export default ImageGridLayout;
