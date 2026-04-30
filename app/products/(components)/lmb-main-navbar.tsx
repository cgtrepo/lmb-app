import Link from "next/link";
import Image from "next/image";
import MenuDropdown from "@/app/(components)/menu-dropdown";

export default function LmbMainNavbar() {
  return (
    <header>
      <nav className="bg-white px-8 md:px-16 py-2 w-full">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image
              src="/lmb-logo.webp"
              alt="Lmb Logo"
              width={80}
              height={80}
              className="cursor-pointer w-16 h-16"
            />
          </Link>
          <MenuDropdown />
        </div>
      </nav>
    </header>
  );
}
