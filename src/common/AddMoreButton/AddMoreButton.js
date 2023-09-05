import React from 'react';

import style from './style.module.scss';

class AddMoreButton extends React.Component {
    render() {
        const classes = [style.AddMoreButton];
        if(this.props.className) {
            classes.push(this.props.className);
        }
        return(
            <button 
            className={classes.join(' ')}
            onClick={this.props.onClick} 
            {...this.props.additionalProps}
            >
            {this.props.children}
            </button>
        );
    }
}

export default AddMoreButton;