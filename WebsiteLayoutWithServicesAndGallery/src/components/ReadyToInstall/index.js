import { useCallback, useState, forwardRef } from "react";
import "./style.css";

function ReadyToInstall() {
  return (
    <div className={`portfolio-section`}>
      <div className={`portfolio-section1`}>
        <p className={`ready-message`}>Everything is ready. just buy and install now</p>
        <p className={`portfolio-description`}>Smooth reliable, responsive ready, perfect portfolio, unique blog layout and many many options for you</p>
      </div>
      <div className={`purchase-button1`}>
        <div className={`product-card`} />
        {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
        <button className={`purchase-button2`}>purchase now</button>
      </div>
    </div>
  );
}

export default ReadyToInstall;
