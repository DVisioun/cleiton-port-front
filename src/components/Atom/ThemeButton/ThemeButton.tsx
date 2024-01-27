"use client";
import React, { useContext } from "react";
import { ThemeContext } from "@/hooks/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

function ThemeButton() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
        document.documentElement.classList.toggle("dark");
        document.documentElement.classList.toggle("light");
      }}
    >
      {theme === "dark" ? <FontAwesomeIcon icon={faSun} className="solid" /> : <FontAwesomeIcon icon={faMoon} />}
    </button>
  );
}

export default ThemeButton;
