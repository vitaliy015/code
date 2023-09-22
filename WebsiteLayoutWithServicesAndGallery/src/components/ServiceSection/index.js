import { useCallback, useState, forwardRef } from "react";
import "./style.css";

function ServiceSection() {
  return (
    <div className={`container`}>
      <div className={`flex-container4`}>
        {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
        <button className={`web-design-button`}>Web Design</button>

        <div className={`flex-container9`}>
          <p className={`graphic-design-text`}>Graphic Design</p>
        </div>
        {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
        <button className={`online-support-button`}>Online Support</button>

        <div className={`highlighted-box`} />
        <div className={`flex-container5`}>
          <p className={`graphic-design-text`}>App Design</p>
        </div>
        {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
        <button className={`marketing-button`}>Online Marketing</button>

        {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
        <button className={`service-button`}>Seo Service</button>
      </div>
      <div className={`flexbox-container`}>
        <div className={`image-container17`}>
          <img className={`image-container18 img-content-ca786767`} />
        </div>
        <p className={`content-container`}>
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ex</span>
          <span>cepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
          <span> </span>
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ex</span>
          <span>cepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Deserunt mollit an</span>
          <span>im id est laborum.</span>
          <span> </span>
          <span>Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. E</span>
          <span>xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
        </p>
      </div>
    </div>
  );
}

export default ServiceSection;
