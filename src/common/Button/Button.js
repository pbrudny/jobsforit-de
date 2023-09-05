import React from 'react';
import {Link} from "react-router-dom";
import {ThemeContext} from "../../themeContext";


import style from './style.module.scss';

class Button extends React.Component {

    state = {
        clickCount: 0,
        spanStyles: {}
    }

    showRipple = (e) => {
        const rippleContainer = e.currentTarget;
        const size = rippleContainer.offsetWidth;
        const pos = rippleContainer.getBoundingClientRect();
        const event_offsetX = e.pageX - pos.left;
        const event_offsetY = e.pageY - window.pageYOffset - pos.top;
        const x = event_offsetX - (size / 2);
        const y = event_offsetY - (size / 2);
        const spanStyles = {top: y + 'px', left: x + 'px', height: size + 'px', width: size + 'px'};
        const count = this.state.clickCount + 1;
        this.setState({
            spanStyles: {...this.state.spanStyles, [count]: spanStyles},
            clickCount: count
        });
    }

    renderRippleSpan = () => {
        const {showRipple = false, spanStyles = {}} = this.state;
        const spanArray = Object.keys(spanStyles);
        if (spanArray && spanArray.length > 0) {
            return (
                spanArray.map((key, index) => {
                    return <span key={'spanCount_' + index} className="" style={{...spanStyles[key]}}></span>
                })
            )
        } else {
            return null;
        }
    }

    cleanUp = () => {
        const initialState = {
            clickCount: 0,
            spanStyles: {}
        };
        this.setState({...initialState});
    }

    callCleanUp = (cleanup, delay) => {
        return () => {
            clearTimeout(this.bounce);
            this.bounce = setTimeout(() => {
                cleanup();
            }, delay);
        }
    }

    render() {
        const themeContext = this.context;

        const classes = this.props.classes ? [...this.props.classes] : [];
        classes.push(style.Button);

        const variant = this.props.variant ?? '';
        if (variant.includes('secondary')) {
            classes.push(style.Button_secondary);

            if(themeContext.theme === 'dark') {
                classes.push(style.Button_secondary_dark);
            } else {
                classes.push(style.Button_secondary_light);
            }
        }
        if (variant.includes('primary')) {
            classes.push(style.Button_primary);

            if(themeContext.theme === 'dark') {
                classes.push(style.Button_primary_dark);
            } else {
                classes.push(style.Button_primary_light);
            }
        }
        if (variant.includes('mid')) {
            classes.push(style.Button_mid)
        }
        if (variant.includes('long')) {
            classes.push(style.Button_long)
        }
        let tag = (
            <button
                disabled={this.props.disabled}
                className={classes.join(' ')}
                onClick={this.props.clicked}>
                {this.props.children}
                <div className={style.Button_rippleContainer} onMouseDown={this.showRipple}
                     onMouseUp={this.callCleanUp(this.cleanUp, 2000)}>
                    {this.renderRippleSpan()}
                </div>
            </button>
        );

        if (this.props.href) {
            tag = (
                <Link
                    to={this.props.href}
                    className={classes.join(' ')}>
                    {this.props.children}
                    <div className={style.Button_rippleContainer} onMouseDown={this.showRipple}
                         onMouseUp={this.callCleanUp(this.cleanUp, 2000)}>
                        {this.renderRippleSpan()}
                    </div>
                </Link>
            );
        }

        return tag;
    }
}

Button.contextType = ThemeContext;

export default Button;