import React from 'react';

import style from './style.module.scss';
import Heading from "../../common/Heading";

function JobSection(props) {
    const classes = [style.JobSection];

    if(props.theme === 'dark') {
        classes.push(style.JobSection_dark);
    } else {
        classes.push(style.JobSection_light);
    }

    return(
        <section className={classes.join(' ')}>
            <Heading variant='h3' className={style.JobSection__heading}>{props.heading}</Heading>
            {props.children}
        </section>
    );
}

export default JobSection;