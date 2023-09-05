import React from 'react';

import style from './style.module.scss';
import {ThemeContext} from "../../themeContext";

class Hamburger extends React.Component {
    render() {
        const themeContext = this.context;

        const classes = [style.Hamburger];

        if(themeContext.theme === 'dark') {
            classes.push(style.Hamburger_dark);
        } else {
            classes.push(style.Hamburger_light);
        }

        return(
            <button
            className={classes.join(' ')}
            onClick={this.props.onClick}
            ><span></span></button>
        );
    }
}

Hamburger.contextType = ThemeContext;

export default Hamburger;