"use client";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {};

const NavLinks = (props: Props) => {
  const navList = [
    { name: "about", path: "/tiktok/about" },
    { name: "faq", path: "/tiktok/faq" },
  ];
  const pathName = usePathname();
  return (
    <div className="flex items-center gap-4 font-light">
      {navList.map((nav: { name: string; path: string }) => (
        <a
          href={nav.path}
          key={nav.name}
          className={`${nav.path === pathName ? "underline" : null}`}
        >
          <h3 className="uppercase text-xs md:text-sm">{nav.name}</h3>
        </a>
      ))}
    </div>
    // <div className="flex items-center gap-4 font-light">
    //   <a href="tiktok/about">
    //     <h3 className="uppercase text-xs md:text-sm">About</h3>
    //   </a>
    //   <a href="tiktok/faq">
    //     <h3 className="uppercase text-xs md:text-sm">FAQs</h3>
    //   </a>
    // </div>
  );
};

export default NavLinks;
