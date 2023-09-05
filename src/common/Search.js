import React from 'react';

import searchIcon from '../assets/img/icons-new-design/search--white.svg';

import style from './Search.module.scss';

class Search extends React.Component {
  render() {
    return(
      <div className={style.Search}>
        <input 
        type='text'
        onChange={this.props.onChange}
        className={style.Search_input}
        placeholder='Search...'
        />
        <button
        onClick={this.props.onClick}
        className={style.Search_btn}
        >
          <img 
          src={searchIcon}
          />
        </button>
      </div>
    );
  }
}

export default Search;