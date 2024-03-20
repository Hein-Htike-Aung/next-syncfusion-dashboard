"use client";
import Sidebar from "@/components/Sidebar";
import React, { useEffect } from "react";
import { FiSettings } from "react-icons/fi";
import { useStateContext } from "../contexts/ContextProvider";
import Navbar from "@/components/Navbar";
import ThemeSetting from "@/components/ThemeSetting";

export default function FrontLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    sidebarMenu,
    setSidebarMenu,
    screenSize,
    setScreenSize,
    setThemeSetting,
    currentColor,
    currentTheme,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setSidebarMenu(false);
    } else {
      setSidebarMenu(true);
    }
  }, [screenSize]);

  return (
    <div className={currentTheme == "Dark" ? "dark" : "light"}>
      <div className="relative">
        {/* Setting icon */}
        <div className="fixed bottom-5 right-5" style={{ zIndex: 1000 }}>
          <button
            className="text-3xl rounded-full p-4 text-white"
            style={{ backgroundColor: currentColor }}
            type="button"
            onClick={() => setThemeSetting(true)}
          >
            <FiSettings />
          </button>
        </div>
        {/* Sidebar */}
        {sidebarMenu ? (
          <>
            <div
              className="fixed w-72 sidebar"
              style={{
                backgroundColor: "white",
              }}
            >
              <Sidebar />
            </div>
          </>
        ) : (
          <>
            <div
              className="fixed w-0 sidebar"
              style={{
                backgroundColor: "white",
              }}
            >
              <Sidebar />
            </div>
          </>
        )}
        <div className={`${sidebarMenu && "md:ml-72"} md:static`}>
          {/* Navbar */}
          <Navbar />
          {/* ThemeSettings */}
          <ThemeSetting />
          {/* Content */}
          {children}
        </div>
      </div>
    </div>
  );
}
