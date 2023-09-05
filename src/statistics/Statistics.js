import React, {useContext, useEffect, useState} from 'react';
import windowSize from 'react-window-size';

import store from "../stores/store";
import TopNav from '../common/TopNav/TopNav';
import Container from '../common/Container/Container';

import FilterGroup from '../common/FilterGroup';
import FilterButton from '../common/FilterButton/FilterButton';
import Heading from '../common/Heading';
import cpuGray from '../assets/img/icons-new-design/cpu--gray.svg';
import arrowLeftDarkGray from '../assets/img/icons-new-design/arrow--left--dark-gray.svg';
import BarChart from '../common/BarChart/BarChart';

import style from './Statistics.module.scss';
import staticStyle from '../static/Static.module.scss';
import Message from 'common/Message';
import JobsList from 'jobs/JobsList/JobsList';
import {getCompanies, getJobsSalaries} from "../contentfulClient";
import {LinearProgress} from "@material-ui/core";
import {arrAvg} from "../common/helpers";
import Hero from "../common/Hero";
import TechnologySlider from "../common/TechnologySlider/TechnologySlider";
import {ThemeContext} from "../themeContext";

function Statistics(props) {
  const themeContext = useContext(ThemeContext);
  const [techStats, setTechStats] = useState([]);
  const [selectedTech, setSelectedTech] = useState([]);

  const [stats, setStats] = useState({
    averageBackgroundColor: ['#00D48B', '#FF7000', '#007DFE', '#FF2E4A'],
    maxBackgroundColor: ['rgba(146,244,210,0.3)', 'rgba(254,197,152,0.3)', 'rgba(152,202,254,0.3)', 'rgba(254,152,166,0.3)'],
  });
  const [salaries, setSalaries] = useState(null);
  const [period, setPeriod] = useState(1);

  useEffect(() => {
    store.getTechnologies();
    store.getAllJobs(50);
    getJobsSalaries().then(sal => {
      setSalaries(sal.items.map(i => {
        return {
          bottom: i.fields.salaryBottom,
          top: i.fields.salaryTop,
          tech: i.fields.technology.fields.name.toLowerCase(),
          expBottom: i.fields.expBottom,
          expTop: i.fields.expTop,
        }
      }));
    })
  }, []);

  function techButtonPressed(tech) {
    return selectedTech.includes(tech.fields.name.toLowerCase());
  }

  function allSelected() {
    return selectedTech.length == technologies.length;
  }

  function selectAll() {
    return setSelectedTech(technologies.map(t => t.fields.name.toLowerCase()));
  }

  function unselectAll() {
    return setSelectedTech([]);
  }

  function handleTechnology(tech) {
    if (allSelected()) {
      setSelectedTech([tech.toLowerCase()]);
    } else {
      if (selectedTech.includes(tech.toLowerCase())) {
        if (selectedTech.length == 1) {
          selectAll();
        } else {
          setSelectedTech(selectedTech.filter(t => t !== tech.toLowerCase()));
        }
      } else {
        setSelectedTech((prevState => [...prevState, tech.toLowerCase()]));
      }
    }
  }

  function handleChartChange(val) {
    if (val === 'yearly') {
      setPeriod(1)
    } else {
      setPeriod(12)
    }
  }

  const arrMax = arr => Math.max(...arr);

  function salariesForTech(jobs, tech) {
    const filteredJobs = jobs.filter(job => job.tech == tech && job.top < 140000 && job.bottom > 10000);
    const avgJobs = filteredJobs.map(job => (job.top + job.bottom) / 2);

    return {
      max: arrMax(filteredJobs.map(job => job.top)) / period, avg: Math.round(arrAvg(avgJobs)) / period
    };
  }

  const {technologies, jobs} = store;

  if (!salaries) {
    return <LinearProgress/>
  }

  return (
    <>
      <TopNav/>
      {!store.currentJob && store.heroImage &&
      <Hero
        heading='Check out tech salaries at German companies'
        description='Compare how different skills are paid and benchmark yourself.'
        heroImage={store.heroImage}
      />
      }
      <div
        className={themeContext.theme === 'dark' ? [style.FilterBar, style.FilterBar_dark].join(' ') : [style.FilterBar, style.FilterBar_light].join(' ')}>
        <Container>
          <div className={style.FilterBar_desktopFilter}>
            <TechnologySlider
              onClick={(evt) => handleTechnology(evt.currentTarget.value)}
              technologies={technologies.map(tech => {
                return {
                  fields: tech.fields,
                  name: tech.fields.name,
                  background: tech.fields.background,
                  iconColor: tech.fields.color,
                  icon: tech.fields.devicon,
                  buttonPressed: techButtonPressed(tech)
                }
              })}
              fullwidth
            />
          </div>
          <ul className={style.FilterBar_mobileFilter}>
            {technologies.map(tech => (
              <li key={tech.fields.name} className={style.FilterBar_mobileFilter_item}>
                <FilterButton
                  onClick={() => handleTechnology(tech.fields.name)}
                  buttonPressed={techButtonPressed(tech)}
                >
                  {tech.fields.name}
                </FilterButton>
              </li>
            ))}
          </ul>
        </Container>
      </div>
      <div
        className={themeContext.theme === 'dark' ? [style.Statistics, style.Statistics_dark].join(' ') : [style.Statistics, style.Statistics_light].join(' ')}>
        <Container>
          <div
            className={themeContext.theme === 'dark' ? [style.Statistics_chart, style.Statistics_chart_dark].join(' ') : [style.Statistics_chart, style.Statistics_chart_light].join(' ')}>
            <div className={style.Statistics_chart_top}>
              <Heading variant='h3'
                       className={themeContext.theme === 'dark' ? [style.Statistics_chart_heading, style.Statistics_chart_heading_dark].join(' ') : [style.Statistics_chart_heading, style.Statistics_chart_heading_light].join(' ')}>
                Salary vs Technology
              </Heading>
              <select
                className={style.Statistics_chart_select}
                onChange={(e) => handleChartChange(e.target.value)}
              >
                <option value='yearly'>
                  Yearly
                </option>
                <option value='monthly'>
                  Monthly
                </option>
              </select>
            </div>
            <BarChart
              labels={selectedTech.map(t => t.toUpperCase())}
              averageData={selectedTech.map(tech => salariesForTech(salaries, tech).avg)}
              maxData={selectedTech.map(tech => salariesForTech(salaries, tech).max)}
              averageBackgroundColor={stats.averageBackgroundColor}
              maxBackgroundColor={stats.maxBackgroundColor}
            />
          </div>
        </Container>
      </div>
    </>
  );
}

Statistics = windowSize(Statistics);

export default Statistics;