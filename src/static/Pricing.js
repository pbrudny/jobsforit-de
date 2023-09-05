import React from 'react';
import SwiperCore, {Pagination, Navigation} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/navigation/navigation.scss';

import Container from '../common/Container/Container';
import TopNav from '../common/TopNav/TopNav';
import Heading from '../common/Heading';
import PricingTableItem from './PricingTableItem';

import staticStyle from './Static.module.scss';
import style from './Pricing.module.scss';

import arrowLeftDarkGray from '../assets/img/icons-new-design/arrow--left--dark-gray.svg';
import ourPartnersLogo from '../assets/img/our-partners-logo.svg';
import pricingTestimonialsImg from '../assets/img/temp-pricing-testimonials.png';
import history from "../history";

class Pricing extends React.Component {

  state = {
    accordionItems: [
      {
        title: 'What is the complete Job posting process?',
        bulletList: [
          {
            title: 'Choose from one of our plans',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices convallis leo et viverra'
          },
          {
            title: 'Choose from one of our plans',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices convallis leo et viverra'
          },
          {
            title: 'Choose from one of our plans',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices convallis leo et viverra'
          },
          {
            title: 'Choose from one of our plans',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices convallis leo et viverra'
          }
        ],
        isActive: false
      },
      {
        title: 'What is the complete Job posting process?',
        bulletList: [
          {
            title: 'Choose from one of our plans',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices convallis leo et viverra'
          },
          {
            title: 'Choose from one of our plans',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices convallis leo et viverra'
          },
          {
            title: 'Choose from one of our plans',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices convallis leo et viverra'
          },
          {
            title: 'Choose from one of our plans',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices convallis leo et viverra'
          }
        ],
        isActive: false
      },
      {
        title: 'What is the complete Job posting process?',
        bulletList: [
          {
            title: 'Choose from one of our plans',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices convallis leo et viverra'
          },
          {
            title: 'Choose from one of our plans',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices convallis leo et viverra'
          },
          {
            title: 'Choose from one of our plans',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices convallis leo et viverra'
          },
          {
            title: 'Choose from one of our plans',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices convallis leo et viverra'
          }
        ],
        isActive: false
      }
    ]
  }

  toggleAccordionItem(index) {
    const accordionItems = [...this.state.accordionItems];
    accordionItems[index].isActive = !accordionItems[index].isActive;
    this.setState({accordionItems: accordionItems});
  }

  handlePlanClick() {
    const email ="hello@jobsforit.de";
    window.location.href = "mailto:"+email+"?subject=I want to post a new job";
    // history.push('/add-job');
  }

