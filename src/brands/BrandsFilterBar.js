import React from 'react';
import {CircularProgress} from "@material-ui/core";
import windowSize from 'react-window-size';
import store from "../stores/store";
import {sliceCity, sliceTech} from "../common/helpers";
import FilterButton from "../common/FilterButton/FilterButton";
import Heading from '../common/Heading';
import MobileFilterButton from '../common/MobileFilterButton';
import Container from '../common/Container/Container';
import Popup from '../common/Popup';
import SliderInput from '../common/SliderInput';
import Button from '../common/Button/Button';
import FilterGroup from '../common/FilterGroup';

import pinGray from '../assets/img/icons-new-design/pin--gray.svg';
import filterGray from '../assets/img/icons-new-design/filter--gray.svg';
import pinOrange from '../assets/img/icons-new-design/pin--orange.svg';
import buildingGray from '../assets/img/icons-new-design/building--gray.svg';
import buildingGreen from '../assets/img/icons-new-design/building--green.svg';
import resizeBlue from '../assets/img/icons-new-design/resize--blue.svg';

import style from './BrandsFilterBar.module.scss';

class BrandsFilterBar extends React.Component {

  state = {
    visible: false,
    visibleTech: false,
    showFilterPopup: false,
    popupFilterType: 'desktop',
    filterSalaryRangeBottom: 0,
    filterSalaryRangeTop: 100,
    filterSalaryRangeValue: 0,
    filterExperienceSelectedValues: [],
    filterSortValue: 0
  };

  popupClosedHandler = () => {
    document.body.style.overflow = 'unset';
    this.setState({showFilterPopup: false});
  }

  popupToggleHandler = (popupType) => {
    this.setState((prevState) => {
      if (!prevState.showFilterPopup) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
      return {
        showFilterPopup: !prevState.showFilterPopup,
        popupFilterType: popupType
      }
    });
  }

  componentDidMount() {
    store.getCities();
    store.getTechnologies();
  }

  handleCity(city) {
    console.log('Location clicked!');
  }

  techButtonPressed(tech) {
    return store.isTechnologySelected(tech.fields.name) || store.allTechnologies;
  }

  cityButtonPressed(city) {
    return store.isCitySelected(city.fields.name) || store.allCities;
  }

  handleTechnology(tech) {
    console.log('Technology clicked!');
  }

