import React from "react";
import windowSize from 'react-window-size';

import store from "../../stores/store";
import TopNav from "../../common/TopNav/TopNav";
import Heading from '../../common/Heading';
import Container from '../../common/Container/Container';
import Search from '../../common/Search';
import FilterGroup from '../../common/FilterGroup';
import FilterButton from '../../common/FilterButton/FilterButton';
import cpuGray from '../../assets/img/icons-new-design/cpu--gray.svg';
import arrowLeftDarkGray from '../../assets/img/icons-new-design/arrow--left--dark-gray.svg';
import StudyMaterialItem from './StudyMaterialItem';

import style from './StudyMaterial.module.scss';
import staticStyle from '../../static/Static.module.scss';

class StudyMaterial extends React.Component {

  componentDidMount() {
    store.getTechnologies();
  }

  techButtonPressed(tech) {
    return store.isTechnologySelected(tech.fields.name) || store.allTechnologies;
  }

  handleTechnology(tech) {
    console.log('Technology clicked!');
  }

  render() {
    const { technologies } = store;
    return(
      <>
        <TopNav />
        <div className={style.FilterBar}>
          <Container>
            <button className={staticStyle.Static_top_btn}>
              <img
                src={arrowLeftDarkGray}
              />
            </button>
            <div className={style.FilterBar_wrapper}>
              <Heading 
              variant='h1'
              className={style.FilterBar_heading}
              >
                Study Material
              </Heading>
              <Search />
              <div className={style.FilterBar_desktopFilter}>
                <FilterGroup 
                  title={'Technology'}
                  icon={cpuGray}
                  items={technologies}
                  buttonPressed={this.techButtonPressed}
                  onClick={(evt) => this.handleTechnology(evt.currentTarget.value)}
                  dataCyPrefix='techButton-'
                  windowWidth={this.props.windowWidth}
                />
              </div>
              <ul className={style.FilterBar_mobileFilter}>
                <li className={style.FilterBar_mobileFilter_item}>
                  <FilterButton
                  onClick={this.handleTechnology}
                  >
                    Java
                  </FilterButton>
                </li>
                <li className={style.FilterBar_mobileFilter_item}>
                  <FilterButton
                  onClick={this.handleTechnology}
                  >
                    Java
                  </FilterButton>
                </li>
                <li className={style.FilterBar_mobileFilter_item}>
                  <FilterButton
                  onClick={this.handleTechnology}
                  >
                    Java
                  </FilterButton>
                </li>
                <li className={style.FilterBar_mobileFilter_item}>
                  <FilterButton
                  onClick={this.handleTechnology}
                  >
                    Java
                  </FilterButton>
                </li>
                <li className={style.FilterBar_mobileFilter_item}>
                  <FilterButton
                  onClick={this.handleTechnology}
                  >
                    Java
                  </FilterButton>
                </li>
                <li className={style.FilterBar_mobileFilter_item}>
                  <FilterButton
                  onClick={this.handleTechnology}
                  >
                    Java
                  </FilterButton>
                </li>
              </ul>
            </div>
          </Container>
        </div>
        <div className={style.StudyMaterial}>
          <Container>
            <div className={style.StudyMaterial_top}>
              <Heading variant='h2'>
                Search Results (219)
              </Heading>
            </div>
            <ul className={style.StudyMaterial_list}>
              <li className={style.StudyMaterial_item}>
                <StudyMaterialItem />
              </li>
              <li className={style.StudyMaterial_item}>
                <StudyMaterialItem />
              </li>
              <li className={style.StudyMaterial_item}>
                <StudyMaterialItem />
              </li>
              <li className={style.StudyMaterial_item}>
                <StudyMaterialItem />
              </li>
              <li className={style.StudyMaterial_item}>
                <StudyMaterialItem />
              </li>
              <li className={style.StudyMaterial_item}>
                <StudyMaterialItem />
              </li>
            </ul>
          </Container>
        </div>
      </>
    );
  }
}

StudyMaterial = windowSize(StudyMaterial);

export default StudyMaterial;