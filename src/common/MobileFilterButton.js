import React from 'react';

import style from './MobileFilterButton.module.scss';
import {ThemeContext} from "../themeContext";

class MobileFilterButton extends React.Component {
    render() {
        const themeContext = this.context;

        const classes = [style.MobileFilterButton];

        if(themeContext.theme === 'dark') {
            classes.push(style.MobileFilterButton__dark);
        } else {
            classes.push(style.MobileFilterButton__light);
        }

        if(this.props.color === 'orange') {
            classes.push(style.MobileFilterButton__orange);
        }
        if(this.props.color === 'green') {
            classes.push(style.MobileFilterButton__green);
        }
        if(this.props.color === 'blue') {
            classes.push(style.MobileFilterButton__blue);
        }
        if(this.props.color === 'red') {
            classes.push(style.MobileFilterButton__red);
        }
        
        return(
            <button
            onClick={this.props.onClick}
            className={classes.join(' ')}
            >
              <span className={style.MobileFilterButton_imgWrapper}>
                <img 
                src={this.props.icon}
                className={style.MobileFilterButton_img}
                />
              </span>
              <span
              className={style.MobileFilterButton_text}>
                {this.props.name}
              </span>
            </button>
        );
    }
}

MobileFilterButton.contextType = ThemeContext;

export default MobileFilterButton;