  render() {
    const {classes} = this.props;
    const {cities, technologies, jobs} = store;
    const filtersEnd = sliceTech(this.props.windowWidth);
    const cityEnd = sliceCity(this.props.windowWidth);

    if (!cities || !technologies || !jobs) {
      return (
        <CircularProgress/>
      )
    }

    const desktopPopupOutput = (
      <>
        <div
          className={style.filterPopupRow}
        >
          <Heading variant="h2">Company size</Heading>
          <div
            className={style.filterPopupSliderInput}
          >
            <SliderInput
              min={0}
              max={100000}
              value={this.state.filterSalaryRangeValue}
              prefix={'Emp: '}
              onChange={(e) => {
                this.setState({filterSalaryRangeValue: e.target.value})
              }}
            />
          </div>
        </div>
        <div
          className={style.filterPopupBottom}>
          <Button
            variant="primary long"
            clicked={this.applyFilters}
          >
            Apply Filter
          </Button>
        </div>
      </>
    );

    const mobileCitiesOutput = cities.map(city => {
      return (
        <FilterButton
          key={city.fields.name}
          value={city.fields.name}
          onClick={(evt) => this.handleCity(evt.currentTarget.value)}
          buttonPressed={this.cityButtonPressed(city)}
          className={style.filterPopupBtn}
          dataCyPrefix='cityButton-'
        >
          {city.fields.name}
        </FilterButton>
      )
    });

    const mobileLocationsPopupOutput = (
      <>
        <div
          className={style.filterPopupTop}
        >
          <Heading variant="h1">Location</Heading>
        </div>
        <div
          className={style.filterPopupMobileButtons}
        >
          {/* TODO : Search & popular searched */}
          {mobileCitiesOutput}
        </div>
        <div
          className={style.filterPopupMobileBottom}
        >
          <Button
            variant="primary long"
            clicked={this.applyFilters}
          >
            Apply Filter
          </Button>
        </div>
      </>
    );

    const mobileTechnologiesOutput = technologies.map(tech => {
      return (
        <FilterButton
          key={tech.fields.name}
          value={tech.fields.name}
          onClick={(evt) => this.handleTechnology(evt.currentTarget.value)}
          buttonPressed={this.techButtonPressed(tech)}
          className={style.filterPopupBtn}
          dataCyPrefix='techButton-'
        >
          {tech.fields.name}
        </FilterButton>
      )
    });

    const mobileTechnologiesPopupOutput = (
      <>
        <div
          className={style.filterPopupTop}
        >
          <Heading variant="h1">Technology</Heading>
        </div>
        <div
          className={style.filterPopupMobileButtons}
        >
          {mobileTechnologiesOutput}
        </div>
        <div
          className={style.filterPopupMobileBottom}
        >
          <Button
            variant="primary long"
            clicked={this.applyFilters}
          >
            Apply Filter
          </Button>
        </div>
      </>
    );

    const mobileCompanySizeOutput = technologies.map(tech => {
      return (
        <FilterButton
          key={tech.fields.name}
          value={tech.fields.name}
          onClick={(evt) => this.handleTechnology(evt.currentTarget.value)}
          buttonPressed={this.techButtonPressed(tech)}
          className={style.filterPopupBtn}
          dataCyPrefix='techButton-'
        >
          {tech.fields.name}
        </FilterButton>
      )
    });

    const mobileCompanySizePopupOutput = (
      <>
        <div
          className={style.filterPopupTop}
        >
          <Heading variant="h1">Company size</Heading>
        </div>
        <div
          className={style.filterPopupMobileSlider}
        >
          <SliderInput
            min={0}
            max={100000}
            value={this.state.filterSalaryRangeValue}
            prefix={'Emp: '}
            onChange={(e) => {
              this.setState({filterSalaryRangeValue: e.target.value})
            }}
          />
        </div>
        <div
          className={style.filterPopupMobileBottom}
        >
          <Button
            variant="primary long"
            clicked={this.applyFilters}
          >
            Apply Filter
          </Button>
        </div>
      </>
    );

    let popupOutput = desktopPopupOutput;

    if (this.state.popupFilterType === 'mobile-location') {
      popupOutput = mobileLocationsPopupOutput;
    } else if (this.state.popupFilterType === 'mobile-technology') {
      popupOutput = mobileTechnologiesPopupOutput;
    } else if (this.state.popupFilterType === 'mobile-company-size') {
      popupOutput = mobileCompanySizePopupOutput;
    }

    return (
      <>
        <div className={style.FilterBar}>
          <Container>
            <Heading variant="h1">Search the job that suits you best!</Heading>
            <p className={style.FilterBar_description}>Search the job that suits you best!</p>
            <ul className={style.FilterBar_mobileFilters}>
              <li className={style.FilterBar_mobileFiltersItem}>
                <MobileFilterButton
                  icon={pinOrange}
                  name="Location"
                  color="orange"
                  onClick={() => this.popupToggleHandler('mobile-location')}
                />
              </li>
              <li className={style.FilterBar_mobileFiltersItem}>
                <MobileFilterButton
                  icon={buildingGreen}
                  name="Industry"
                  color="green"
                  onClick={() => this.popupToggleHandler('mobile-technology')}
                />
              </li>
              <li className={style.FilterBar_mobileFiltersItem}>
                <MobileFilterButton
                  icon={resizeBlue}
                  name="Size"
                  color="blue"
                  onClick={() => this.popupToggleHandler('mobile-company-size')}
                />
              </li>
            </ul>
            <div className={style.FilterBar_desktopFilters}>
              <ul className={style.FilterBar_desktopFiltersList}>
                <li className={style.FilterBar_filtersItem}>
                  <FilterGroup
                    title={'Location'}
                    icon={pinGray}
                    items={cities}
                    buttonPressed={this.cityButtonPressed}
                    onClick={(evt) => this.handleCity(evt.currentTarget.value)}
                    dataCyPrefix='cityButton-'
                    windowWidth={this.props.windowWidth}
                  />
                </li>
                <li className={style.FilterBar_filtersItem}>
                  <FilterGroup
                    title={'Industry'}
                    icon={buildingGray}
                    items={technologies}
                    buttonPressed={this.techButtonPressed}
                    onClick={(evt) => this.handleTechnology(evt.currentTarget.value)}
                    dataCyPrefix='techButton-'
                    windowWidth={this.props.windowWidth}
                  />
                </li>
              </ul>
              <FilterButton
                onClick={this.popupToggleHandler}
                withIconRight
              >
                <span>More filters</span>
                <img
                  src={filterGray}
                />
              </FilterButton>
            </div>
          </Container>
        </div>
        <Popup
          open={this.state.showFilterPopup}
          onCloseClick={this.popupClosedHandler}
        >
          {popupOutput}
        </Popup>
      </>
    );
  }
}

BrandsFilterBar = windowSize(BrandsFilterBar);

export default BrandsFilterBar;