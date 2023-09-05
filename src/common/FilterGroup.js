import React from 'react';

import { sliceFilters } from "./helpers";
import FilterButton from './FilterButton/FilterButton';

import style from './FilterGroup.module.scss';

class FilterGroup extends React.Component {
  render() {

    const filterEnd = sliceFilters(this.props.windowWidth);

    return(
      <div className={style.FilterGroup}>
        <div className={style.FilterGroup_name}>
          <img src={this.props.icon} className={style.FilterGroup_icon} onClick={this.props.allClicked}/>
          <span>{this.props.title}</span>
        </div>
        <ul className={style.FilterGroup_list}>
          {this.props.items.slice(0, filterEnd).map(item => (
          <li 
          key={item.fields.name}
          className={style.FilterGroup_listItem}
          >
            <FilterButton 
            value={item.fields.name}
            buttonPressed={this.props.buttonPressed(item)}
            onClick={this.props.onClick}
            dataCyPrefix={this.props.dataCyPrefix}
            >
            {item.fields.name}
            </FilterButton>
          </li>
          ))}
          { this.props.items.length > filterEnd &&
            <button
            className={style.FilterGroup_seemore}
            aria-label="See more"
            ><span></span></button>
          }
        </ul>
      </div>
    );
  }
}

export default FilterGroup;