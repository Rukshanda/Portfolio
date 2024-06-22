import React from "react";
import videoGlitch from "../videos/glitch.mp4";
function Banner() {
  return (
    <div className="flex banner items-center justify-between">
      <div className="mt-[30px]">
        <p className="banner-text" id="banner-txt">
          <span>
          Turn Your Vision into a Visual Masterpiece
          </span>
          
        </p>
      </div>
      <div className="mt-[30px]">
        <video
          width="850"
          autoPlay
          muted
          loop
          playsInline
          style={{ display: "block" }}
        >
          <source src={videoGlitch} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default Banner;
