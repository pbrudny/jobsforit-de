import React from "react";

import style from './Heading.module.scss';

class Heading extends React.Component {
    render() {
        const classes = [style.Heading];
        let tag = '';
        if(this.props.theme === 'dark') {
            classes.push(style.Heading_white);
        } else {
            classes.push(style.Heading_black);
        }
        if(this.props.className) {
            classes.push(this.props.className);
        }
        const variant = this.props.variant;
        if(variant.includes('regular')) {
            classes.push(style.Heading_regular)
        }
        if(variant.includes('h1')) {
            classes.push(style.Heading_h1);
            tag = (
            <h1 className={classes.join(' ')}>{this.props.children}</h1>
            );
        } else if(variant.includes('h2')) {
            classes.push(style.Heading_h2);
            tag = (
                <h2 className={classes.join(' ')}>{this.props.children}</h2>
            );
        } if(variant.includes('h3')) {
            classes.push(style.Heading_h3);
            tag = (
                <h3 className={classes.join(' ')}>{this.props.children}</h3>
            );
        }
        
        return tag;
    }
}

export default Heading;