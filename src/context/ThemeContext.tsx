import  { useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { Theme } from "./theme.types";
import { ThemeContext } from "./theme.context";

const getInitialTheme = (): Theme => {
  const saved = localStorage.getItem("theme") as Theme | null;

  const system =
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

  return saved || system;
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((p) => (p === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};