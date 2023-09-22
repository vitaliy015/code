import { useCallback, useState, forwardRef } from "react";
import WebsiteLayout from "../WebsiteLayout";
import ServiceSection from "../ServiceSection";
import AppLayout from "../AppLayout";
import HoverSection from "../HoverSection";
import BlogPost from "../BlogPost";
import BlogPost1 from "../BlogPost1";
import BlogPost2 from "../BlogPost2";
import BlogPost3 from "../BlogPost3";
import TestimonialSection from "../TestimonialSection";
import ImageGalleryLayout from "../ImageGalleryLayout";
import "./style.css";

function WebsiteLayoutWithServicesAndGallery({ imageContents1, imageContents, imageGridData }) {
  return (
    <div className={`hero-section`}>
      <WebsiteLayout />
      <div className={`main-content`}>
        <div className={`services-container1`}>
          <p className={`amazing-work`}>Our Services</p>
          <div className={`services-container`} />
        </div>
        <ServiceSection />
      </div>
      <AppLayout />
      <div className={`main-content-section`}>
        <p className={`breaking-news-heading`}>Breaking News</p>
        <HoverSection />
        <div className={`news-section`}>
          <BlogPost />
          <BlogPost1 />
          <BlogPost2 />
          <BlogPost3 />
        </div>
      </div>
      <TestimonialSection />
      <div className={`gallery-section`}>
        <p className={`breaking-news-heading`}>Gallery of best images</p>
        <ImageGalleryLayout imageContents={imageContents} imageContents1={imageContents1} imageGridData={imageGridData} />
      </div>
    </div>
  );
}

export default WebsiteLayoutWithServicesAndGallery;
