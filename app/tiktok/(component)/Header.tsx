import React from "react";
import { logoFont } from "../../layout";
import NavLinks from "./NavLinks";

type Props = {};

const Header = (props: Props) => {
  return (
    <nav className="h-[100px] md:h-[80px] flex items-center justify-between px-5 md:px-10 border-b border-[#fcfcfc42] md:border-0">
      {/* logo */}
      <div>
        <a href="/tiktok">
          <h1
            className={`text-lg md:text-2xl font-semibold ${logoFont.className}`}
          >
            Universal Downloader
          </h1>
        </a>
      </div>
      {/* nav links */}
      <NavLinks />
    </nav>
  );
};

export default Header;
