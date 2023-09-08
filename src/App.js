import React, { useState, useEffect, lazy, Suspense } from 'react';
import Routes from './routes';  // Ensure you have this component in your project.
import { ThemeContext } from "./themeContext";
import style from './Theme.module.scss';
import classNames from 'classnames';

const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';

const RoutedApp = () => {
  return <Routes />;
}

const Theme = () => {
  const storedTheme = localStorage.getItem('theme');
  const [theme, setTheme] = useState(storedTheme || getSystemPreferredTheme());

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(currentTheme => currentTheme === DARK_THEME ? LIGHT_THEME : DARK_THEME);
  };

  const getSystemPreferredTheme = () => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? DARK_THEME : LIGHT_THEME;
  }

  const classes = classNames(style.Theme, {
    [style.Theme_dark]: theme === DARK_THEME,
    [style.Theme_light]: theme !== DARK_THEME,
  });

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <main className={classes} style={{ minHeight: "100vh" }}>
        <Suspense fallback={<div>Loading...</div>}>
          <RoutedApp />
        </Suspense>
      </main>
    </ThemeContext.Provider>
  );
}

export default function App() {
  return <Theme />;
}
