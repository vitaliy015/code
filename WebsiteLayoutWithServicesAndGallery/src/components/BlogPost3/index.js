import { useCallback, useState, forwardRef } from "react";
import BlogPostDate2 from "../BlogPostDate2";
import "./style.css";

function BlogPost3() {
  return (
    <div className={`blog-post-container5`}>
      <BlogPostDate2 />
      <div className={`blog-post-container8`}>
        <p className={`blog-post-title`}>Amazing Blog Post</p>
        <p className={`blog-post-meta4`}>By admin | 2 comment</p>
      </div>
    </div>
  );
}

export default BlogPost3;
