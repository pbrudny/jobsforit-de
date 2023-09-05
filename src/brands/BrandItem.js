import React from 'react';
import {Link} from "react-router-dom";

import style from './BrandItem.module.scss';

class BrandItem extends React.Component {
  render() {
    return(
      <article 
      className={style.BrandItem}
      >
        <Link to={this.props.link}>
          <div 
          className={style.BrandItem_wrapper}>
            <img
            src={this.props.img}
            className={style.BrandItem_img}
            />
            <div
            className={style.BrandItem_content}
            >
              <img
              src={this.props.logo}
              className={style.BrandItem_logo}
              />
              <div>
                <h3
                className={style.BrandItem_heading}
                >
                  {this.props.name}
                </h3>
                <p
                className={style.BrandItem_category}
                >
                  {this.props.category}
                </p>
              </div>
            </div>
          </div>
        </Link>
      </article>
    )
  }
}

export default BrandItem;