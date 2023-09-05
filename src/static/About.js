import React from 'react';
import SwiperCore, {Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

import Container from '../common/Container/Container';
import TopNav from '../common/TopNav/TopNav';
import Heading from '../common/Heading';

import style from './About.module.scss';
import iphoneMockup from '../assets/img/iphone-mockup.png';
import arrowDarkGray from '../assets/img/icons-new-design/arrow--left--dark-gray.svg';
import marcinImg from '../assets/img/marcin.png';
import peterImg from '../assets/img/peter.png';
import mattImg from '../assets/img/matt.png';
import simplicityIcon from '../assets/img/icons-new-design/simplicity.svg';
import transparencyIcon from '../assets/img/icons-new-design/transparency.svg';
import commitmentIcon from '../assets/img/icons-new-design/commitment.svg';

class About extends React.Component {
  render() {
    SwiperCore.use([Pagination]);

    return (
      <div className={style.About}>
        <TopNav/>
        <div className={style.About_banner}>
          <button
            className={style.About_banner_btn}
          >
            <img
              src={arrowDarkGray}
            />
          </button>
          <Container>
            <div className={style.About_banner_cols}>
              <div className={style.About_banner_col}>
                <img className={style.About_banner_img} src={iphoneMockup} alt=""/>
              </div>
              <div className={style.About_banner_col}>
                <Heading
                    variant='h1'
                    className={style.About_banner_heading}
                >
                  One Job Board for all things Tech ❤️
                </Heading>
              </div>
            </div>
          </Container>
        </div>
        <Container>
          <div className={style.About_story}>
            <Heading
              variant='h3'
              className={style.About_heading}
            >
              About us
            </Heading>
            <p className={style.About_heading}>
              We are building Germany’s most developer-friendly and transparent Job Board. JobsForIT was founded to
              improve the experience of finding tech Jobs, making the process simple, fun, and straight-forward.
            </p>
            <p className={style.About_heading}>
              At JobsforIT we help tech talents to find and compare great jobs and IT gigs. We consult employers to be
              clear and transparent in their job offers by providing salary levels and required tech stack for every job
              ad.
            </p>
            <div className={style.About_story}>
              <Heading
                variant='h3'
                className={style.About_heading}
              >
                Our claim
              </Heading>
              <p className={style.About_heading}>
                We create the best job search experience tailored for digital talents in Germany.
              </p>
              <Heading
                variant='h3'
                className={style.About_heading}
              >
                Our mission
              </Heading>
              <p className={style.About_heading}>
                Our mission is to build a community of tech-minded people, providing not only the best selection of
                developer job offers but also useful dev content and hacks for everyday challenges.
                Come on board and join us 😊
              </p>
              <Heading
                variant='h3'
                className={style.About_heading}
              >
                Our story
              </Heading>
              <ol className={style.About_story_list}>
                <li className={style.About_story_list_item}>
                  <p className={style.About_story_list_item_date}>
                    <span>2019</span>
                    <br/>
                    <span className={style.About_story_list_item_date_month}>August</span>
                  </p>
                  <div className={style.About_story_list_item_tab}>
                    <p className={style.About_story_list_item_description}>
                      Idea was born
                    </p>
                    <p>
                      There was no tech-friendly job portal on the German market that we liked. So we decided to build one. In an indie-way.
                    </p>
                  </div>
                </li>
                <li className={style.About_story_list_item}>
                  <p className={style.About_story_list_item_date}>
                    <span>2019</span>
                    <br/>
                    <span className={style.About_story_list_item_date_month}>December</span>
                  </p>
                  <div className={style.About_story_list_item_tab}>
                    <p className={style.About_story_list_item_description}>
                      Family & Friends launch.
                    </p>
                    <p>
                      First rough clickable version of JobsForIT is live. We collect user feedback and start iterating on improvements.
                    </p>
                  </div>
                </li>
                <li className={style.About_story_list_item}>
                  <p className={style.About_story_list_item_date}>
                    <span>2020</span>
                    <br/>
                    <span className={style.About_story_list_item_date_month}>July</span>
                  </p>
                  <div className={style.About_story_list_item_tab}>
                    <p className={style.About_story_list_item_description}>
                      Numbers grow.
                    </p>
                    <p>
                      We hit 100k of total views, got covered by German tech youtubers and we list over 500 hand-picked jobs.
                    </p>
                  </div>
                </li>
                <li className={style.About_story_list_item}>
                  <p className={style.About_story_list_item_date}>
                    <span>2021</span>
                    <br/>
                    <span className={style.About_story_list_item_date_month}>September</span>
                  </p>
                  <div className={style.About_story_list_item_tab}>
                    <p className={style.About_story_list_item_description}>
                      Re-launch with new design.
                    </p>
                    <p>
                      We completely refurbished our UX & UI to make it even more user-friendly and added some cool new features like Stats.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </Container>
        <div className={style.About_team}>
          <Container>
            <Heading
              variant='h3'
              className={style.About_heading}
            >
              Our crew
            </Heading>
          </Container>
          <div className={style.About_team_members}>
            <Container>
              <Swiper
                spaceBetween={24}
                slidesPerView={'auto'}
                centeredSlides={true}
                pagination={{
                  clickable: true,
                  dynamicBullets: true
                }}
                className={['swiper-align-center', 'swiper-fade', style.About_team_members_slider].join(' ')}
              >
                <SwiperSlide
                  className={style.About_team_members_slide}
                >
                  <div className={style.About_team_member}>
                    <img
                      src={marcinImg}
                      className={style.About_team_member_img}
                    />
                    <p className={style.About_team_member_name}>
                      Marcin
                    </p>
                    <p className={style.About_team_member_role}>
                      Product
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide
                  className={style.About_team_members_slide}
                >
                  <div className={style.About_team_member}>
                    <img
                      src={peterImg}
                      className={style.About_team_member_img}
                    />
                    <p className={style.About_team_member_name}>
                      Peter
                    </p>
                    <p className={style.About_team_member_role}>
                      Technology
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide
                  className={style.About_team_members_slide}
                >
                  <div className={style.About_team_member}>
                    <img
                      src={mattImg}
                      className={style.About_team_member_img}
                    />
                    <p className={style.About_team_member_name}>
                      Matt
                    </p>
                    <p className={style.About_team_member_role}>
                      Business Development
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className={style.About_team_desktopMembers}>
                <div className={style.About_team_member}>
                  <img
                    src={marcinImg}
                    className={style.About_team_member_img}
                  />
                  <p className={style.About_team_member_name}>
                    Marcin
                  </p>
                  <p className={style.About_team_member_role}>
                    Product
                  </p>
                </div>
                <div className={style.About_team_member}>
                  <img
                    src={peterImg}
                    className={style.About_team_member_img}
                  />
                  <p className={style.About_team_member_name}>
                    Peter
                  </p>
                  <p className={style.About_team_member_role}>
                    Technology
                  </p>
                </div>
                <div className={style.About_team_member}>
                  <img
                    src={mattImg}
                    className={style.About_team_member_img}
                  />
                  <p className={style.About_team_member_name}>
                    Matt
                  </p>
                  <p className={style.About_team_member_role}>
                    Business Development
                  </p>
                </div>
              </div>
            </Container>
          </div>
        </div>
        <Container>
          <div className={style.About_values}>
            <Heading
              variant='h3'
              className={style.About_heading}
            >
              Our core values
            </Heading>
            <ul className={style.About_values_boxes}>
              <li className={style.About_values_box}>
                <div className={style.About_values_box_iconWrapper}>
                  <img
                    src={simplicityIcon}
                    className={style.About_values_box_icon}
                  />
                </div>
                <p className={style.About_values_box_heading}>
                  Simplicity
                </p>
                <p className={style.About_values_box_description}>
                  No lengthy registration process or overloaded job descriptions.
                  <br />
                  <br />
                  We only publish clear and easily comparable job ads saving your time and energy.
                </p>
              </li>
              <li className={style.About_values_box}>
                <div className={style.About_values_box_iconWrapper}>
                  <img
                    src={transparencyIcon}
                    className={style.About_values_box_icon}
                  />
                </div>
                <p className={style.About_values_box_heading}>
                  Transparency
                </p>
                <p className={style.About_values_box_description}>
                  Out Job Board  publishes salary information in every job posting.
                  <br />
                  <br />
                  This way candidates know one of the main criteria already before the interview process starts.
                </p>
              </li>
              <li className={style.About_values_box}>
                <div className={style.About_values_box_iconWrapper}>
                  <img
                    src={commitmentIcon}
                    className={style.About_values_box_icon}
                  />
                </div>
                <p className={style.About_values_box_heading}>
                  Commitment
                </p>
                <p className={style.About_values_box_description}>
                  We develop partnerships that make a positive difference in our customers' lives.
                  <br />
                  <br />
                  For both user groups: IT companies and tech candidates searching for their dream job.
                </p>
              </li>
            </ul>
          </div>
          <div className={style.About_socials}>
            <Heading
              variant='h3'
              className={style.About_heading}
            >
              Social Media
            </Heading>
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fjobsforit.de%2F&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=270346260934945"
              width="500"
              height="500"
              scrolling="no"
              frameBorder="0"
              allowFullScreen="true"
              style={{
                border: 'none',
                overflow: 'hidden',
                maxWidth: '100%'
              }}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"/>
          </div>
        </Container>
      </div>
  );
  }
  }

  export default About;