import React, {Component} from "react";
import PropTypes from 'prop-types';
import {withRouter} from "react-router-dom";
import {CircularProgress} from "@material-ui/core";
import store from "../../stores/store";
import {observer} from "mobx-react";
import FilterButton from "../FilterButton/FilterButton";
import windowSize from 'react-window-size';
import {sliceCity, sliceTech} from "../helpers";
import Heading from '../Heading';
import style from './style.module.scss'
import {ReactComponent as FilterIcon} from '../../assets/img/icons-new-design/filter.svg';
import {ReactComponent as ArrowShort} from '../../assets/img/icons-new-design/arrow-short.svg';
import pinOrange from '../../assets/img/icons-new-design/pin--orange.svg';
import cpuGreen from '../../assets/img/icons-new-design/cpu--green.svg';
import euroBlue from '../../assets/img/icons-new-design/euro--blue.svg';
import briefcaseRed from '../../assets/img/icons-new-design/briefcase--red.svg';
import experienceAllIcon from '../../assets/img/icons-new-design/experience--all.svg';
import experienceJuniorIcon from '../../assets/img/icons-new-design/experience--junior.svg';
import experienceMidIcon from '../../assets/img/icons-new-design/experience--mid.svg';
import experienceSeniorIcon from '../../assets/img/icons-new-design/experience--senior.svg';
import MobileFilterButton from '../MobileFilterButton';
import Container from '../Container/Container';
import Popup from '../Popup';
import SliderInput from '../SliderInput';
import Button from '../Button/Button';
import {ThemeContext} from "../../themeContext";
import TechnologySlider from "../TechnologySlider/TechnologySlider";

import NumberFormat from "react-number-format";

const marks = [
  {value: 0, label: '0'},
  {value: 200000, label: '€200k'},
];

class FilterBar extends Component {
  constructor(props) {
    super(props);
    this.handleCity = this.handleCity.bind(this);
    this.expMarks = this.expMarks.bind(this);
    this.resetCities = this.resetCities.bind(this);
    this.resetTechnologies = this.resetTechnologies.bind(this);
    this.techButtonPressed = this.techButtonPressed.bind(this);
    this.handleTechnology = this.handleTechnology.bind(this);
    this.onExpChange = this.onExpChange.bind(this);
  }

  state = {
    visible: false,
    visibleTech: false,
    showFilterPopup: false,
    popupFilterType: 'desktop',
    filterSalaryRangeValue: [24000, 120000],
    filterExperienceSelectedValues: [],
    filterSortValue: 0
  };

  componentDidMount() {
    store.getCities();
    store.getTechnologies();
  }

