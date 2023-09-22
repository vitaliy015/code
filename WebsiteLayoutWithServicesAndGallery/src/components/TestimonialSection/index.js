import { useCallback, useState, forwardRef } from "react";
import SvgIcon1 from "./icons/SvgIcon1";
import SvgIcon2 from "./icons/SvgIcon2";
import "./style.css";

function TestimonialSection() {
  return (
    <div className={`testimonial-container2`}>
      <div className={`testimonial-section`}>
        <div className={`testimonial-container`}>
          <p className={`testimonial-heading`}>What People Say About theHam</p>
          <div className={`testimonial-container1`}>
            <img className={`narrow-horizontal-bar1 img-content-19f3c3cc`} />
          </div>
        </div>
        <div className={`testimonial-section1`}>
          <img className={`image-container3 img-content-fa87b093`} />
          <p className={`text-container`}>
            <span>Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eg</span>
            <span>et aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget </span>
            <span>aliquam facilisis.</span>
          </p>
          <p className={`designer-info`}>
            <span className={`montserrat-bold-green-uppercase`}>Hasan Ali </span>
            <span className={`ux-designer`}>UX Designer</span>
          </p>
          <div className={`card-container`}>
            <img className={`image-container img-content-fd3cb076`} />
          </div>
          <div className={`flex-container7`}>
            <SvgIcon1 className="svg-container3" />
            <div className={`image-container9`}>
              <img className={`image-container13 img-content-da48076b`} />
            </div>
            <div className={`hover-container`}>
              <img className={`image-container2 img-content-f0f97e66`} />
            </div>
            <div className={`hover-container3`}>
              <img className={`image-container16 img-content-143c0728`} />
            </div>
            <div className={`hover-container2`}>
              <img className={`image-container11 img-content-410272e9`} />
            </div>
            <div className={`hover-container1`}>
              <p className={`red-text-heading`}>Hover</p>
              <SvgIcon2 className="svg-container4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialSection;
