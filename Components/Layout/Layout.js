import React, { useMemo } from "react";
import Header from "../Header";

const SideMenuLayout = ({ children }) => {
  const maxWidth = useMemo(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth - 300;
    } else {
      return "50%";
    }
  }, []);
  return (
    <div className="bg-[#171717]">
      <Header />
      {children}
      <footer>this is the footer of the page</footer>
    </div>
  );
};

export default SideMenuLayout;
