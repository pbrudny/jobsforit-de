import React, { useContext } from 'react';

import style from './style.module.scss';
import { ThemeContext } from "../../themeContext";

const SearchStatistics = ({ items }) => {
    const themeContext = useContext(ThemeContext);

    const classes = [style.SearchStatistics];

    if (themeContext.theme === 'dark') {
        classes.push(style.SearchStatistics_dark);
    } else {
        classes.push(style.SearchStatistics_light);
    }

    return (
      <ul className={classes.join(' ')}>
          {items.map(item => (
            <li
              key={item.label}
              className={style.SearchStatistics__item}
            >
                    <span className={style.SearchStatistics__itemValue}>
                        {item.value}
                    </span>
                <span className={style.SearchStatistics__itemLabel}>
                        {item.label}
                    </span>
            </li>
          ))}
      </ul>
    );
}

export default SearchStatistics;
