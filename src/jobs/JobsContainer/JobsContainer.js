import React, {Component} from 'react';
import store from '../../stores/store';
import {observer} from "mobx-react";
import TopNav from "../../common/TopNav/TopNav";
import FilterBar from "../../common/FilterBar/FilterBar";
import JobsList from "../JobsList/JobsList";
import Hero from "../../common/Hero";
import {toJS} from "mobx";

class JobsContainer extends Component {
  state = {
    confetti: false,
    loadingResult: null
  };

  componentDidMount() {
    const tech = this.props.match.params.tech;
    const city = this.props.match.params.city;
    const slug = this.props.match.params.id;

    store.getCities();
    store.getHeroImage();
    store.currentJob = null;

    store.getTechnologies();

    if (slug) {
      this.setState({loadingResult: store.showJobFromUrl(decodeURIComponent(slug))});
      store.getJobsFromUrl();

    } else if (tech && city) {
      let selectedTech;
      if (tech) {
        if (tech === 'all') {
          store.allTechnologies = true;
        } else {
          store.allTechnologies = false;
          selectedTech = tech.split(',');
        }
        store.filtering = true;
      }

      let remoteLevel;
      if (city && city === 'remote') {
        remoteLevel = true
      }

      store.getJobsFromUrlFiltered(selectedTech, remoteLevel);

    } else if (tech && !city) {
      let selectedTech;
      if (tech === 'all') {
        store.allTechnologies = true;
      } else {
        store.allTechnologies = false;
        selectedTech = tech.split(',');
      }
      store.filtering = true;
      store.getJobsFromUrlTechFiltered(selectedTech);

    } else {
      store.getAllJobs(10, 0);
    }
  }

  componentDidUpdate() {
    window.onpopstate = (e) => {
      store.resetCurrentJob();
      store.mobileBar = null;
    }
  }

  cleanCurrentJob() {
    store.currentJobId = null;
    store.currentJob = null;
  }

  render() {
    const {jobs, heroImage} = store;
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
        <TopNav
          onHamburgerClick={this.sideNavToggleHandler}
        />
        {!store.currentJob && heroImage &&
        <Hero
          heading='IT jobs with salaries in&nbsp;Germany.'
          description={description}
          heroImage={heroImage}
        />
        }
        <FilterBar/>
        <JobsList jobs={jobs}/>
      </>
    )
  }
}

JobsContainer = observer(JobsContainer);
export default JobsContainer;
