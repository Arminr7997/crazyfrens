import React from "react";
import { Images } from "@/utils/images";

function ProjectMobile() {
  return (
    <div className="container mx-auto lg:px-32  py-12 px-8 py-4">
      <h1 className="font-jungle text-3xl">About Project & Road Map</h1>
      <p className="font-oswald text-lg text-gray-400 mt-4">
        Frenchies is a collection of 5,555 designed & randomly generated NFTs on the Ethereum Blockchain . Frenchies holders will have access and opportunities to participate in exclusive events, such as: giveaways, bonus NFT claims & more.. The best is yet to come, check out our roadmap below.
      </p>
      <div className="grid lg:gap-x-4 lg:gap-y-8 gap-y-10 mt-10 grid-flow-row ">
        <div className="bg-footer border-border border-l-8 rounded-md  p-4 relative">
          <div className="absolute right-0 top-0">
            <img src={Images.num01Image} alt="" />
          </div>
          <div className="border-white border-l-2 lg:px-4 px-2">
            <h1 className="font-oswald text-xl">FRENCHIE PUPS</h1>
            <ul class="list-disc mr-4 font-oswald mt-4 ml-4"><li class="text-sm text-gray-400">These Frenchie pup NFTs will be free for all holders (just pay gas).</li><li class="text-sm text-gray-400">Holders will be able to mint one per Frenchie owned.</li><li class="text-sm text-gray-400">Digital Marketplace for Crypto Collectiobles and non-fongible Tokens NFTs!</li><li class="text-sm text-gray-400">The team will also work on a partnership with several metaverse developers and platforms to bring these pups into the metaverse.</li></ul>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img src={Images.verticalDviderImage} alt="" />
        </div>
        <div className="bg-footer border-border border-l-8 rounded-md p-4 relative">
          <div className="absolute right-0 top-0">
            <img src={Images.num02Image} alt="" />
          </div>
          <div className="border-white border-l-2 px-4">
            <h1 className="font-oswald text-xl">Loot Box</h1>
            <ul class="list-disc mr-4 font-oswald mt-4 ml-4"><li class="text-sm text-gray-400">We will create a snapshot and allow all holders to claim one or more loot boxes filled with ETH prizes, discount deals, whitelist spots for other projects &amp; NFTs.</li></ul>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img src={Images.verticalDviderImage} alt="" />
        </div>
        <div className="bg-footer border-border border-l-8 rounded-md p-4 relative">
          <div className="absolute right-0 top-0">
            <img src={Images.num03Image} alt="" />
          </div>
          <div className="border-white border-l-2 px-4">
            <h1 className="font-oswald text-xl">PLAY TO EARN GAME</h1>
            <ul class="list-disc mr-4 font-oswald mt-4 ml-4"><li class="text-sm text-gray-400">We will develop a play to earn game as an additional utility for all holders.</li></ul>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img src={Images.verticalDviderImage} alt="" />
        </div>
        <div className="bg-footer border-border border-l-8 rounded-md p-4 relative">
          <div className="absolute right-0 top-0">
            <img src={Images.num04Image} alt="" />
          </div>
          <div className="border-white border-l-2 px-4">
            <h1 className="font-oswald text-xl">INTELLECTUAL PROPERTY</h1>
            <ul class="list-disc mr-4 font-oswald mt-4 ml-4"><li class="text-sm text-gray-400">As an owner of a FRENCHIES NFT, you own the IP of the art. You may use the image as you wish, as long as you own that particular NFT. Use of the image for profit ceases upon sale of the NFT. We grant all holders full commercial rights to their NFT and the art.</li></ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectMobile;
