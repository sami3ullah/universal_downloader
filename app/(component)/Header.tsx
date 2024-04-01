import React from "react";
import { logoFont } from "../layout";

type Props = {};

const Header = (props: Props) => {
  return (
    <nav className="h-[60px] flex items-center justify-between px-10">
      {/* logo */}
      <div>
        <a href="/">
          <h1 className={`text-2xl font-semibold ${logoFont.className}`}>
            Universal Downloader
          </h1>
        </a>
      </div>
      {/* other nav links */}
      <div className="flex items-center gap-4 font-light">
        <a href="/about">
          <h3 className="uppercase text-sm">About us</h3>
        </a>
        <a href="/usage">
          <h3 className="uppercase text-sm">How to use</h3>
        </a>
        <a href="/faq">
          <h3 className="uppercase text-sm">FAQs</h3>
        </a>
      </div>
    </nav>
  );
};

export default Header;