  render() {
    SwiperCore.use([Pagination, Navigation]);
    return (
      <>
        <TopNav/>
        <div className={[staticStyle.Static, style.Pricing].join(' ')}>
          <Container>
            <div className={staticStyle.Static_top}>
              <button className={staticStyle.Static_top_btn}>
                <img
                  src={arrowLeftDarkGray}
                />
              </button>
            </div>
            <div className={style.Pricing_top}>
              <Heading variant='h1' className={style.Pricing_heading}>
                Find digital talent and
                <br/>
                boost your company
              </Heading>
              <p className={style.Pricing_description}>People are the most important part of every firm. We help you
                reach the right developers in Germany!</p>
            </div>
            <Heading variant='h2' className={style.Pricing_sectionHeading}>
              Choose the best plan for you
            </Heading>
          </Container>
          <div className={style.Pricing_plans}>
            <Container>
              <Swiper
                spaceBetween={24}
                slidesPerView={'auto'}
                centeredSlides={true}
                pagination={{
                  clickable: true,
                  dynamicBullets: true
                }}
                className={[style.Pricing_plans_slider, 'swiper-align-center'].join(' ')}
              >
                <SwiperSlide
                  className={style.Pricing_plans_slide}
                >
                  <PricingTableItem
                    bordered
                    planName='Premium+'
                    normalPrice='€250'
                    promoPrice='€200'
                    promoText='You save €50!'
                    bulletList={[
                      'Job Offer 60 days listed',
                      'Visualization with Company Logo & Technology Tags',
                      'Individual Customer Care',
                      '2 bump-ups',
                      'Social Media Posts in our and several IT job groups',
                    ]}
                    buttonText='Get started'
                    onClick={this.handlePlanClick}
                  />
                </SwiperSlide>
                <SwiperSlide
                  className={style.Pricing_plans_slide}
                >
                  <PricingTableItem
                    bordered
                    large
                    label='Most&nbsp;Popular'
                    planName='Premium'
                    normalPrice='€200'
                    promoPrice='€160'
                    promoText='You save €40!'
                    bulletList={[
                      'Job Offer 30 days listed',
                      'Visualization with Company Logo & Technology Tags',
                      'Individual Customer Care',
                      '1 bump-up',
                      'Social Media Posts in our and several IT job groups',
                    ]}
                    buttonText='Get started'
                    onClick={this.handlePlanClick}
                  />
                </SwiperSlide>
                <SwiperSlide
                  className={style.Pricing_plans_slide}
                >
                  <PricingTableItem
                    bordered
                    planName='Standard'
                    normalPrice='€150'
                    promoPrice='€125'
                    promoText='You save €25!'
                    bulletList={[
                      'Job Offer 30 days listed',
                      'Visualization with Company Logo & Technology Tags',
                      'Individual Customer Care',
                    ]}
                    buttonText='Get started'
                    onClick={this.handlePlanClick}
                  />
                </SwiperSlide>
              </Swiper>
              <div className={style.Pricing_plans_desktopBoxes}>
                <div className={style.Pricing_plans_desktopBox}>
                  <PricingTableItem
                    bordered
                    planName='Premium+'
                    normalPrice='€250'
                    promoPrice='€200'
                    promoText='You save €50!'
                    bulletList={[
                      'Job Offer 60 days listed',
                      'Visualization with Company Logo & Technology Tags',
                      'Individual Customer Care',
                      '2 bump-ups',
                      'Social Media Posts in our and several IT job groups',
                    ]}
                    buttonText='Get started'
                    onClick={this.handlePlanClick}
                  />
                </div>
                <div className={[style.Pricing_plans_desktopBox, style.Pricing_plans_desktopBox__large].join(' ')}>
                  <PricingTableItem
                    bordered
                    large
                    label='Most&nbsp;Popular'
                    planName='Premium'
                    normalPrice='€200'
                    promoPrice='€160'
                    promoText='You save €40!'
                    bulletList={[
                      'Job Offer 30 days listed',
                      'Visualization with Company Logo & Technology Tags',
                      'Individual Customer Care',
                      '1 bump-up',
                      'Social Media Posts in our and several IT job groups',
                    ]}
                    buttonText='Get started'
                    onClick={this.handlePlanClick}
                  />
                </div>
                <div className={style.Pricing_plans_desktopBox}>
                  <PricingTableItem
                    bordered
                    planName='Standard'
                    normalPrice='€150'
                    promoPrice='€125'
                    promoText='You save €25!'
                    bulletList={[
                      'Job Offer 30 days listed',
                      'Visualization with Company Logo & Technology Tags',
                      'Individual Customer Care',
                    ]}
                    buttonText='Get started'
                    onClick={this.handlePlanClick}
                  />
                </div>
              </div>
            </Container>
          </div>
          {/*<Container>*/}
          {/*  <div className={style.Pricing_partners}>*/}
          {/*    <Heading variant='h2' className={style.Pricing_partners_heading}>Chosen clients who trust us</Heading>*/}
          {/*    <Swiper*/}
          {/*      spaceBetween={32}*/}
          {/*      slidesPerView={'auto'}*/}
          {/*      centeredSlides={true}*/}
          {/*      loop={true}*/}
          {/*      breakpoints={{*/}
          {/*        992: {*/}
          {/*          spaceBetween: 64*/}
          {/*        }*/}
          {/*      }}*/}
          {/*      className={style.Pricing_partners_slider}*/}
          {/*    >*/}
          {/*      <SwiperSlide*/}
          {/*        className={style.Pricing_partners_slide}*/}
          {/*      >*/}
          {/*        <img*/}
          {/*          className={style.Pricing_partners_slideImg}*/}
          {/*          src={ourPartnersLogo}*/}
          {/*        />*/}
          {/*        <p className={style.Pricing_partners_slideText}>Delta Systemtechnik</p>*/}
          {/*      </SwiperSlide>*/}
          {/*      <SwiperSlide*/}
          {/*        className={style.Pricing_partners_slide}*/}
          {/*      >*/}
          {/*        <img*/}
          {/*          className={style.Pricing_partners_slideImg}*/}
          {/*          src={ourPartnersLogo}*/}
          {/*        />*/}
          {/*        <p className={style.Pricing_partners_slideText}>Delta Systemtechnik</p>*/}
          {/*      </SwiperSlide>*/}
          {/*      <SwiperSlide*/}
          {/*        className={style.Pricing_partners_slide}*/}
          {/*      >*/}
          {/*        <img*/}
          {/*          className={style.Pricing_partners_slideImg}*/}
          {/*          src={ourPartnersLogo}*/}
          {/*        />*/}
          {/*        <p className={style.Pricing_partners_slideText}>Delta Systemtechnik</p>*/}
          {/*      </SwiperSlide>*/}
          {/*      <SwiperSlide*/}
          {/*        className={style.Pricing_partners_slide}*/}
          {/*      >*/}
          {/*        <img*/}
          {/*          className={style.Pricing_partners_slideImg}*/}
          {/*          src={ourPartnersLogo}*/}
          {/*        />*/}
          {/*        <p className={style.Pricing_partners_slideText}>Delta Systemtechnik</p>*/}
          {/*      </SwiperSlide>*/}
          {/*      <SwiperSlide*/}
          {/*        className={style.Pricing_partners_slide}*/}
          {/*      >*/}
          {/*        <img*/}
          {/*          className={style.Pricing_partners_slideImg}*/}
          {/*          src={ourPartnersLogo}*/}
          {/*        />*/}
          {/*        <p className={style.Pricing_partners_slideText}>Delta Systemtechnik</p>*/}
          {/*      </SwiperSlide>*/}
          {/*      <SwiperSlide*/}
          {/*        className={style.Pricing_partners_slide}*/}
          {/*      >*/}
          {/*        <img*/}
          {/*          className={style.Pricing_partners_slideImg}*/}
          {/*          src={ourPartnersLogo}*/}
          {/*        />*/}
          {/*        <p className={style.Pricing_partners_slideText}>Delta Systemtechnik</p>*/}
          {/*      </SwiperSlide>*/}
          {/*    </Swiper>*/}
          {/*  </div>*/}
          {/*  <div className={style.Pricing_testimonials}>*/}
          {/*    <Heading variant='h2' className={style.Pricing_testimonials_heading}>Testimonials</Heading>*/}
          {/*    <Swiper*/}
          {/*      navigation*/}
          {/*      loop*/}
          {/*      pagination={{*/}
          {/*        clickable: true,*/}
          {/*        dynamicBullets: true*/}
          {/*      }}*/}
          {/*      className={[style.Pricing_testimonials_slider, 'swiper-align-center', 'swiper-fade'].join(' ')}*/}
          {/*      breakpoints={{*/}
          {/*        992: {*/}
          {/*          slidesPerView: 3,*/}
          {/*          centeredSlides: true,*/}
          {/*          spaceBetween: 58,*/}
          {/*        }*/}
          {/*      }}*/}
          {/*    >*/}
          {/*      <SwiperSlide*/}
          {/*        className={style.Pricing_testimonials_slide}*/}
          {/*      >*/}
          {/*        <div className={style.Pricing_testimonials_person}>*/}
          {/*          <div className={style.Pricing_testimonials_person_imgWrapper}>*/}
          {/*            <img*/}
          {/*              src={pricingTestimonialsImg}*/}
          {/*              className={style.Pricing_testimonials_person_img}*/}
          {/*            />*/}
          {/*          </div>*/}
          {/*          <h3*/}
          {/*            className={style.Pricing_testimonials_person_name}*/}
          {/*          >*/}
          {/*            Kevin*/}
          {/*          </h3>*/}
          {/*          <p className={style.Pricing_testimonials_person_role}>*/}
          {/*            Android Developer*/}
          {/*          </p>*/}
          {/*          <p className={style.Pricing_testimonials_person_description}>*/}
          {/*            I was looking for job since 3 months. Thanks to JobsForIT, I found the right job instantly.*/}
          {/*          </p>*/}
          {/*        </div>*/}
          {/*      </SwiperSlide>*/}
          {/*      <SwiperSlide*/}
          {/*        className={style.Pricing_testimonials_slide}*/}
          {/*      >*/}
          {/*        <div className={style.Pricing_testimonials_person}>*/}
          {/*          <div className={style.Pricing_testimonials_person_imgWrapper}>*/}
          {/*            <img*/}
          {/*              src={pricingTestimonialsImg}*/}
          {/*              className={style.Pricing_testimonials_person_img}*/}
          {/*            />*/}
          {/*          </div>*/}
          {/*          <h3*/}
          {/*            className={style.Pricing_testimonials_person_name}*/}
          {/*          >*/}
          {/*            Kevin*/}
          {/*          </h3>*/}
          {/*          <p className={style.Pricing_testimonials_person_role}>*/}
          {/*            Android Developer*/}
          {/*          </p>*/}
          {/*          <p className={style.Pricing_testimonials_person_description}>*/}
          {/*            I was looking for job since 3 months. Thanks to JobsForIT, I found the right job instantly.*/}
          {/*          </p>*/}
          {/*        </div>*/}
          {/*      </SwiperSlide>*/}
          {/*      <SwiperSlide*/}
          {/*        className={style.Pricing_testimonials_slide}*/}
          {/*      >*/}
          {/*        <div className={style.Pricing_testimonials_person}>*/}
          {/*          <div className={style.Pricing_testimonials_person_imgWrapper}>*/}
          {/*            <img*/}
          {/*              src={pricingTestimonialsImg}*/}
          {/*              className={style.Pricing_testimonials_person_img}*/}
          {/*            />*/}
          {/*          </div>*/}
          {/*          <h3*/}
          {/*            className={style.Pricing_testimonials_person_name}*/}
          {/*          >*/}
          {/*            Kevin*/}
          {/*          </h3>*/}
          {/*          <p className={style.Pricing_testimonials_person_role}>*/}
          {/*            Android Developer*/}
          {/*          </p>*/}
          {/*          <p className={style.Pricing_testimonials_person_description}>*/}
          {/*            I was looking for job since 3 months. Thanks to JobsForIT, I found the right job instantly.*/}
          {/*          </p>*/}
          {/*        </div>*/}
          {/*      </SwiperSlide>*/}
          {/*    </Swiper>*/}
          {/*  </div>*/}
          {/*</Container>*/}
        </div>
      </>
    );
  }
}

export default Pricing;
