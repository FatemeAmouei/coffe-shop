"use client";

import { useTheme } from "@/context/ThemeContext";
import { IoMoonOutline } from "react-icons/io5";
import { LuSunMedium } from "react-icons/lu";

const ThemeToggleBtn = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button aria-label="Toggle Dark Mode" onClick={toggleTheme}>
      {isDarkMode ? <IoMoonOutline /> : <LuSunMedium />}
    </button>
  );
};

export default ThemeToggleBtn;
