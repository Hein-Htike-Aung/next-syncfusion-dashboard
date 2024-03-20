import { useStateContext } from "@/app/contexts/ContextProvider";
import { themeColors } from "@/data/dummy";
import React from "react";
import { BsCheck } from "react-icons/bs";

const ThemeSetting = () => {
  const {
    themeSetting,
    setThemeSetting,
    currentTheme,
    setCurrentTheme,
    handleCurrentTheme,
    currentColor,
    setCurrentColor,
  } = useStateContext();

  console.log({ currentTheme });

  return (
    <>
      {themeSetting && (
        <div
          className="bg-half-transparent w-screen fixed top-0 right-0 "
          style={{ zIndex: 999999 }}
        >
          <div className=" float-right bg-white w-400 h-screen p-5 dark:bg-main-dark-bg dark:text-white">
            {/* top */}
            <div className="flex justify-between items-center">
              <span className="font-bold capitalize text-xl text-gray-400">
                Settings
              </span>
              <button
                onClick={() => setThemeSetting(false)}
                type="button"
                className="cursor-pointer rounded-full hover:bg-gray-50 border hover:shadow-md w-10 h-10"
              >
                <span>x</span>
              </button>
            </div>
            {/* Themes */}
            <hr className="my-5" />
            <p className="text-base mb-5">Theme Options</p>
            <div className="flex flex-col gap-3">
              <div className="flex gap-4 cursor-pointer">
                <input
                  type="radio"
                  name="theme"
                  id="light"
                  value="Light"
                  onChange={(e) => handleCurrentTheme(e.target.value)}
                  checked={currentTheme === "Light"}
                />
                <label htmlFor="light" className="cursor-pointer">
                  Light
                </label>
              </div>
              <div className="flex gap-4 cursor-pointer">
                <input
                  type="radio"
                  id="dark"
                  name="theme"
                  value="Dark"
                  onChange={(e) => handleCurrentTheme(e.target.value)}
                  checked={currentTheme === "Dark"}
                />
                <label htmlFor="dark" className="cursor-pointer">
                  Dark
                </label>
              </div>
            </div>
            {/* Themes color*/}
            <hr className="my-5" />
            <p className="text-base mb-5">Theme Options</p>
            <div className="flex items-center gap-3">
              {themeColors.map((color, index) => (
                <div className="flex flex-col gap-3" key={index}>
                  <div
                    className="cursor-pointer w-10 h-10  rounded-full flex justify-center items-center"
                    style={{ backgroundColor: color.color }}
                    onClick={() => setCurrentColor(color.color)}
                  >
                    {currentColor == color.color && (
                      <BsCheck className="text-white text-2xl block" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ThemeSetting;
