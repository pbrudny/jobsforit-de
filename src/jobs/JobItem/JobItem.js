import React, {Component} from "react";
import PropTypes from 'prop-types';
import {daysAgo} from "../../common/helpers";
import SalaryRange from "../../common/SalaryRange/SalaryRange";
import {isMobile} from "react-device-detect";


import {ReactComponent as RocketIcon} from '../../assets/img/icons-new-design/rocket.svg';
import {ReactComponent as PinIcon} from '../../assets/img/icons-new-design/pin.svg';

import style from './style.module.scss';
import {ThemeContext} from "../../themeContext";

class JobItem extends Component {
  jobTags(job) {
    if (job.fields.mustHave) {
      return job.fields.mustHave.slice(0, 3).map((tag) => {
        return (
          <li className={style.JobItem_tag} key={`${job.sys.id}-${tag}`}>
            {tag}
          </li>)
      })
    }
  }

  remoteLevel(level) {
    let message;
    let background;
    if (level === 1) {
      message = 'online interview';
      background = '#d8d92f';
    } else if (level === 2) {
      message = 'remote';
      background = '#ffb74d';
    } else if (level === 3) {
      message = 'remote 100%';
      background = '#d94e87';
    }

    return (
      <span
        style={{
          color: 'white',
          background: background,
          margin: '0 0 0 4px',
          padding: '3px 7px 3px 7px',
          borderRadius: '7px',
          whiteSpace: 'nowrap',
          fontWeight: '400',
          lineHeight: '11px',
        }}
      >
        {message}
      </span>
    )
  }

  render() {
    const themeContext = this.context;
    const {selected, classes, job} = this.props;
    const styles = [style.JobItem];

    if (themeContext.theme === 'dark') {
      styles.push(style.JobItem__dark);
    } else {
      styles.push(style.JobItem__light);
    }

    if (this.props.singleJob) {
      styles.push(style.JobItem__singleJob);
    }

    if (selected) {
      if (themeContext.theme === 'dark') {
        styles.push(style.JobItem__selectedItemDark);
      } else {
        styles.push(style.JobItem__selectedItemLight);
      }
    }

    return (
      <article
        className={styles.join(' ')}
        data-cy={"job"}
        onClick={this.props.onClick}
      >
        {selected &&
        <span className={style.JobItem_bar} style={{backgroundColor: job.fields.technology.fields.color}}/>}
        <div
          className={style.JobItem_imgWrapper}
        >
          <img
            className={style.JobItem_img}
            src={job.fields.company.fields.logo.fields ? job.fields.company.fields.logo.fields.file.url : ''}
            alt="logo"
          />
        </div>
        <div
          className={style.JobItem_content}
        >
          <div className={style.JobItem_leftContent}>
            <div>
              <h1 className={style.JobItem_heading}>
                                <span className={style.JobItem_headingText}>
                                    {job.fields.position}
                                </span>
                {job.fields.displayPriority &&
                <span className={style.JobItem_hotLabel}>
                                    🔥 HOT
                                </span>
                }
              </h1>
              <ul className={style.JobItem_detailsList}>
                <li className={style.JobItem_detailsItem}>
                                    <span className={style.JobItem_detailsItemIcon}>
                                        <RocketIcon/>
                                    </span>
                  <span>{job.fields.company ? job.fields.company.fields.name : ""}</span>
                </li>
                <li className={style.JobItem_detailsItem}>
                                    <span className={style.JobItem_detailsItemIcon}>
                                        <PinIcon/>
                                    </span>
                  <span>{job.fields.city && job.fields.city.fields.name}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className={style.JobItem_rightContent}>
            <div className={style.JobItem_salaryWrapper}>
              <p className={style.JobItem_salary}>
                <SalaryRange job={job} short={true}/>
              </p>
              {daysAgo(this.props.date) === 'new' ?
                <span
                  className={style.JobItem_newLabel}
                >
                                    {daysAgo(this.props.date)}
                                </span>
                :
                <span
                  className={style.JobItem_time}>
                                {daysAgo(this.props.date)}
                                </span>
              }
            </div>
            <ul className={style.JobItem_tags}>
              {this.jobTags(job)}
            </ul>
          </div>
        </div>
      </article>
    );
  }
}

JobItem.contextType = ThemeContext;

JobItem.propTypes = {
  selected: PropTypes.any,
  classes: PropTypes.any,
  style: PropTypes.shape({borderLeft: PropTypes.any}),
  onClick: PropTypes.func,
  job: PropTypes.any,
  currentJob: PropTypes.any,
  date: PropTypes.any
};

export default JobItem;
