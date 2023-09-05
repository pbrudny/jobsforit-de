import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";
import {CircularProgress } from "@material-ui/core";
import store from "../stores/store";
import {observer} from "mobx-react";
import FilterButton from "./FilterButton/FilterButton";
import windowSize from 'react-window-size';
import { sliceCity, sliceTech } from "./helpers";
import Heading from './Heading';
import style from './BrandsFilterBar.module.scss'
import pinGray from '../assets/img/icons-new-design/pin--gray.svg';
import filterGray from '../assets/img/icons-new-design/filter--gray.svg';
import pinOrange from '../assets/img/icons-new-design/pin--orange.svg';
import cpuGray from '../assets/img/icons-new-design/cpu--gray.svg';
import cpuGreen from '../assets/img/icons-new-design/cpu--green.svg';
import euroBlue from '../assets/img/icons-new-design/euro--blue.svg';
import briefcaseRed from '../assets/img/icons-new-design/briefcase--red.svg';
import experienceAllIcon from '../assets/img/icons-new-design/experience--all.svg';
import experienceJuniorIcon from '../assets/img/icons-new-design/experience--junior.svg';
import experienceMidIcon from '../assets/img/icons-new-design/experience--mid.svg';
import experienceSeniorIcon from '../assets/img/icons-new-design/experience--senior.svg';
import MobileFilterButton from './MobileFilterButton';
import Container from './Container/Container';
import Popup from './Popup';
import SliderInput from './SliderInput';
import Button from './Button/Button';

class BrandsFilterBar extends Component {
  constructor(props) {
    super(props);
    this.handleCity = this.handleCity.bind(this);
    this.expMarks = this.expMarks.bind(this);
    this.resetCities = this.resetCities.bind(this);
    this.resetTechnologies = this.resetTechnologies.bind(this);
    this.techButtonPressed = this.techButtonPressed.bind(this);
    this.handleTechnology = this.handleTechnology.bind(this);
    this.onSalaryChange = this.onSalaryChange.bind(this);
    this.onExpChange = this.onExpChange.bind(this);
  }

  state = {
    visible: false,
    visibleTech: false,
    showFilterPopup: false,
    popupFilterType: 'desktop',
    filterSalaryRangeValue: 0,
    filterExperienceSelectedValues: [],
    filterSortValue: 0
  };

  componentDidMount() {
    store.getCities();
    store.getTechnologies();
  }

  handleExperienceFilterClick = (value) => {

    // If "all" pressed
    if(value === 3) {
      return this.setState({filterExperienceSelectedValues: [value]});
    }

    this.setState(prevState => {
      let filterExperienceSelectedValues = [...prevState.filterExperienceSelectedValues];

      // if includes "all"
      if(filterExperienceSelectedValues.includes(3)) {
        filterExperienceSelectedValues = filterExperienceSelectedValues.filter(elementVal => elementVal != 3);
      }

      if(filterExperienceSelectedValues.includes(value)) {
        filterExperienceSelectedValues = filterExperienceSelectedValues.filter(elementVal => elementVal != value);
        return {filterExperienceSelectedValues: filterExperienceSelectedValues};
      } else {
        filterExperienceSelectedValues.push(value);
        return {filterExperienceSelectedValues: filterExperienceSelectedValues};
      }

    });
  };

  isExperienceFilterSelected = (value) => {
    return this.state.filterExperienceSelectedValues.includes(value);
  };

  handleSortClick = (value) => {
    this.setState(prevState => {
      if(prevState.filterSortValue === value) {
        return {filterSortValue: 0};
      } else {
        return {filterSortValue: value}
      }
    });
  }

  isSortSelected = (value) => {
    return this.state.filterSortValue === value;
  }

  handleVisibleChange = (flag) => {
    this.setState({ visible: flag });
  };

  handleTechVisibleChange = (flag) => {
    this.setState({ visibleTech: flag });
  };

