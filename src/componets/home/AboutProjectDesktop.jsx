import React from "react";
import { Images } from "@/utils/images";

function AboutProjectDesktop() {
  return (
    <div className="bg-footer">
      <div className="container mx-auto lg:px-32 lg:py-10 px-8">
        <h1 className="font-jungle text-3xl">About Project</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 md:grid-cols-2 arefinterfere gap-4 my-12">
          <div className="flex flex-col justify-start items-center">
              <div className="aboutitemaref">
                  <img className="my-6" src={Images.circle01Image} />
                  <div class="font-oswald text-xl">NFT</div>
                  <p>5555 Cute and Awesome NFTs! You’re Going to Love This Collection! 20 of Them Will Be Legendary! </p>
              </div>
          </div>
          <div className="flex flex-col justify-start items-center">
              <div className="aboutitemaref">
                  <img className="my-6" src={Images.circle02Image} />
                  <div class="font-oswald text-xl">Comic Book</div>
                  <p>There is Going to Be a Comic Book About Frenchies and When You Read this Book, Frenchies will Become a Part of You! Holders Will Earn a Share from Profits of the Sale. </p>
              </div>
          </div>
          <div className="flex flex-col justify-start items-center">
              <div className="aboutitemaref">
                  <img className="my-6" src={Images.circle03Image} />
                  <div class="font-oswald text-xl">Toys</div>
                  <p>Put Frenchie Toys On Your Desk and Amp Up Your Work Environment or Put Them in Your Bedroom for a More Exciting Space!</p>
              </div>
          </div>
        </div>
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
            <div className="font-oswald text-xl">Toys</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutProjectDesktop;
