import React from 'react';

import TopNav from '../common/TopNav/TopNav';
import Heading from '../common/Heading';
import Message from '../common/Message';
import Container from '../common/Container/Container';
import Button from '../common/Button/Button';

import style from './EduRoom.module.scss';
import staticStyle from '../static/Static.module.scss';

import eduRoomImg1 from '../assets/img/edu-room-img--1.svg';
import eduRoomImg2 from '../assets/img/edu-room-img--2.svg';
import eduRoomImg3 from '../assets/img/edu-room-img--3.svg';
import arrowLeftDarkGray from '../assets/img/icons-new-design/arrow--left--dark-gray.svg';

class EduRoom extends React.Component {
  render() {
    return(
      <>
        <TopNav />
        <div className={[staticStyle.Static, staticStyle.Static__gray, style.EduRoom].join(' ')}>
          <Container>
            <div className={staticStyle.Static_top}>
              <button className={staticStyle.Static_top_btn}>
                <img
                  src={arrowLeftDarkGray}
                />
              </button>
            </div>
            <div className={style.EduRoom_top}>
              <Heading 
              variant='h1'
              className={style.EduRoom_heading}
              >
                Edu-Room
              </Heading>
              <Message long>
                Let's learn something new today!
                <br/>
                Where do you want to start?
              </Message>
            </div>
            <ul className={style.EduRoom_items}>
              <li className={style.EduRoom_item}>
                <div className={style.EduRoom_item_group}>
                  <img 
                  src={eduRoomImg1}
                  className={style.EduRoom_item_img}
                  />
                </div>
                <div className={style.EduRoom_item_group}>
                  <Heading
                  variant='h2'
                  className={style.EduRoom_item_heading}
                  >
                    Tutorials
                  </Heading>
                  <p className={style.EduRoom_item_description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices convallis leo et viverra. Morbi mLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices convallis leo et viverra. Morbi m
                  </p>
                  <Button 
                  href='/tutorials'
                  variant='primary'
                  >
                    Explore
                  </Button>
                </div>
              </li>
              <li className={style.EduRoom_item}>
                <div className={style.EduRoom_item_group}>
                  <img 
                  src={eduRoomImg2}
                  className={style.EduRoom_item_img}
                  />
                </div>
                <div className={style.EduRoom_item_group}>
                  <Heading
                  variant='h2'
                  className={style.EduRoom_item_heading}
                  >
                    Meetups
                  </Heading>
                  <p className={style.EduRoom_item_description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices convallis leo et viverra. Morbi mLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices convallis leo et viverra. Morbi m
                  </p>
                  <Button 
                  href='/meetups'
                  variant='primary'>
                    Explore
                  </Button>
                </div>
              </li>
              <li className={style.EduRoom_item}>
                <div className={style.EduRoom_item_group}>
                  <img 
                  src={eduRoomImg3}
                  className={style.EduRoom_item_img}
                  />
                </div>
                <div className={style.EduRoom_item_group}>
                  <Heading
                  variant='h2'
                  className={style.EduRoom_item_heading}
                  >
                    Study Material
                  </Heading>
                  <p className={style.EduRoom_item_description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices convallis leo et viverra. Morbi mLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices convallis leo et viverra. Morbi m
                  </p>
                  <Button 
                  href='/study-material'
                  variant='primary'>
                    Explore
                  </Button>
                </div>
              </li>
            </ul>
          </Container>
        </div>
      </>
    );
  }
}

export default EduRoom;