  applyFilters = () => {
    const {
      filterSalaryRangeValue,
      filterExperienceSelectedValues,
      filterSortValue
    } = this.state;
    console.log('Filtering...');
    console.log(`Salary: ${filterSalaryRangeValue}`);
    console.log(`Exp: ${filterExperienceSelectedValues}`);
    console.log(`Sort: ${filterSortValue}`);

    store.salaryBottom = filterSalaryRangeValue;

    if(filterExperienceSelectedValues.length > 0) {
      // if experience == "all"
      if(filterExperienceSelectedValues.includes(3)) {
        store.expBottom = 0;
        store.expTop = 2;
      } else {
        store.expBottom = Math.min(...filterExperienceSelectedValues);
        store.expTop = Math.max(...filterExperienceSelectedValues);
      }
    }

    store.sort = filterSortValue;

    this.popupClosedHandler();
    store.filterJobs();
    this.cleanCurrentJob();
  }

  cleanCurrentJob() {
    store.fromUrl = false;
    store.currentJobId = null;
    store.currentJob = null;
    if (store.allJobs.length === 0) {
      const techs = store.selectedTechnologies;
      store.getJobs(techs);
    }
  }

  resetCities() {
    store.remoteLevel = null;
    store.resetCities();
    store.filterJobs();
    this.cleanCurrentJob()
  }

  resetTechnologies() {
    store.remoteLevel = null;
    store.resetTechnologies();
    store.filterJobs();
    this.cleanCurrentJob()
  }

  handleCity(city) {
    store.remoteLevel = null;
    if (store.allCities) {
      store.selectedCities = [city];
      store.filterJobs();
    } else if (store.isCitySelected(city)) {
      store.selectedCities.length === 1 ? store.resetCities() : store.removeCity(city);
      store.filterJobs();
    } else {
      store.filterByCity(city);
    }

    store.allCities = store.selectedCities.length === store.cities.length;
    this.cleanCurrentJob()
  }

  handleTechnology(tech) {
    store.remoteLevel = null;
    const technology = tech.toLowerCase();

    if (store.allTechnologies) {
      store.selectedTechnologies = [technology];
      store.allTechnologies = false;
      store.filterJobs();
    } else if (store.isTechnologySelected(technology)) {
      if (store.selectedTechnologies.length === 1) {
        store.resetTechnologies();
      } else {
        store.removeTechnology(technology);
      }
      store.filterJobs();
    } else {
      store.filterByTechnology(technology);
    }

    const isAll = store.selectedTechnologies.length === store.technologies.length;
    store.allTechnologies = isAll;
    this.cleanCurrentJob()
  }

  onSalaryChange = (value) => {
    store.salaryBottom = value[0];
    store.salaryTop = value[1];
    store.filterJobs();
    this.cleanCurrentJob()
  };

  onExpChange = (value) => {
    store.expBottom = value[0];
    store.expTop = value[1];
    store.filterJobs();
    this.cleanCurrentJob();
  };

  cityButtonStyle(city) {
    if (store.selectedCities.length === 0) {
      return this.props.classes.place
    }

    if (store.isCitySelected(city.fields.name)) {
      return this.props.classes.placeSelected
    }

    return this.props.classes.place
  }

  techButtonPressed(tech) {
    return store.isTechnologySelected(tech.fields.name) || store.allTechnologies;
  }

  cityButtonPressed(city) {
    return store.isCitySelected(city.fields.name) || store.allCities;
  }

  techButtonStyle(tech) {
    if (this.techButtonPressed(tech)) {
      return {background: tech.fields.background}
    }
    return {background: tech.fields.background, opacity: '0.2'}
  }

  buttonIconStyle(tech) {
    let iconStyle = tech.fields.devicon + ' devicon-size';
    if (store.isTechnologySelected(tech.fields.name)) {
      iconStyle = iconStyle + " colored";
    }
    return iconStyle;
  }

  expMarks() {
    return [
      {
        value: 3,
        name: 'All',
        icon: experienceAllIcon
      },
      {
        value: 0,
        name: 'Junior',
        icon: experienceJuniorIcon
      },
      {
        value: 1,
        name: 'Mid',
        icon: experienceMidIcon
      },
      {
        value: 2,
        name: 'Senior',
        icon: experienceSeniorIcon
      }
    ]
  };

