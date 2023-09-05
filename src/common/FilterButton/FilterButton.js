import React, {Component} from "react";
import PropTypes from "prop-types";
import {observer} from "mobx-react";
import {withRouter} from "react-router-dom";
import style from './style.module.scss';
import {ThemeContext} from "../../themeContext";

class FilterButton extends Component {

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


        const {buttonPressed} = this.props;
        const pressed = buttonPressed ? 'pressed' : 'unpressed';

        const classes = [style.FilterButton];

        if(themeContext.theme === 'dark') {
            classes.push(style.FilterButton_dark);
        } else {
            classes.push(style.FilterButton_light)
        }

        if (this.props.className) {
            classes.push(this.props.className);
        }

        if (this.props.withIcon) {
            classes.push(style.FilterButton__withIcon);
        }

        if (this.props.withIconRight) {
            classes.push(style.FilterButton__withIconRight);
        }

        if (pressed === 'pressed') {
            classes.push(style.FilterButton__pressed);
        }

        return (
            <button
                className={classes.join(' ')}
                data-cy={this.props.dataCyPrefix + pressed}
                value={this.props.value}
                onClick={this.props.onClick}
            >
                {this.props.children}
                <div className={style.FilterButton_rippleContainer} onMouseDown={this.showRipple}
                     onMouseUp={this.callCleanUp(this.cleanUp, 2000)}>
                    {this.renderRippleSpan()}
                </div>
            </button>
        );
    }
}

FilterButton.contextType = ThemeContext;

FilterButton.propTypes = {
    tech: PropTypes.any,
    style: PropTypes.any,
    onClick: PropTypes.func,
    className: PropTypes.string
};

FilterButton = observer(FilterButton);
FilterButton = withRouter(FilterButton);

export default FilterButton;