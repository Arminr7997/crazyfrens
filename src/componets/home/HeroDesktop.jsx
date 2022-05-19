import React, { Fragment } from "react";
import { Images } from "@/utils/images";
import MainSlider from "./MainSlider";

function HeroDesktop() {
  return (
    <Fragment>
      <div className="container px-8 lg:flex lg:px-28 py-10 mx-auto lg:h-128 lg:py-16">
        <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
          <div className="max-w-lg">
            <img src={Images.heroTitle} alt="image" />
            <p className="mt-4 text-gray-400 font-oswald">
              Join us with this story, which is
              <span className="text-white">{" "}fascinating frenchie friends{" "}</span>
              going to be built toys and comic books out of it.
            </p>
            <div className="mt-6">
              <img src={Images.heroDetails} alt="image" />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end w-full lg:h-96 lg:w-1/2 py-8">
          <MainSlider />
        </div>
      </div>
    </Fragment>
  );
}

export default HeroDesktop;
