import React from 'react';

import style from './Message.module.scss';
import mascot from '../assets/img/icons-new-design/mascot.svg';

class Message extends React.Component {
    render() {
        const classes = [style.Message];
        if(this.props.long) {
            classes.push(style.Message__long);
        } else {
            classes.push(style.Message__short);
        }
        return(
            <div
            className={classes.join(' ')}
            >
                <img
                src={mascot}
                className={style.Message_img}
                />
                <p
                className={style.Message_text}
                >
                    {this.props.children}
                </p>
            </div>
        );
    }
}

export default Message;