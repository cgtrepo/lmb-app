"use client";

import Image from "next/image";
import Link from "next/link";
import MenuDropdown from "./menu-dropdown";

export default function LmbHeroNavbar() {
  return (
    <div className="absolute top-0 left-0 w-full flex justify-between items-center px-10 py-2 z-50">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/lmb-logo.svg"
            alt="LMB Logo"
            width={80}
            height={80}
            className="cursor-pointer object-contain"
          />
        </Link>
      </div>
      <MenuDropdown />
    </div>
  );
}
