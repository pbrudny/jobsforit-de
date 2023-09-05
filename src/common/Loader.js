import React from 'react';

import style from './Loader.module.scss';

class Loader extends React.Component {
    render() {
        return(
            <div className={style.Loader}>
                <span></span>
            </div>
        )
    }
}

export default Loader;