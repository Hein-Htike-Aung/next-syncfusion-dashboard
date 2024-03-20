"use client";
import React, { createContext, useContext, useState } from "react";

interface State {
  sidebarMenu: boolean;
  setSidebarMenu: React.Dispatch<React.SetStateAction<boolean>>;
  screenSize: any;
  setScreenSize: React.Dispatch<React.SetStateAction<any>>;
  themeSetting: any;
  setThemeSetting: React.Dispatch<React.SetStateAction<any>>;
  currentTheme: string;
  setCurrentTheme: React.Dispatch<React.SetStateAction<string>>;
  handleCurrentTheme: (value: string) => void;
  currentColor: string;
  setCurrentColor: React.Dispatch<React.SetStateAction<string>>;
}

const initialState: State = {
  sidebarMenu: true,
  setSidebarMenu: () => {},
  screenSize: undefined,
  setScreenSize: () => {},
  themeSetting: undefined,
  setThemeSetting: () => {},
  currentTheme: "Light",
  setCurrentTheme: () => {},
  handleCurrentTheme: () => {},
  currentColor: "#03C9D7",
  setCurrentColor: () => {},
};

const StateContext = createContext<State>(initialState);

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [sidebarMenu, setSidebarMenu] = useState<boolean>(true);
  const [themeSetting, setThemeSetting] = useState<boolean>(false);
  const [currentTheme, setCurrentTheme] = useState("Light");
  const [currentColor, setCurrentColor] = useState("#03C9D7");

  const handleCurrentTheme = (value: string) => {
    setCurrentTheme(value);
    localStorage.setItem("themeMode", value);
  };

  return (
    <StateContext.Provider
      value={{
        sidebarMenu,
        setSidebarMenu,
        screenSize,
        setScreenSize,
        themeSetting,
        setThemeSetting,
        currentTheme,
        setCurrentTheme,
        handleCurrentTheme,
        currentColor,
        setCurrentColor,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
