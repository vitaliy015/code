import { useCallback, useState, forwardRef } from "react";
import BlogPostDate3 from "../BlogPostDate3";
import "./style.css";

function BlogPost2() {
  return (
    <div className={`blog-post-container5`}>
      <BlogPostDate3 />
      <div className={`blog-post-container8`}>
        <p className={`blog-post-title`}>Amazing Blog Post</p>
        <p className={`blog-post-meta4`}>By admin | 2 comment</p>
      </div>
    </div>
  );
}

export default BlogPost2;
