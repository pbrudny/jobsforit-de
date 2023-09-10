import React from 'react';
import style from './Heading.module.scss';

const Heading = ({ theme, className, variant, children }) => {
    const classes = [style.Heading];

    // Handle theme styles
    if (theme === 'dark') {
        classes.push(style.Heading_white);
    } else {
        classes.push(style.Heading_black);
    }

    // Handle optional classname
    if (className) {
        classes.push(className);
    }

    // Handle variant styles
    if (variant.includes('regular')) {
        classes.push(style.Heading_regular);
    }
    if (variant.includes('h1')) {
        classes.push(style.Heading_h1);
    } else if (variant.includes('h2')) {
        classes.push(style.Heading_h2);
    } else if (variant.includes('h3')) {
        classes.push(style.Heading_h3);
    }

    // Create the heading tag based on the variant
    const Tag = variant.includes('h1') ? 'h1' :
      variant.includes('h2') ? 'h2' : 'h3';

    return <Tag className={classes.join(' ')}>{children}</Tag>;
};

export default Heading;
