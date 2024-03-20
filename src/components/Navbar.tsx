import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";
import { useStateContext } from "@/app/contexts/ContextProvider";

const Navbar = () => {
  const { sidebarMenu, setSidebarMenu, currentColor } = useStateContext();

  return (
    <div className="w-full p-5 flex items-center justify-between relative dark:bg-main-dark-bg">
      <div onClick={() => setSidebarMenu((prev) => !prev)}>
        <AiOutlineMenu
          className="icon cursor-pointer"
          style={{
            color: currentColor,
          }}
        />
      </div>
      <div className="flex items-center gap-5">
        <FiShoppingCart
          className="icon"
          style={{
            color: currentColor,
          }}
        />
        <BsChatLeft
          className="icon"
          style={{
            color: currentColor,
          }}
        />
        <RiNotification3Line
          className="icon"
          style={{
            color: currentColor,
          }}
        />
        <Image
          src="https://images.pexels.com/photos/19254446/pexels-photo-19254446/free-photo-of-couple-embracing-by-river-in-city.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
          alt="avatar"
          width={40}
          height={40}
          className="rounded-full w-8 h-8 object-cover"
        />
        <MdKeyboardArrowDown
          className="icon"
          style={{
            color: currentColor,
          }}
        />
      </div>
    </div>
  );
};

export default Navbar;
