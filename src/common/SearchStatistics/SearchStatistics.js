import React from 'react';

import style from './style.module.scss';
import {ThemeContext} from "../../themeContext";

class SearchStatistics extends React.Component {
    render() {
        const themeContext = this.context;

        const classes = [style.SearchStatistics];

        if(themeContext.theme === 'dark') {
            classes.push(style.SearchStatistics_dark);
        } else {
            classes.push(style.SearchStatistics_light);
        }

        return(
            <ul className={[classes.join(' ')]}>
                {this.props.items.map(item => (
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
}

SearchStatistics.contextType = ThemeContext;

export default SearchStatistics;