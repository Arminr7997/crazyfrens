import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { HeaderLayout } from "./partials";

function Index() {
  return (
    <Fragment>
      <HeaderLayout />
      <Outlet />
      {/* <FooterLayout /> */}
    </Fragment>
  );
}

export default Index;
