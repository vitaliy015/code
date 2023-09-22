import { useCallback, useState, forwardRef } from "react";
import BlogPostCard from "../BlogPostCard";
import "./style.css";

function BlogPostSection() {
  return (
    <div className={`blog-post-container`}>
      <div className={`blog-post-container2`}>
        <div className={`date-container6`}>
          <div className={`date-container3`}>
            <p className={`date-label`}>12 Feb</p>
          </div>
        </div>
        <div className={`date-container4`}>
          <div className={`date-container7`}>
            <p className={`date-label`}>12 Feb</p>
          </div>
        </div>
        <div className={`date-container11`}>
          <div className={`date-container7`}>
            <p className={`date-label`}>12 Feb</p>
          </div>
        </div>
        <div className={`date-container`}>
          <div className={`date-container7`}>
            <p className={`date-label`}>
              <span>12 </span>
              <span>Feb</span>
            </p>
          </div>
        </div>
      </div>
      <div className={`blog-post-container9`}>
        <div className={`blog-post-container1`}>
          <p className={`blog-post-title2`}>Amazing Blog Post</p>
          <p className={`blog-post-meta`}>By admin | 2 comment</p>
        </div>
        <div className={`blog-post-container10`}>
          <p className={`blog-post-title`}>Amazing Blog Post</p>
          <p className={`blog-post-meta1`}>By admin | 2 comment</p>
        </div>
        <div className={`blog-post-container6`}>
          <BlogPostCard />
        </div>
        <div className={`blog-post-container7`}>
          <p className={`blog-post-title1`}>Amazing Blog Post</p>
          <p className={`blog-post-meta3`}>By admin | 2 comment</p>
        </div>
      </div>
    </div>
  );
}

export default BlogPostSection;
