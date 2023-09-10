import React, { useState, useContext, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { observer } from "mobx-react";
import { withRouter } from "react-router-dom";
import style from './style.module.scss';
import { ThemeContext } from "../../themeContext";

const FilterButton = observer(withRouter(({ buttonPressed, dataCyPrefix, value, onClick, children, className, withIcon, withIconRight }) => {
    const [clickCount, setClickCount] = useState(0);
    const [spanStyles, setSpanStyles] = useState({});
    const themeContext = useContext(ThemeContext);
    const bounce = useRef(null);

    const showRipple = (e) => {
        const rippleContainer = e.currentTarget;
        const size = rippleContainer.offsetWidth;
        const pos = rippleContainer.getBoundingClientRect();
        const event_offsetX = e.pageX - pos.left;
        const event_offsetY = e.pageY - window.pageYOffset - pos.top;
        const x = event_offsetX - (size / 2);
        const y = event_offsetY - (size / 2);
        const newSpanStyles = { top: y + 'px', left: x + 'px', height: size + 'px', width: size + 'px' };
        const count = clickCount + 1;
        setSpanStyles(prevStyles => ({ ...prevStyles, [count]: newSpanStyles }));
        setClickCount(count);
    }

    const renderRippleSpan = () => {
        const spanArray = Object.keys(spanStyles);
        return (
          spanArray.length > 0 ? (
            spanArray.map((key, index) => (
              <span key={'spanCount_' + index} className="" style={{ ...spanStyles[key] }}></span>
            ))
          ) : null
        );
    }

    const cleanUp = () => {
        setClickCount(0);
        setSpanStyles({});
    }

    const callCleanUp = (delay) => {
        return () => {
            clearTimeout(bounce.current);
            bounce.current = setTimeout(() => {
                cleanUp();
            }, delay);
        }
    }

    useEffect(() => {
        return () => {
            if (bounce.current) {
                clearTimeout(bounce.current);
            }
        };
    }, []);

    const pressed = buttonPressed ? 'pressed' : 'unpressed';

    const classes = [style.FilterButton];

    if (themeContext.theme === 'dark') {
        classes.push(style.FilterButton_dark);
    } else {
        classes.push(style.FilterButton_light);
    }

    if (className) {
        classes.push(className);
    }

    if (withIcon) {
        classes.push(style.FilterButton__withIcon);
    }

    if (withIconRight) {
        classes.push(style.FilterButton__withIconRight);
    }

    if (pressed === 'pressed') {
        classes.push(style.FilterButton__pressed);
    }

    return (
      <button
        className={classes.join(' ')}
        data-cy={dataCyPrefix + pressed}
        value={value}
        onClick={onClick}
      >
          {children}
          <div className={style.FilterButton_rippleContainer} onMouseDown={showRipple}
               onMouseUp={callCleanUp(2000)}>
              {renderRippleSpan()}
          </div>
      </button>
    );
}));

FilterButton.propTypes = {
    tech: PropTypes.any,
    style: PropTypes.any,
    onClick: PropTypes.func,
    className: PropTypes.string
};

export default FilterButton;
