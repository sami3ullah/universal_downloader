import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <nav className="h-[60px] flex items-center justify-between px-10">
      {/* logo */}
      <div>
        <a href="/">
          <h1 className="text-2xl font-semibold">UNIVERSAL DOWNLOADER</h1>
        </a>
      </div>
      {/* other nav links */}
      <div className="flex items-center gap-4">
        <a href="/about">
          <h3 className="uppercase text-md">About us</h3>
        </a>
        <a href="/usage">
          <h3 className="uppercase text-md">How to use</h3>
        </a>
        <a href="/faq">
          <h3 className="uppercase text-md">FAQs</h3>
        </a>
      </div>
    </nav>
  );
};

export default Header;
