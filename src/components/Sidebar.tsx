"use client";

import React from "react";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { links } from "@/data/dummy";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useStateContext } from "@/app/contexts/ContextProvider";

const Sidebar = () => {
  let path = usePathname();

  const { sidebarMenu, setSidebarMenu, screenSize, currentColor } =
    useStateContext();

  const handleCloseSidebar = () => {
    if (sidebarMenu && screenSize <= 900) {
      setSidebarMenu(false);
    }
  };

  return (
    <div className="h-screen overflow-y-scroll no-scrollbar dark:bg-secondary-dark-bg light:bg-main-bg">
      {/* Header */}
      <div className="p-5 flex gap-3 items-center text-xl justify-between tracking-wide">
        <div className="flex gap-3 items-center dark:text-white">
          <SiShopware />
          <Link
            onClick={handleCloseSidebar}
            href={"/admin"}
            className="cursor-pointer"
          >
            <span className="font-semibold">Shoppy</span>
          </Link>
        </div>
        {screenSize <= 900 && (
          <button
            onClick={handleCloseSidebar}
            type="button"
            className="cursor-pointer rounded-full hover:bg-gray-50 hover:shadow-md w-10 h-10"
          >
            <span>x</span>
          </button>
        )}
      </div>

      {links.map((link) => (
        <div className="flex flex-col ml-5" key={link.title}>
          <p className="uppercase  text-gray-400 font-light mt-4 tracking-wide">
            {link.title}
          </p>
          <span>
            {link.links.map((item) => {
              if (path == "/admin") {
                path = "/admin/ecommerce";
              }

              const isActive = item.path == path;

              return (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={handleCloseSidebar}
                >
                  <div
                    className={`flex p-3 m-3 rounded-lg  gap-3 items-center  dark:bg-secondary-dark-bg light:bg-main-bg cursor-pointer hover:dark:bg-slate-300 hover:dark:text-gray-900  dark:text-white
                      ${isActive ? "text-white" : "hover:bg-light-gray"}
                    `}
                    style={{
                      backgroundColor: isActive ? currentColor : "",
                    }}
                    key={item.name}
                  >
                    <span className="">{item.icon}</span>
                    <span className="capitalize  tracking-wider">
                      {item.name}
                    </span>
                  </div>
                </Link>
              );
            })}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
