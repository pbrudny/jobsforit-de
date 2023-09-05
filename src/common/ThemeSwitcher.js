import React from 'react';

import {ThemeContext} from "../themeContext";

import style from './ThemeSwitcher.module.scss';

export class ThemeSwitcher extends React.Component {

    render() {

        return (
            <ThemeContext.Consumer>
                {({theme, toggleTheme}) => (
                    <label htmlFor="theme" className={theme === 'dark' ? [style.ThemeSwitcher, style.ThemeSwitcher_dark].join(' ') : [style.ThemeSwitcher, style.ThemeSwitcher_light].join(' ')}>
                        <input onChange={toggleTheme} type="checkbox" name="theme" id="theme"/>
                    </label>
                )}
            </ThemeContext.Consumer>
        );
    }
}

export default ThemeSwitcher;