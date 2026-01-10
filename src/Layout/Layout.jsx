import React from "react";
import Navbar from "../Component/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Component/Footer/Footer";
import WhatsAppPopup from "../Component/ScrollToTop/WhatsAppPopup";
import ScrollToTop from "../Component/ScrollToTop/ScrollToTop";

function Layout() {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <WhatsAppPopup />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
