import React from "react";
import { Images } from "@/utils/images";

function AboutProjectDesktop() {
  return (
    <div className="bg-footer">
      <div className="container mx-auto lg:px-32 lg:py-10 px-8">
        <h1 className="font-jungle text-3xl">About Project</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-12">
          <div className="flex flex-col justify-center items-center">
            <img src={Images.circle01Image} alt="image" className="my-6" />
            <div className="font-oswald text-xl">NFT</div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={Images.circle02Image} alt="image" className="my-6" />
            <div className="font-oswald text-xl">Comic Book</div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={Images.circle03Image} alt="image" className="my-6" />
            <div className="font-oswald text-xl">Ad</div>
          </div>
        </div>
        <p className="font-oswald text-lg text-gray-400 mt-4">
          Digital Marketplace for Crypto Collectiobles and non-fongible Tokens
          NFTs! Also Innovative and Unique Collections to Discover NFT Artworks.
          Digital Marketplace for Crypto Collectiobles and non-fongible Tokens
          NFTs! Also Innovative and Unique Collections to Discover NFT Artworks.
          Digital Marketplace for Crypto Collectiobles and non-fongible Tokens
          NFTs! Also Innovative and Unique Collections to Discover NFT Artworks.
          Digital Marketplace for Crypto Collectiobles and non-fongible Tokens
          NFTs! Also Innovative and Unique Collections to Discover NFT Artworks.
        </p>
      </div>
    </div>
  );
}

export default AboutProjectDesktop;
