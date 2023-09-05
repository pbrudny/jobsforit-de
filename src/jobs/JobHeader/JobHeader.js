import React from "react";
import style from "./style.module.scss";
import SalaryRange from "../../common/SalaryRange/SalaryRange";

import {ReactComponent as BuildingIcon} from '../../assets/img/icons-new-design/building.svg';
import {ReactComponent as PeopleIcon} from '../../assets/img/icons-new-design/people.svg';
import {ReactComponent as SchoolOutlineIcon} from '../../assets/img/icons-new-design/school-outline.svg';
import {ReactComponent as FileIcon} from '../../assets/img/icons-new-design/file.svg';

function JobHeader(props) {
    const classes = [style.JobHeader];

    if(props.theme === 'dark') {
        classes.push(style.JobHeader_dark);
    } else {
        classes.push(style.JobHeader_light);
    }

    return (
        <div className={classes.join(' ')}>
            <div className={style.JobHeader__top}>
                <div
                    className={style.JobHeader__imgWrapper}
                >
                    <img
                        className={style.JobHeader__img}
                        src={props.logo}
                        alt="logo"
                    />
                </div>
                <div
                    className={style.JobHeader__content}
                >
                    <div>
                        <h1 className={style.JobHeader__heading}>{props.name}</h1>
                        <p className={style.JobHeader__detail}>
                            <a href={props.companyWebsite} target='_blank'>
                                {props.companyName}
                            </a>
                        </p>
                        <p className={style.JobHeader__detail}>
                            {props.location}
                        </p>
                        <p className={style.JobHeader__salary}>
                            <SalaryRange className={style.JobHeader__salaryRange} job={props.job}/>
                        </p>
                    </div>
                </div>
            </div>
            <ul className={style.JobHeader__list}>
                <li className={style.JobHeader__listItem}>
                    <div className={style.JobHeader__listItemIcon}>
                        <BuildingIcon />
                    </div>
                    <p className={style.JobHeader__listItemName}>{props.industry}</p>
                </li>
                <li className={style.JobHeader__listItem}>
                    <div className={style.JobHeader__listItemIcon}>
                        <PeopleIcon />
                    </div>
                    <p className={style.JobHeader__listItemName}>{props.companySize}</p>
                </li>
                <li className={style.JobHeader__listItem}>
                    <div className={style.JobHeader__listItemIcon}>
                        <SchoolOutlineIcon />
                    </div>
                    <p className={style.JobHeader__listItemName}>{props.experience}</p>
                </li>
                <li className={style.JobHeader__listItem}>
                    <div className={style.JobHeader__listItemIcon}>
                        <FileIcon />
                    </div>
                    <p className={style.JobHeader__listItemName}>{props.agreementType}</p>
                </li>
            </ul>
        </div>
    );
}

export default JobHeader;