  handleExperienceFilterClick = (value) => {

    // If "all" pressed
    if (value === 3) {
      return this.setState({filterExperienceSelectedValues: [value]});
    }

    this.setState(prevState => {
      let filterExperienceSelectedValues = [...prevState.filterExperienceSelectedValues];

      // if includes "all"
      if (filterExperienceSelectedValues.includes(3)) {
        filterExperienceSelectedValues = filterExperienceSelectedValues.filter(elementVal => elementVal != 3);
      }

      if (filterExperienceSelectedValues.includes(value)) {
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
      if (prevState.filterSortValue === value) {
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
    this.setState({visible: flag});
  };

  handleTechVisibleChange = (flag) => {
    this.setState({visibleTech: flag});
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

    [store.salaryBottom, store.salaryTop] = filterSalaryRangeValue;

    if (filterExperienceSelectedValues.length > 0) {
      if (filterExperienceSelectedValues.includes(3)) {
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
    // let citiesLocal = [];
    // citiesLocal.push('Cieszyn')
    //
    // store.cities.push('Gliwice');
    // store.cities[0] = 'Siemianowice';


    //store1 store.cities, store.technology, store.
    // store2 new-cities,

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

  moneyFormatter(level) {
    return <NumberFormat
      value={level}
      displayType={'text'}
      thousandSeparator={'.'}
      decimalSeparator={','}
      prefix={'€'}
    />
  }

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
        value: 3,
        name: 'Highest Salary'
      }
    ]
  }

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

  render() {
    const themeContext = this.context;
    const {classes} = this.props;
    const {cities, technologies, jobs} = store;
    const filtersEnd = sliceTech(this.props.windowWidth);
    const cityEnd = sliceCity(this.props.windowWidth);

    if (!cities || !technologies || !jobs) {
      return (
        <CircularProgress/>
      )
    }

    const expMarksOutput = this.expMarks().map(mark => {
      return (
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
          <span style={{marginTop: '4px'}}>{mark.name}</span>
        </FilterButton>
      )
    });

    const sortMarksOutput = this.sortMarks().map(mark => {
      return (
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

    const citiesOutput = cities.map(city => {
      return (
        <FilterButton
          key={city.fields.name}
          value={city.fields.name}
          onClick={(evt) => this.handleCity(evt.currentTarget.value)}
          buttonPressed={this.cityButtonPressed(city)}
          className={[style.filterPopupBtn, style.filterPopupBtn__location].join(' ')}
          dataCyPrefix='cityButton-'
        >
          {city.fields.name}
        </FilterButton>
      )
    });

    const desktopLocationPopupOutput = (
      <div
        className={themeContext.theme === 'dark' ? [style.filterPopup, style.filterPopup__dark].join(' ') : style.filterPopup}>
        <div
          className={style.filterPopupRow}
        >
          <Heading variant="h3">Location</Heading>
          <div
            className={style.filterPopupBtns}
          >
            {citiesOutput}
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
      </div>
    );

    const desktopPopupOutput = (
      <div
        className={themeContext.theme === 'dark' ? [style.filterPopup, style.filterPopup__dark].join(' ') : style.filterPopup}>
        <div
          className={style.filterPopupRow}
        >
          <Heading variant="h3">Experience</Heading>
          <div
            className={style.filterPopupBtns}
          >
            {expMarksOutput}
          </div>
        </div>
        <div
          className={style.filterPopupRow}
        >
          <Heading variant="h3">Sort By</Heading>
          <div
            className={style.filterPopupBtns}
          >
            {sortMarksOutput}
          </div>
        </div>
        <div
          className={style.filterPopupRow}
        >
          <Heading variant="h3">Salary</Heading>
          <div
            className={style.filterPopupSliderInput}
          >
            <SliderInput
              min={0}
              step={2000}
              max={200000}
              prefix={'€'}
              value={this.state.filterSalaryRangeValue}
              onChange={(event, newValue) => {
                this.setState({filterSalaryRangeValue: newValue})
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
      </div>
    );

    const mobileSalaryPopupOutput = (
      <div
        className={themeContext.theme === 'dark' ? [style.filterPopup, style.filterPopup__dark].join(' ') : style.filterPopup}>
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
            step={2000}
            max={200000}
            prefix={'€'}
            value={this.state.filterSalaryRangeValue}
            onChange={(event, newValue) => {
              this.setState({filterSalaryRangeValue: newValue})
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
      </div>
    );

    const mobileExpMarksOutput = this.expMarks().map(mark => {
      return (
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
            <span style={{marginTop: '4px'}}>{mark.name}</span>
          </FilterButton>
        </li>
      )
    });

    const mobileExperiencePopupOutput = (
      <div
        className={themeContext.theme === 'dark' ? [style.filterPopup, style.filterPopup__dark].join(' ') : style.filterPopup}>
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
      </div>
    );

    const mobileLocationsPopupOutput = (
      <div
        className={themeContext.theme === 'dark' ? [style.filterPopup, style.filterPopup__dark].join(' ') : style.filterPopup}>
        <div
          className={style.filterPopupTop}
        >
          <Heading variant="h1">Location</Heading>
        </div>
        <div
          className={style.filterPopupMobileButtons}
        >
          {/* TODO : Search & popular searched */}
          {citiesOutput}
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
      </div>
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
      <div
        className={themeContext.theme === 'dark' ? [style.filterPopup, style.filterPopup__dark].join(' ') : style.filterPopup}>
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
      </div>
    );

    let popupOutput = desktopPopupOutput;

    if (this.state.popupFilterType === 'mobile-salary') {
      popupOutput = mobileSalaryPopupOutput;
    } else if (this.state.popupFilterType === 'mobile-experience') {
      popupOutput = mobileExperiencePopupOutput;
    } else if (this.state.popupFilterType === 'mobile-location') {
      popupOutput = mobileLocationsPopupOutput;
    } else if (this.state.popupFilterType === 'mobile-technology') {
      popupOutput = mobileTechnologiesPopupOutput;
    } else if (this.state.popupFilterType === 'desktop-location') {
      popupOutput = desktopLocationPopupOutput;
    }

    const filterBarClasses = [style.FilterBar];

    if (themeContext.theme === 'dark') {
      filterBarClasses.push(style.FilterBar_dark);
    } else {
      filterBarClasses.push(style.FilterBar_light)
    }

    return (
      <>
        <div className={filterBarClasses.join(' ')}>
          <Container>
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
                  icon={cpuGreen}
                  name="Technology"
                  color="green"
                  onClick={() => this.popupToggleHandler('mobile-technology')}
                />
              </li>
              <li className={style.FilterBar_mobileFiltersItem}>
                <MobileFilterButton
                  icon={euroBlue}
                  name="Salary"
                  color="blue"
                  onClick={() => this.popupToggleHandler('mobile-salary')}
                />
              </li>
              <li className={style.FilterBar_mobileFiltersItem}>
                <MobileFilterButton
                  icon={briefcaseRed}
                  name="Experience"
                  color="red"
                  onClick={() => this.popupToggleHandler('mobile-experience')}
                />
              </li>
            </ul>
            <div className={style.FilterBar_desktopFilters}>
              <FilterButton
                className={style.FilterBar_desktopFiltersLocationButton}
                onClick={() => this.popupToggleHandler('desktop-location')}
                withIconRight
              >
                <span>Location</span>
                <ArrowShort/>
              </FilterButton>
              <TechnologySlider
                onClick={(evt) => this.handleTechnology(evt.currentTarget.value)}
                technologies={technologies.map(tech => {
                  return {
                    fields: tech.fields,
                    name: tech.fields.name,
                    background: tech.fields.background,
                    iconColor: tech.fields.color,
                    icon: tech.fields.devicon,
                    buttonPressed: this.techButtonPressed(tech)
                  }
                })}
              />
              <FilterButton
                className={style.FilterBar_desktopFiltersMoreButton}
                onClick={this.popupToggleHandler}
                withIconRight
              >
                <span>More</span>
                <FilterIcon/>
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

FilterBar.contextType = ThemeContext;

FilterBar.propTypes = {
  classes: PropTypes.object,
};

FilterBar = observer(FilterBar);
FilterBar = windowSize(FilterBar);
FilterBar = withRouter(FilterBar);

export default FilterBar;
