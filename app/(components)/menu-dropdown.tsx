"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function MenuDropdown() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setOpen(!open)}
        className="flex flex-col justify-between"
      >
        <Image
          src="/menu-vector.svg"
          alt="Menu"
          width={55}
          height={55}
          className="cursor-pointer"
        />
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-48 z-1 bg-white rounded shadow-lg overflow-hidden">
          <Link href="/">
            <button className="block w-full text-left px-4 py-2 cursor-pointer hover:bg-primary">
              Accueil
            </button>
          </Link>

          <Link href="/products">
            <button className="block w-full text-left px-4 py-2 cursor-pointer hover:bg-primary">
              Nos Produits
            </button>
          </Link>

          <Link href="/stores">
            <button className="block w-full text-left px-4 py-2 cursor-pointer hover:bg-primary">
              Nos Magasins
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
