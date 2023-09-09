import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { observer } from "mobx-react";
import store from '../../stores/store';
import TopNav from "../../common/TopNav/TopNav";
import FilterBar from "../../common/FilterBar/FilterBar";
import JobsList from "../JobsList/JobsList";
import Hero from "../../common/Hero";

const JobsContainer = (props) => {
  const [confetti, setConfetti] = useState(false);
  const [loadingResult, setLoadingResult] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const { tech, city, slug } = props.match.params;

    store.getCities();
    store.getHeroImage();
    store.currentJob = null;
    store.getTechnologies();

    if (slug) {
      setLoadingResult(store.showJobFromUrl(decodeURIComponent(slug)));
      store.getJobsFromUrl();
    } else if (tech && city) {
      handleTechAndCity(tech, city);
    } else if (tech && !city) {
      handleTechOnly(tech);
    } else {
      store.getAllJobs(10, 0);
    }

    window.onpopstate = () => {
      store.resetCurrentJob();
      store.mobileBar = null;
    };

    return () => {
      // Cleanup event listeners
      window.onpopstate = null;
    };
  }, []);

  const handleTechAndCity = (tech, city) => {
    let selectedTech;
    if (tech === 'all') {
      store.allTechnologies = true;
    } else {
      store.allTechnologies = false;
      selectedTech = tech.split(',');
    }
    store.filtering = true;

    let remoteLevel;
    if (city === 'remote') {
      remoteLevel = true;
    }

    store.getJobsFromUrlFiltered(selectedTech, remoteLevel);
  };

  const handleTechOnly = (tech) => {
    let selectedTech;
    if (tech === 'all') {
      store.allTechnologies = true;
    } else {
      store.allTechnologies = false;
      selectedTech = tech.split(',');
    }
    store.filtering = true;
    store.getJobsFromUrlTechFiltered(selectedTech);
  };

  const cleanCurrentJob = () => {
    store.currentJobId = null;
    store.currentJob = null;
  };

  const sideNavToggleHandler = () => {
    store.mobileBar = !store.mobileBar;
  };

  const description = (
    <>
      Dev-specific filter job search.
      <br/>
      <br/>
      Salary estimates.
      <br/>
      <br/>
      Structured job ad design.
    </>
  );

  return (
    <>
      <TopNav onHamburgerClick={sideNavToggleHandler} />
      {!store.currentJob && store.heroImage && (
        <Hero
          heading='IT jobs with salaries in&nbsp;Germany.'
          description={description}
          heroImage={store.heroImage}
        />
      )}
      <FilterBar />
      <JobsList jobs={store.jobs} />
    </>
  );
};

export default observer(JobsContainer);
