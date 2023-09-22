import { useCallback, useState, forwardRef } from "react";
import "./style.css";

function ImageRenderer1({ imgContent1 }) {
  return <img className={`image-container1 image-container8`} style={{ content: imgContent1 }} />;
}

export default ImageRenderer1;
