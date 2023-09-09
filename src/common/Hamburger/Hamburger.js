import React, { useContext } from 'react';
import style from './style.module.scss';
import { ThemeContext } from "../../themeContext";

const Hamburger = ({ onClick }) => {
    const themeContext = useContext(ThemeContext);

    const classes = [style.Hamburger];

    if(themeContext.theme === 'dark') {
        classes.push(style.Hamburger_dark);
    } else {
        classes.push(style.Hamburger_light);
    }

    return (
      <button className={classes.join(' ')} onClick={onClick}>
          <span></span>
      </button>
    );
}

export default Hamburger;
