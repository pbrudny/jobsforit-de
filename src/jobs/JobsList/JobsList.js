import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Job from "../Job/Job";
import JobItem from "../JobItem/JobItem";
import ZeroJobs from "../ZeroJobs/ZeroJobs";
import history from "../../history";
import windowSize from 'react-window-size';
import {observer} from "mobx-react";
import store from '../../stores/store';
import Loader from '../../common/Loader';
import InfiniteScroll from "react-infinite-scroll-component";
import style from './style.module.scss';
import Container from '../../common/Container/Container';
import Heading from '../../common/Heading';
import SearchStatistics from "../../common/SearchStatistics/SearchStatistics";
import NumberFormat from "react-number-format";
import {ThemeContext} from "../../themeContext";

class JobsList extends Component {
  constructor(props) {
    super(props);
    this.jobClicked = this.jobClicked.bind(this)
  }

  state = {
    displayJob: true
  }

  fetchMoreData = () => {
    store.getMoreJobs(10).then(()=> {
      console.log('have more jobs: ', store.jobs.length);
    })
  };

  listStyle(jobSelected, slug, windowWidth) {
    if (jobSelected) {
      if (!!slug) {
        return {width: 40 + '%', transform: 'translate('+ -windowWidth * 0.2 + 'px, 0px)' }
      }
      return { width: 40 + '%' }
    } else if (store.allJobsLoaded) {
      return { width: 70 + '%' }
    } else {
      return { width: 100 + '%' }
    }
  }

  isSelected(jobId) {
    const currentJobId = store.currentJobId;
    if (currentJobId) {
      return currentJobId === jobId;
    }
  }

  borderColor(job) {
    return { borderLeft: 'solid ' + job.fields.technology.fields.color }
  }

  adjustedTime(job) {
    if (job.fields.dateDisplayed) {
      return Date.parse(job.fields.dateDisplayed);
    }
    return Date.parse(job.sys.createdAt);
  }

  jobClicked(jobId, job, jobs) {
    this.setState({displayJob: true});
    store.fromUrl = false;
    if (!store.currentJobId) {
      //main list
      store.getFullJob(job.fields.slug);
      const slugs = jobs.map(j => j.fields.slug);
      const clickedIndex = store.clickedIndex = slugs.indexOf(job.fields.slug);
    }
    store.currentJobId = jobId;

    if (!!job.fields.slug) {
      store.getFullJob(job.fields.slug);
      history.push('/jobs/' + job.fields.slug);
    }
  }

  displayJobs(jobs, currentJob, fromUrl) {
    let clickedIndex = store.clickedIndex;
    if (fromUrl && currentJob) {
      const slugs = jobs.map(j => j.fields.slug);
      clickedIndex = slugs.indexOf(currentJob.fields.slug);
    }

    const displayJobs = currentJob && store.allTechnologies ? jobs.slice(clickedIndex, clickedIndex + 200) : jobs;

    if (store.loadingMore && store.useCase === 'loadingAllForFiltering') {
      return (
        <Container>
          <div className={style.JobsList} 
          style={{
            display: 'flex',
            justifyContent: 'center',
            minHeight: '100vh'
          }}>
            <Loader/>
          </div>
        </Container>
      )
    }

    if (currentJob) {
      return (<>
        <div className={style.JobsList_list}>
          { displayJobs.map((job) => (
            <JobItem
              key={job.sys.id}
              selected={this.isSelected(job.sys.id)}
              style={this.borderColor(job)}
              onClick={() => this.jobClicked(job.sys.id, job, jobs)}
              job={job}
              currentJob={currentJob}
              date={this.adjustedTime(job)}
              singleJob
            />
          ))}
        </div>
      </>
      )
    } else if (jobs.length > 0 ) {
      return (
        <div className={style.JobsList_list}>
          <InfiniteScroll
            style={{overflow: 'unset'}}
            dataLength={displayJobs.length}
            next={this.fetchMoreData}
            hasMore={!store.allJobsLoaded}
            loader={
            <div style={{display: 'flex', justifyContent: 'center', padding: '32px 0'}}>
              <Loader />
            </div>
          }
          >
            { displayJobs.map((job) => (
              <JobItem
                key={job.sys.id}
                selected={this.isSelected(job.sys.id)}
                style={this.borderColor(job)}
                onClick={() => this.jobClicked(job.sys.id, job, jobs)}
                job={job}
                currentJob={currentJob}
                date={this.adjustedTime(job)}
              />
            ))}
          </InfiniteScroll>
        </div>
      )
    }
  }

