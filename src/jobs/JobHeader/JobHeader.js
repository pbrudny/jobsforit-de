import React from "react";
import style from "./style.module.scss";
import SalaryRange from "../../common/SalaryRange/SalaryRange";

import { ReactComponent as BuildingIcon } from '../../assets/img/icons-new-design/building.svg';
import { ReactComponent as PeopleIcon } from '../../assets/img/icons-new-design/people.svg';
import { ReactComponent as SchoolOutlineIcon } from '../../assets/img/icons-new-design/school-outline.svg';
import { ReactComponent as FileIcon } from '../../assets/img/icons-new-design/file.svg';

function JobHeader({
                       theme,
                       logo,
                       name,
                       companyWebsite,
                       companyName,
                       location,
                       job,
                       industry,
                       companySize,
                       experience,
                       agreementType
                   }) {
    const classes = [style.JobHeader];

    if (theme === 'dark') {
        classes.push(style.JobHeader_dark);
    } else {
        classes.push(style.JobHeader_light);
    }

    return (
      <div className={classes.join(' ')}>
          <div className={style.JobHeader__top}>
              <div className={style.JobHeader__imgWrapper}>
                  <img className={style.JobHeader__img} src={logo} alt="logo" />
              </div>
              <div className={style.JobHeader__content}>
                  <div>
                      <h1 className={style.JobHeader__heading}>{name}</h1>
                      <p className={style.JobHeader__detail}>
                          <a href={companyWebsite} target='_blank' rel="noopener noreferrer">
                              {companyName}
                          </a>
                      </p>
                      <p className={style.JobHeader__detail}>
                          {location}
                      </p>
                      <p className={style.JobHeader__salary}>
                          <SalaryRange className={style.JobHeader__salaryRange} job={job} />
                      </p>
                  </div>
              </div>
          </div>
          <ul className={style.JobHeader__list}>
              <li className={style.JobHeader__listItem}>
                  <div className={style.JobHeader__listItemIcon}>
                      <BuildingIcon />
                  </div>
                  <p className={style.JobHeader__listItemName}>{industry}</p>
              </li>
              <li className={style.JobHeader__listItem}>
                  <div className={style.JobHeader__listItemIcon}>
                      <PeopleIcon />
                  </div>
                  <p className={style.JobHeader__listItemName}>{companySize}</p>
              </li>
              <li className={style.JobHeader__listItem}>
                  <div className={style.JobHeader__listItemIcon}>
                      <SchoolOutlineIcon />
                  </div>
                  <p className={style.JobHeader__listItemName}>{experience}</p>
              </li>
              <li className={style.JobHeader__listItem}>
                  <div className={style.JobHeader__listItemIcon}>
                      <FileIcon />
                  </div>
                  <p className={style.JobHeader__listItemName}>{agreementType}</p>
              </li>
          </ul>
      </div>
    );
}

export default JobHeader;
