import React from "react";
import Backdrop from "./Backdrop/Backdrop";
import style from "./Popup.module.scss";
import {ThemeContext} from "../themeContext";
import Button from "./Button/Button";

class Popup extends React.Component {
  render() {
    const themeContext = this.context;
    const popupClasses = [style.Popup];

    if(themeContext.theme === 'dark') {
        popupClasses.push(style.Popup__dark);
    } else {
        popupClasses.push(style.Popup__light);
    }

    if(this.props.open) {
        popupClasses.push(style.Popup__open);
    }

    if(this.props.apply) {
        popupClasses.push(style.Popup__apply);
        return(
            <>
                <Backdrop onClick={this.props.onCloseClick} show={this.props.open} />
                <div className={popupClasses.join(' ')}>
                    <button 
                    className={style.Popup_closeBtn}
                    onClick={this.props.onCloseClick}
                    ></button>
                    <img
                        src="https://media.giphy.com/media/cEYFeE4wJ6jdDVBiiIM/giphy.gif"
                        alt=""
                        className={style.Popup_img}
                    />
                    <div className={style.Popup_content}>
                        {this.props.children}
                        <Button
                            classes={[style.Popup_btn]}
                            variant='primary'
                            clicked={this.props.onCloseClick}
                        >Let's do it!</Button>
                    </div>
                </div>
            </>
        );
    }

    return(
        <>
            <Backdrop onClick={this.props.onCloseClick} show={this.props.open} />
            <div className={popupClasses.join(' ')}>
                <button 
                className={style.Popup_closeBtn}
                onClick={this.props.onCloseClick}
                ></button>
                <div className={style.Popup_content}>
                    {this.props.children}
                </div>
            </div>
        </>
    );
  }
}

Popup.contextType = ThemeContext;

export default Popup;
