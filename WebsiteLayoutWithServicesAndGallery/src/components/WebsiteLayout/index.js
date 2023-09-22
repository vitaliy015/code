import { useCallback, useState, forwardRef } from "react";
import HomeLayout from "../HomeLayout";
import ThemeCard from "../ThemeCard";
import CustomizableContent from "../CustomizableContent";
import SupportSection from "../SupportSection";
import ResponsiveImage from "../ResponsiveImage";
import "./style.css";

function WebsiteLayout() {
  return (
    <div className={`creative-design-container1`}>
      <HomeLayout />
      <div className={`feature-list`}>
        <ThemeCard />
        <CustomizableContent />
        <SupportSection />
        <ResponsiveImage />
      </div>
    </div>
  );
}

export default WebsiteLayout;
