import React, { useEffect } from "react";
import { Layout } from "antd";
import { Redirect } from "react-router-dom";
import HeaderTop from "../../components/header/header-top";

import { checkExpire } from "../../utils";

export default function GuestLayout({ children, restLayout, _persist }) {
  useEffect(() => {
    if (_persist && _persist.rehydrated) {
      restLayout();
    }
  }, []);

  if (!checkExpire() && window.location.pathname === "/") {
    return <Redirect to="dashboard" />;
  }
  return <Layout><HeaderTop/><Layout className="layout-guest-app">{children}</Layout></Layout>;
}
