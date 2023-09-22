import { useCallback, useState, forwardRef } from "react";
import "./style.css";

function ImageRenderer({ imgContent1 }) {
  return <img className={`image-container1`} style={{ content: imgContent1 }} />;
}

export default ImageRenderer;
