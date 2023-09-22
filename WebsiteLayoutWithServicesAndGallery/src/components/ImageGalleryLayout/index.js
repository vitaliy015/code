import { useCallback, useState, forwardRef } from "react";
import ImageGallery from "../ImageGallery";
import ImageGallery1 from "../ImageGallery1";
import ImageGridLayout from "../ImageGridLayout";
import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";

function ImageGalleryLayout({ imageContents1, imageContents, imageGridData }) {
  return (
    <div className={`container1`}>
      <div className={`container-with-images-and-load-more`}>
        <ImageGallery imageContents={imageContents} />
        <ImageGallery1 imageContents1={imageContents1} />
        <ImageGridLayout imageGridData={imageGridData} />
      </div>
      <div className={`load-more-button2`}>
        <SvgIcon1 className="svg-container1" />
        <p className={`load-more-button1`}>Load More</p>
      </div>
    </div>
  );
}

export default ImageGalleryLayout;
