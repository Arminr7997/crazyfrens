import React from "react";
import { Images } from "@/utils/images";

function CharactersDesktop() {
  return (
    <div className="bg-footer">
      <div className="container mx-auto lg:px-32 lg:py-8 px-8">
        <h1 className="font-jungle text-3xl">Characters</h1>
        <p className="font-oswald text-lg text-gray-400 mt-4">
          Digital Marketplace for Crypto Collectiobles and non-fongible Tokens
          NFTs! Also Innovative and Unique Collections to Discover NFT Artworks.
          Digital Marketplace for Crypto Collectiobles and non-fongible Tokens
          NFTs! Also Innovative and Unique Collections to Discover NFT Artworks.
        </p>
        <div className="my-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4 gap-1 items-center">
            <div className="my-4">
              <img src={Images.dogImage1} alt="image" />
            </div>
            <div className="col-span-2">
              <h1 className="mb-4 text-2xl font-oswald">A. The name of first Character</h1>
              <p className="font-oswald text-lg text-gray-400">
                Digital Marketplace for Crypto Collectiobles and non-fongible
                Tokens NFTs! Also Innovative and Unique Collections to Discover
                NFT Artworks. Digital Marketplace for Crypto Collectiobles and
                non-fongible Tokens NFTs! Also Innovative and Unique Collections
                to Discover NFT Artworks.{" "}
              </p>
            </div>
            <div className="col-span-2 mt-12">
              <h1 className="mb-4 text-2xl font-oswald">B. The name of first Character</h1>
              <p className="font-oswald text-lg text-gray-400">
                Digital Marketplace for Crypto Collectiobles and non-fongible
                Tokens NFTs! Also Innovative and Unique Collections to Discover
                NFT Artworks. Digital Marketplace for Crypto Collectiobles and
                non-fongible Tokens NFTs! Also Innovative and Unique Collections
                to Discover NFT Artworks.{" "}
              </p>
            </div>
            <div className="my-4">
              <img src={Images.dogImage2} alt="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharactersDesktop;
