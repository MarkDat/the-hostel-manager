import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "components";
import appInfo from "app-info";
import { SideNavOuterToolbar as SideNavBarLayout } from "layouts";

export default function LandLord() {
  return (
    <SideNavBarLayout title={appInfo.title}>
      <Outlet/>
      <Footer>
        Copyright © 2011-{new Date().getFullYear()} {appInfo.title} Inc.
        <br />
        All trademarks or registered trademarks are property of their respective
        owners.
      </Footer>
    </SideNavBarLayout>
  );
}