  sortMarks() {
    return [
      {
        value: 1,
        name: 'Latest Added'
      },
      {
        value: 2,
        name: 'Most Popular'
      },
      {
        value: 3,
        name: 'Highest Salary'
      }
    ]
  }

  popupClosedHandler = () => {
    document.body.style.overflow = 'unset';
    this.setState( { showFilterPopup: false } );
  }

  popupToggleHandler = (popupType) => {
    this.setState( (prevState) => {
      if(!prevState.showFilterPopup) {
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

  render() {
    const { classes } = this.props;
    const { cities, technologies, jobs } = store;
    const filtersEnd = sliceTech(this.props.windowWidth);
    const cityEnd = sliceCity(this.props.windowWidth);

    if (!cities || !technologies || !jobs) {
      return (
        <CircularProgress />
      )
    }

    const expMarksOutput = this.expMarks().map(mark => {
      return(
        // <button
        // className={expClasses.join(' ')}
        // key={mark.value}
        // onClick={() => this.handleExperienceFilterClick(mark.value)}
        // >
        // <img
        // src={mark.icon}
        // />
        // <span>{mark.name}</span>
        // </button>
        <FilterButton
          key={mark.value}
          onClick={() => this.handleExperienceFilterClick(mark.value)}
          buttonPressed={this.isExperienceFilterSelected(mark.value)}
          className={style.filterPopupBtn}
          withIcon
        >
          <img
            src={mark.icon}
          />
          <span>{mark.name}</span>
        </FilterButton>
      )
    });

    const sortMarksOutput = this.sortMarks().map(mark => {
      return(
        <FilterButton
          key={mark.value}
          onClick={() => this.handleSortClick(mark.value)}
          buttonPressed={this.isSortSelected(mark.value)}
          className={style.filterPopupBtn}
        >
          <span>{mark.name}</span>
        </FilterButton>
      )
    });

    const desktopPopupOutput = (
      <>
        <div
          className={style.filterPopupRow}
        >
          <Heading variant="h2">Experience</Heading>
          <div
            className={style.filterPopupBtns}
          >
            {expMarksOutput}
          </div>
        </div>
        <div
          className={style.filterPopupRow}
        >
          <Heading variant="h2">Sort By</Heading>
          <div
            className={style.filterPopupBtns}
          >
            {sortMarksOutput}
          </div>
        </div>
        <div
          className={style.filterPopupRow}
        >
          <Heading variant="h2">Salary</Heading>
          <div
            className={style.filterPopupSliderInput}
          >
            <SliderInput
              min={0}
              max={100000}
              value={this.state.filterSalaryRangeValue}
              prefix={'€'}
              onChange={(e) => {this.setState({filterSalaryRangeValue: e.target.value})}}
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

    const mobileSalaryPopupOutput = (
      <>
        <div
          className={style.filterPopupTop}
        >
          <Heading variant="h1">Salary Expectations</Heading>
        </div>
        <div
          className={style.filterPopupMobileSlider}
        >
          <SliderInput
            min={0}
            max={100000}
            value={this.state.filterSalaryRangeValue}
            prefix={'€'}
            onChange={(e) => {this.setState({filterSalaryRangeValue: e.target.value})}}
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

    const mobileExpMarksOutput = this.expMarks().map(mark => {
      return(
        <li
          key={mark.value}
          className={style.filterPopupMobileExperienceItem}
        >
          <img
            src={mark.icon}
          />
          <FilterButton
            onClick={() => this.handleExperienceFilterClick(mark.value)}
            buttonPressed={this.isExperienceFilterSelected(mark.value)}
            className={style.filterPopupBtn}
          >
            {mark.name}
          </FilterButton>
        </li>
      )
    });

    const mobileExperiencePopupOutput = (
      <>
        <div
          className={style.filterPopupTop}
        >
          <Heading variant="h1">Experience</Heading>
        </div>
        <ul
          className={style.filterPopupMobileExperience}
        >
          {mobileExpMarksOutput}
        </ul>
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

    const mobileCitiesOutput = cities.map(city => {
      return(
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
      return(
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

    let popupOutput = desktopPopupOutput;

    if(this.state.popupFilterType === 'mobile-salary') {
      popupOutput = mobileSalaryPopupOutput;
    } else if(this.state.popupFilterType === 'mobile-experience') {
      popupOutput = mobileExperiencePopupOutput;
    } else if(this.state.popupFilterType === 'mobile-location') {
      popupOutput = mobileLocationsPopupOutput;
    } else if(this.state.popupFilterType === 'mobile-technology') {
      popupOutput = mobileTechnologiesPopupOutput;
    }


    return (
      <>
        <div className={style.BrandsFilterBar}>
          <Container>
            <Heading variant="h1">Search the job that suits you best!</Heading>
            <p className={style.BrandsFilterBar_description}>Search the job that suits you best!</p>
            <ul className={style.BrandsFilterBar_mobileFilters}>
              <li className={style.BrandsFilterBar_mobileFiltersItem}>
                <MobileFilterButton
                  icon={pinOrange}
                  name="Location"
                  color="orange"
                  onClick={() => this.popupToggleHandler('mobile-location')}
                />
              </li>
              <li className={style.BrandsFilterBar_mobileFiltersItem}>
                <MobileFilterButton
                  icon={cpuGreen}
                  name="Technology"
                  color="green"
                  onClick={() => this.popupToggleHandler('mobile-technology')}
                />
              </li>
              <li className={style.BrandsFilterBar_mobileFiltersItem}>
                <MobileFilterButton
                  icon={euroBlue}
                  name="Salary"
                  color="blue"
                  onClick={() => this.popupToggleHandler('mobile-salary')}
                />
              </li>
              <li className={style.BrandsFilterBar_mobileFiltersItem}>
                <MobileFilterButton
                  icon={briefcaseRed}
                  name="Experience"
                  color="red"
                  onClick={() => this.popupToggleHandler('mobile-experience')}
                />
              </li>
            </ul>
            <div className={style.BrandsFilterBar_desktopFilters}>
              <ul className={style.BrandsFilterBar_desktopFiltersList}>
                <li className={style.BrandsFilterBar_filtersItem}>
                  <div className={style.filtersItem_name}>
                    <img src={pinGray} className={style.filtersItem_icon} />
                    <span>Location</span>
                  </div>
                  <ul className={style.filtersItem_list}>
                    {cities.slice(0, cityEnd).map(city => (
                      <li
                        key={city.fields.name}
                        className={style.filtersItem_listItem}
                      >
                        <FilterButton
                          value={city.fields.name}
                          buttonPressed={this.cityButtonPressed(city)}
                          onClick={(evt) => this.handleCity(evt.currentTarget.value)}
                          dataCyPrefix='cityButton-'
                        >
                          {city.fields.name}
                        </FilterButton>
                      </li>
                    ))}
                    { cities.length > cityEnd &&
                    <button
                      className={style.filtersItem_seemore}
                      aria-label="See more"
                    ><span></span></button>
                    }
                  </ul>
                </li>
                <li className={style.BrandsFilterBar_filtersItem}>
                  <div className={style.filtersItem_name}>
                    <img src={cpuGray} className={style.filtersItem_icon} />
                    <span>Technology</span>
                  </div>
                  <ul className={style.filtersItem_list}>
                    {technologies.slice(0, filtersEnd).map(tech => (
                      <li
                        key={tech.fields.name}
                        className={style.filtersItem_listItem}
                      >
                        <FilterButton
                          value={tech.fields.name}
                          buttonPressed={this.techButtonPressed(tech)}
                          onClick={(evt) => this.handleTechnology(evt.currentTarget.value)}
                          dataCyPrefix='techButton-'
                        >
                          {tech.fields.name}
                        </FilterButton>
                      </li>
                    ))}
                    { technologies.length > filtersEnd &&
                    <button
                      className={style.filtersItem_seemore}
                      aria-label="See more"
                    ><span></span></button>
                    }
                  </ul>
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

BrandsFilterBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

BrandsFilterBar = observer(BrandsFilterBar);
BrandsFilterBar = windowSize(BrandsFilterBar);
BrandsFilterBar = withRouter(BrandsFilterBar);

export default BrandsFilterBar;