  onJobCloseHandler = () => {
    store.currentJob = null;
    store.fromUrl = false;
    this.setState({displayJob: false});
  }

  render() {
    const {
      classes,
      t,
      jobs,
      windowWidth
    } = this.props;
    const styles = [style.JobsList];

    const themeContext = this.context;

    if(themeContext.theme === 'dark') {
      styles.push(style.JobsList__dark);
    } else {
      styles.push(style.JobsList__light);
    }

    const currentJob = store.currentJob;
    const currentSlug = store.currentSlug;

    if (!currentJob && store.loading) {
      return (
        <Container>
          <div className={styles.join(' ')}
          style={{
            display: 'flex',
            justifyContent: 'center',
            padding: '64px 0',
            minHeight: '100vh'
          }}>
            <Loader/>
          </div>
        </Container>
      )
    }

    if (jobs.length === 0 && store.loading) {
      return (
        <Container>
          <div className={styles.join(' ')}
          style={{
            display: 'flex',
            justifyContent: 'center',
            padding: '64px 0',
            minHeight: '100vh'
          }}>
            <Loader/>
          </div>
        </Container>
      )
    }

    if (jobs.length === 0 && !store.loading && !store.fromUrl) {
      return (
        <ZeroJobs />
      )
    }

    if(!!currentJob || store.loading) {

      const jobColumnClasses = [style.JobsList_columnSingleJob];

      if(!this.state.displayJob) {
        jobColumnClasses.push(style.JobsList_columnSingleJob__hidden)
      }

      return(
        <Container className={style.JobsList_fullWidthContainer}>
          <div className={[...styles, style.JobsList__fullHeight].join(' ')}>
            <div className={style.JobsList_columns}>
              <div className={style.JobsList_columnJobsList}>
                {this.displayJobs(jobs, currentJob, store.fromUrl)}
              </div>
              <div 
              className={jobColumnClasses.join(' ')}
              >
                {!store.loading &&
                  <Job
                    job={store.currentJob}
                    jobId={store.currentJobId}
                    windowWidth={windowWidth}
                    onJobClose={this.onJobCloseHandler}
                  />
                }
                {store.loading &&
                  <div className={style.JobsList_columnSingleJob_loader}>
                    <Loader/>
                  </div>
                }
              </div>
            </div>
          </div>
        </Container>
      );
    }

    return (
      <Container>
        <div className={styles.join(' ')}>
          {!currentJob && store.allJobsLoaded &&
          <div className={style.JobsList_top}>
            <SearchStatistics
                items={[
                  {
                    label: 'search results',
                    value: jobs.length
                  },
                  {
                    label: 'med. salary',
                    value: <NumberFormat
                        value={store.medianSalary}
                        displayType={"text"}
                        thousandSeparator={"."}
                        decimalSeparator={","}
                        prefix={'€'}
                    />
                  },
                  {
                    label: 'max. salary',
                    value: <NumberFormat
                        value={store.maxTopSalary}
                        displayType={"text"}
                        thousandSeparator={"."}
                        decimalSeparator={","}
                        prefix={'€'}
                    />
                  }
                ]}
            />
          </div>
          }
          {this.displayJobs(jobs, currentJob, store.fromUrl)}
        </div>
      </Container>
    );
  }
}

JobsList.propTypes = {
  classes: PropTypes.object,
  jobs: PropTypes.array.isRequired,
};
JobsList.contextType = ThemeContext;
JobsList = observer(JobsList);
JobsList = windowSize(JobsList);
export default JobsList;
