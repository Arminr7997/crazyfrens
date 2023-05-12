import React from "react";
import CarouselSlider from "./CarouselSlider";

function MemberListDesktop() {
  return (
    <div className="my-12">
      <div className="container mx-auto lg:px-32  py-12 px-10 py-2">
        <div className="flex justify-between content-center items-center">
          <h1 className="font-jungle text-3xl mb-4">Our Team Members</h1>
          <a href="#">
            <p className="font-oswald text-sm mb-4">See All</p>
          </a>
        </div>
        <CarouselSlider />
      </div>
    </div>
  );
}

export default MemberListDesktop;
