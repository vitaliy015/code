import { useCallback, useState, forwardRef } from "react";
import BlogPostSection from "../BlogPostSection";
import "./style.css";

function HoverSection() {
  return (
    <div className={`blog-post-container3`}>
      <p className={`red-text-center`}>hover</p>
      <BlogPostSection />
    </div>
  );
}

export default HoverSection;
