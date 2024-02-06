import React, { createContext, useState, useEffect } from "react";

interface ThemeContext {
  isDarkMode?: boolean;
  setIsDarkMode?: (isDarkMode: boolean) => void;
}

export const defaultThemeContext: ThemeContext = {
  isDarkMode: false,
  setIsDarkMode: () => {},
};

export const themeContext = createContext<ThemeContext>(defaultThemeContext);

const { Provider } = themeContext;

const SESSION_STORAGE_KEYS = {
  isDarkMode: "isDarkMode",
};

export const ThemeContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedValue = sessionStorage.getItem(SESSION_STORAGE_KEYS.isDarkMode);
    return storedValue ? JSON.parse(storedValue) : false;
  });

  useEffect(() => {
    sessionStorage.setItem(SESSION_STORAGE_KEYS.isDarkMode, JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return <Provider value={{ isDarkMode, setIsDarkMode }}>{children}</Provider>;
};
