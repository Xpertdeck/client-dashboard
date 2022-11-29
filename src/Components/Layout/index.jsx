import React from "react";
import Footer from "../Footer";
import Header from "../Header";
const Layout = ({ className = "", ctaText = "GET A QUOTE", children }) => {
  return (
    <>
      <div
        className={`w-screen min-h-screen flex flex-col justify-between font-poppins bg-base ${className}`}
      >
        <div>
          <Header />
          <div className="">{children}</div>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Layout;
