import React from 'react';
import { Link } from 'react-router-dom';

import style from './MeetupItem.module.scss';

class MeetupItem extends React.Component {
  render() {
    return(
      <Link to='/meetup' className={style.MeetupItem}>
        <div className={style.MeetupItem_top}>
          <span className={style.MeetupItem_label}>Free</span>
          <p className={style.MeetupItem_date}>
            14th July 2020
          </p>
          <p className={style.MeetupItem_type}>
            Webinar
          </p>
        </div>
        <h3 className={style.MeetupItem_heading}>
          Meetup Title- Lorem Ipsum dolor sit amet, consectetur
        </h3>
        <p className={style.MeetupItem_details}>Speaker: Kevin Brown, CEO- ABC Company </p>
      </Link>
    )
  }
}

export default MeetupItem;