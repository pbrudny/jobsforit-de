import React from 'react';

import Heading from '../common/Heading';
import BrandItem from './BrandItem';

import style from './BrandsSection.module.scss';

class BrandsSection extends React.Component {
  render() {
    return(
      <div className={style.BrandsSection}>
        <Heading 
        variant='h2'
        className={style.BrandsSection_heading}
        >
          {this.props.title}
        </Heading>
        <ul className={style.BrandsSection_items}>
          {this.props.items.map((item) => (
            <li 
            key={item.id}
            className={style.BrandsSection_item}>
              <BrandItem
              img={item.img}
              logo={item.logo}
              name={item.name}
              category={item.category}
              link={item.link}
              />
            </li>
          ))}
        </ul>
        <button
        className={style.BrandsSection_loadmore}
        >
          Load More...
        </button>
      </div>
    )
  }
}

export default BrandsSection;