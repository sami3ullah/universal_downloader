import React from "react";
import { logoFont } from "../layout";

type Props = {};

const Header = (props: Props) => {
  return (
    <nav className="h-[100px] md:h-[80px] flex items-center justify-between px-5 md:px-10 border-b border-[#fcfcfc42] md:border-0">
      {/* logo */}
      <div>
        <a href="/">
          <h1
            className={`text-lg md:text-2xl font-semibold ${logoFont.className}`}
          >
            Universal Downloader
          </h1>
        </a>
      </div>
      {/* other nav links */}
      <div className="flex items-center gap-4 font-light">
        <a href="/about">
          <h3 className="uppercase text-xs md:text-sm">About</h3>
        </a>
        <a href="/faq">
          <h3 className="uppercase text-xs md:text-sm">FAQs</h3>
        </a>
      </div>
    </nav>
  );
};

export default Header;
