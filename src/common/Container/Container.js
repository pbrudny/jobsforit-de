import React from 'react';

import style from './style.module.scss';

class Container extends React.Component {
    render() {
        return(
            <div className={this.props.className ? [this.props.className, style.Container].join(' ') : style.Container}>
                {this.props.children}
            </div>
        )
    }
}

export default Container;