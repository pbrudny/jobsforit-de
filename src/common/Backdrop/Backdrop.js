import React from 'react';

import style from './style.module.scss';

class Backdrop extends React.Component {
    render() {
        return(
            this.props.show ? <div className={style.Backdrop} onClick={this.props.onClick}></div> : null
        );
    }
}

export default Backdrop;