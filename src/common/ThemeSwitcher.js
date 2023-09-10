import React, { useContext } from 'react';

import { ThemeContext } from "../themeContext";

import style from './ThemeSwitcher.module.scss';

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const className = theme === 'dark'
      ? [style.ThemeSwitcher, style.ThemeSwitcher_dark].join(' ')
      : [style.ThemeSwitcher, style.ThemeSwitcher_light].join(' ');

    return (
      <label htmlFor="theme" className={className}>
          <input onChange={toggleTheme} type="checkbox" name="theme" id="theme"/>
      </label>
    );
}

export default ThemeSwitcher;
