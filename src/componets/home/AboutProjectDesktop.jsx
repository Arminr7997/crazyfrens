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
            <div className="font-oswald text-xl">Toys</div>
          </div>
        </div>
        <p className="font-oswald text-lg text-gray-400 mt-4">
          5555 unique NFTs are made from the story of FRENCHIE FRIENDS. The NFTs
          are based on a storyline, and the story is so compelling that we
          decided to write a book about the FRENCHIE FRIENDS. Reading this comic
          books will make you inspired, and it will affect you so much that you
          will be interested in living with the characters of the story. So we
          are making this come true by producing the FRENCHIE FRIENDS toys. You
          could also set FRENCHIE FRIENDS toys on your desk and get energy while
          working. Furthermore, you could set FRENCHIE FRIENDS Toys all over
          your house to simply get energized by making your house more
          beautiful. Besides, you could give the FRENCHIE FRIENDS toys to your
          partner as a special gift to make your relationship more interesting.
          Hold on and see how you fall in love with these tiny funny Frenchie
          toys
        </p>
      </div>
    </div>
  );
}

export default AboutProjectDesktop;
