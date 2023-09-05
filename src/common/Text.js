import React from "react";

import style from './Text.module.scss';

class Text extends React.Component {
    render() {
        const classes = [style.Text];
        const variant = this.props.variant;
        if(variant) {
            classes.push(style[variant]);
        }
        return (
            <p className={classes.join(' ')}>{this.props.children}</p>
        );
    }
}

export default Text;