import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="h-[40px] font-light text-sm md:text-md text-center w-full">
      Made with ❤️ by{" "}
      <a href="https://www.samidev.me" target="_blank" className="underline">
        Muhammad Samiullah.
      </a>{" "}
      All rights reserved
    </div>
  );
};

export default Footer;
