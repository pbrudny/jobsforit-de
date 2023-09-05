import React from 'react';
import windowSize from 'react-window-size';

import store from "../../stores/store";
import TopNav from '../../common/TopNav/TopNav';
import Heading from '../../common/Heading';
import Container from '../../common/Container/Container';
import Search from '../../common/Search';
import FilterButton from '../../common/FilterButton/FilterButton';
import TutorialItem from './TutorialItem';
import arrowLeftDarkGray from '../../assets/img/icons-new-design/arrow--left--dark-gray.svg';
import devTubeBackground from '../../assets/img/devtube.gif';
import {ThemeContext} from "../../themeContext";

import style from './Tutorials.module.scss';
import staticStyle from '../../static/Static.module.scss';

class Tutorials extends React.Component {

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

    const themeContext = this.context;

    const styles = [style.Tutorials];

    if(themeContext.theme === 'dark') {
      styles.push(style.Tutorials__dark);
    } else {
      styles.push(style.Tutorials__light);
    }

    return(
      <>
        <TopNav />
        <div className={style.FilterBar}>
          <img
              className={style.FilterBar_img}
              src={devTubeBackground}/>
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
                Welcome to DevTube
              </Heading>
              <p className={style.FilterBar_subheading}>Great video IT content gathered in one place.</p>
              <Search />
              <ul className={style.FilterBar_filters}>
                <li className={style.FilterBar_filtersItem}>
                  <FilterButton

                    onClick={this.handleTechnology}
                  >
                    Java
                  </FilterButton>
                </li>
                <li className={style.FilterBar_filtersItem}>
                  <FilterButton
                  onClick={this.handleTechnology}
                  >
                    Java
                  </FilterButton>
                </li>
                <li className={style.FilterBar_filtersItem}>
                  <FilterButton
                  onClick={this.handleTechnology}
                  >
                    Java
                  </FilterButton>
                </li>
                <li className={style.FilterBar_filtersItem}>
                  <FilterButton
                  onClick={this.handleTechnology}
                  >
                    Java
                  </FilterButton>
                </li>
                <li className={style.FilterBar_filtersItem}>
                  <FilterButton
                  onClick={this.handleTechnology}
                  >
                    Java
                  </FilterButton>
                </li>
                <li className={style.FilterBar_filtersItem}>
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
        <div className={styles.join(' ')}>
          <Container>
            <div className={style.Tutorials_top}>
              <Heading variant='h3' className={style.Tutorials_heading}>
                Search Results (219)
              </Heading>
            </div>
            <ul className={style.Tutorials_list}>
              <li className={style.Tutorials_item}>
                <TutorialItem />
              </li>
              <li className={style.Tutorials_item}>
                <TutorialItem />
              </li>
              <li className={style.Tutorials_item}>
                <TutorialItem />
              </li>
              <li className={style.Tutorials_item}>
                <TutorialItem />
              </li>
              <li className={style.Tutorials_item}>
                <TutorialItem />
              </li>
            </ul>
          </Container>
        </div>
      </>
    );
  }
}

Tutorials.contextType = ThemeContext;

Tutorials = windowSize(Tutorials);

export default Tutorials;
