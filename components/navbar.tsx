"use client";
import { Heart, ShoppingCart, UserRound } from "lucide-react";
import { useRouter } from "next/navigation";
import MenuList from "./menu-list";
import ItemsMenuMobile from "./items-menu-mobile";
import ToggleTheme from "./toggle-teme";
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="flex items-center justify-between p-4 mx-auto max-w-7xl">
      <div className="flex items-center gap-2">
        <Image
          src="/logo/main-logo.png"
          width={150}
          height={60}
          alt="Logo Dealertech"
          priority
          className="cursor-pointer object-contain"
          onClick={() => router.push("/")}
        />
      </div>

      <div className="hidden sm:block">
        <MenuList />
      </div>

      <div className="sm:hidden">
        <ItemsMenuMobile />
      </div>

      <div className="flex items-center gap-4 sm:gap-7">
        <button
          onClick={() => router.push("/cart")}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
        >
          <ShoppingCart className="w-5 h-5" strokeWidth="1" />
        </button>
        <button
          onClick={() => router.push("/loved-products")}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
        >
          <Heart className="w-5 h-5" strokeWidth="1" />
        </button>
        <button
          onClick={() => router.push("/profile")}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
        >
          <UserRound className="w-5 h-5" strokeWidth="1" />
        </button>

        <ToggleTheme />
      </div>
    </nav>
  );
};

export default Navbar;
