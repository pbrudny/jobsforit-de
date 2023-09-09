import React, { useState, useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import { ThemeContext } from "../../themeContext";
import style from './style.module.scss';

const Button = ({ classes: propClasses, variant = '', disabled, clicked, href, children }) => {
    const [clickCount, setClickCount] = useState(0);
    const [spanStyles, setSpanStyles] = useState({});
    const themeContext = useContext(ThemeContext);

    const showRipple = (e) => {
        const rippleContainer = e.currentTarget;
        const size = rippleContainer.offsetWidth;
        const pos = rippleContainer.getBoundingClientRect();
        const event_offsetX = e.pageX - pos.left;
        const event_offsetY = e.pageY - window.pageYOffset - pos.top;
        const x = event_offsetX - (size / 2);
        const y = event_offsetY - (size / 2);
        const newSpanStyles = {top: y + 'px', left: x + 'px', height: size + 'px', width: size + 'px'};
        setClickCount(prevCount => prevCount + 1);
        setSpanStyles(prevStyles => ({...prevStyles, [clickCount]: newSpanStyles}));
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setClickCount(0);
            setSpanStyles({});
        }, 2000);

        return () => clearTimeout(timer);
    }, [clickCount, spanStyles]);

    const renderRippleSpan = () => {
        return Object.keys(spanStyles).map((key, index) => (
          <span key={'spanCount_' + index} className="" style={spanStyles[key]}></span>
        ));
    }

    const baseClasses = [style.Button];
    if (propClasses) {
        baseClasses.push(...propClasses);
    }

    if (variant.includes('secondary')) {
        baseClasses.push(style.Button_secondary);
        baseClasses.push(themeContext.theme === 'dark' ? style.Button_secondary_dark : style.Button_secondary_light);
    }

    if (variant.includes('primary')) {
        baseClasses.push(style.Button_primary);
        baseClasses.push(themeContext.theme === 'dark' ? style.Button_primary_dark : style.Button_primary_light);
    }

    if (variant.includes('mid')) {
        baseClasses.push(style.Button_mid);
    }

    if (variant.includes('long')) {
        baseClasses.push(style.Button_long);
    }

    const combinedClasses = baseClasses.join(' ');

    const content = (
      <>
          {children}
          <div className={style.Button_rippleContainer} onMouseDown={showRipple}>
              {renderRippleSpan()}
          </div>
      </>
    );

    return href ? (
      <Link to={href} className={combinedClasses}>
          {content}
      </Link>
    ) : (
      <button disabled={disabled} className={combinedClasses} onClick={clicked}>
          {content}
      </button>
    );
}

export default Button;
