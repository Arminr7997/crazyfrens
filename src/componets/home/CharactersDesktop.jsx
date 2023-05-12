import React from "react";
import { Images } from "@/utils/images";

function CharactersDesktop() {
  return (
    <div className="bg-dark">
      <div className="container mx-auto py-12 lg:px-32  py-12 px-8">
        <h1 className="font-jungle text-3xl">Story</h1>
        <p className="font-oswald text-lg text-gray-400 mt-4">
          Billie and Jackie Are Two Close Friends, They Live On the Mars in a City Named Dogtropolis. During One of His Adventures, Billy Was Searching for a Sexual Partner. He Found a Chick on One of the Interplanetary Chatrooms and Decided to Pay a Visit to Earth and Meet Her.
        </p>
        <p className="font-oswald text-lg text-gray-400">
          Earth Has Changed a lot! Its Filled with Flying Cars, Nature Is Completely Destroyed and Humans Live with AI Kits Implanted into Their Brains. Love and Affection Are Decimated, And So They Are Faced with A Reality That Changes Their Goal.
        </p>
        <div className="my-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4 gap-1 items-center">
            <div className="my-4">
              <img src={Images.dogImage1} alt="image" />
            </div>
            <div className="col-span-2">
              <h1 className="mb-4 text-2xl font-oswald">Billie</h1>
              <p className="font-oswald text-lg text-gray-400">
                He Is an Anarchist and Doesn’t Live by Any Codes at All. He Was the First Dog to Set Foot On Mars in 2045. He Loves Pretty Girls and His Sause Collection. He Is a Diversity Seeking, Gluttonous Dog and has a Talent for Shooting. from His Friends Point of View, Billie Is Dumb, Horny and Unpredictable.{" "}
              </p>
            </div>
            <div className="lg:order-1 order-2 col-span-2 lg:mt-12 mt-0">
              <h1 className="mb-4 text-2xl font-oswald">Jackie</h1>
              <p className="font-oswald text-lg text-gray-400">
                Jackie Traveled to Mars in 2050 and met Billie in Dogtropolis. Jackie Is Extremely Sharp and Logical. He Is a Talented Strategist and Analyses Everything. He Loves Gun Collections, But Never Used One Before. Jackie Has a Kind Heart (Which Sometime Overcomes His Logic!). from His Friends Point of View, Jackie is a Long-Eared, Talkative Dog.{" "}
              </p>
            </div>
            <div className="lg:order-2 order-1 my-4 lg:mt-0 mt-20">
              <img src={Images.dogImage2} alt="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharactersDesktop;
