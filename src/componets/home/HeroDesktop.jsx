import React, { Fragment } from "react";
import { Images } from "@/utils/images";

function HeroDesktop() {
  return (
    <Fragment>
      <div className="container px-8 lg:flex lg:px-28 py-10 mx-auto lg:h-128 lg:py-16">
        <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
          <div className="max-w-lg">
            <img src={Images.heroTitle} alt="image" />
            <p className="mt-4 text-gray-400 font-oswald">
              Digital Marketplace for Crypto Collectiobles and non-fongible
              Tokens <span className="text-white">NFTs!</span> Also Innovative
              and Unique <span className="text-white">Collections</span> to
              Discover NFT Artworks.
            </p>
            <div className="mt-6">
              <img src={Images.heroDetails} alt="image" />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end w-full lg:h-96 lg:w-1/2 py-8">
          <img
            className="object-cover h-full lg:max-w-2xl rounded-md "
            src={Images.heroSlide1}
            alt="apple watch photo"
          />
        </div>
      </div>
    </Fragment>
  );
}

export default HeroDesktop;
