"use client";
import React, { useContext } from "react";
import { ThemeContext } from "@/hooks/ThemeContext";

function ButtonTheme() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
        document.documentElement.classList.toggle("dark");
        document.documentElement.classList.toggle("light");
      }}
    >
      {theme === "dark" ? "light" : "dark"}
    </button>
  );
}

export default ButtonTheme;
