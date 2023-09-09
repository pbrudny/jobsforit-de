import React from 'react';
import style from './style.module.scss';

const Container = ({ className, children }) => {
    const combinedClass = className ? `${className} ${style.Container}` : style.Container;

    return <div className={combinedClass}>{children}</div>;
}

export default Container;
