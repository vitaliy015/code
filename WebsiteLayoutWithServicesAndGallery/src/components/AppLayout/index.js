import { useCallback, useState, forwardRef } from "react";
import ReadyToInstall from "../ReadyToInstall";
import AmazingWorkSection from "../AmazingWorkSection";
import "./style.css";

function AppLayout() {
  return (
    <div className={`portfolio-section2`}>
      <ReadyToInstall />
      <AmazingWorkSection />
    </div>
  );
}

export default AppLayout;
