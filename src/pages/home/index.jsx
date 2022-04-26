import React, { Fragment } from "react";
import HeroDesktop from "@/componets/home/HeroDesktop";
import AboutProjectDesktop from "@/componets/home/AboutProjectDesktop";
import CharactersDesktop from "@/componets/home/CharactersDesktop";
import MemberListDesktop from "@/componets/home/MemberListDesktop";
import MemberListMobile from "@/componets/home/MemberListMobile";
import ProjectDesktop from "@/componets/home/ProjectDesktop";
import ProjectMobile from "@/componets/home/ProjectMobile";
import { isMobile } from "react-device-detect";

function Index() {
  return (
    <Fragment>
      <HeroDesktop />
      <AboutProjectDesktop />
      <CharactersDesktop />
      {isMobile ? <MemberListMobile /> : <MemberListDesktop />}
      {isMobile ? <ProjectMobile /> : <ProjectDesktop />}
    </Fragment>
  );
}

export default Index;
