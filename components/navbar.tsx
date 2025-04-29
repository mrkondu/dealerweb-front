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
    <div className="flex items-center justify-between p-4 mx-auto cursor-pointer sm:max-w-4lxl md:max-w-6xl">
      <div className="flex flex-row items-center">
        <Image
          src={"/logo/DEALERTECH-BLANCO-PNG-1.png"}
          width={100}
          height={100}
          alt="Logodealer"
        />
        <h1 onClick={() => router.push("/")}>
          Dealer
          <span className="font-bold font-black">tech</span>
        </h1>
      </div>

      <div className="items-center justify-between  hidden sm:flex">
        <MenuList />
      </div>
      <div className="flex sm:hidden">
        <ItemsMenuMobile />
      </div>
      <div className="flex items-center justify-between gap-2 sm:gap-7">
        <ShoppingCart
          strokeWidth="1"
          className="cursor-pointer"
          onClick={() => router.push("/cart")}
        />
        <Heart
          strokeWidth="1"
          className="cursor-pointer"
          onClick={() => router.push("/loved-products")}
        />
        <UserRound
          strokeWidth="1"
          className="cursor-pointer"
          onClick={() => router.push("/loved-products")}
        />

        <ToggleTheme />
      </div>
    </div>
  );
};

export default Navbar;
