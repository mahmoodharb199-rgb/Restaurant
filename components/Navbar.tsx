import Link from "next/link";
import Image from "next/image";

import Menu from "./Menu";
import Carticon from "./Carticon";

export default function Navbar() {
  const user = false;

  return (
    <div className="h-12 md:h-24 flex items-center justify-between p-4 text-red-500 uppercase border-b-2 border-b-red-500 lg:px-20 lx:px-40">

      {/* LEFT LINKS */}
      <div className="hidden md:flex flex-1 gap-4">
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>

      {/* LOGO */}
      <div className="flex-1 text-xl font-bold md:text-center">
        <Link href="/">Massimo</Link>
      </div>

      {/* MOBILE MENU */}
      <div className="md:hidden">
        <Menu />
      </div>

      {/* RIGHT SIDE */}
      <div className="hidden md:flex flex-1 items-center justify-end gap-4">

        {/* PHONE */}
        <div className="md:absolute top-3 r-2 lg:static  flex items-center gap-2 px-2 py-1 bg-orange-300 rounded-md cursor-pointer">
          <Image
            src="/phone.png"
            width={16}
            height={16}
            alt="phone"
          />
          <span>+962 796070585</span>
        </div>

        {/* LOGIN / ORDERS */}
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/orders">Orders</Link>
        )}

        {/* CART */}
        
          <Carticon />
        

      </div>

    </div>
  );
}