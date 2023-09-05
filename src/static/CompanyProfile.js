import React from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

import style from './CompanyProfile.module.scss';

import Container from '../common/Container/Container';
import TopNav from '../common/TopNav/TopNav';
import Heading from '../common/Heading';
import Wysiwyg from '../common/Wysiwyg';

import arrowLeftWhite from '../assets/img/icons-new-design/arrow--left--white.svg';
import arrowBottomViolet from '../assets/img/icons-new-design/arrow--bottom--violet.svg';
import bellWhite from '../assets/img/icons-new-design/bell--white.svg';
import companyLogo from '../assets/img/our-partners-logo.svg';
import imgOffice from '../assets/img/temp--office.jpg';
import companyProfileBg from '../assets/img/temp-company-profile-background.png';

class CompanyProfile extends React.Component {
  state = {
    interviewProcessBtnText: 'View more',
    isInterviewProcessActive: false
  }

  toggleInterviewProcess = () => {
    this.setState(prevState => {
      if(prevState.interviewProcessBtnText === 'View more') {
        return {
          interviewProcessBtnText: 'View less',
          isInterviewProcessActive: !prevState.isInterviewProcessActive
        }
      } else {
        return {
          interviewProcessBtnText: 'View more',
          isInterviewProcessActive: !prevState.isInterviewProcessActive
        }
      }
    })
  }
  
  render() {
    SwiperCore.use([Navigation]);

    return(
      <div className={style.Company}>
        <TopNav/>
        <div className={style.Company_header}>
          <img
          src={companyProfileBg}
          className={style.Company_header_img}
          />
          <Container>
            <div className={style.Company_header_top}>
              <button 
              className={style.Company_header_btn}
              onClick={this.props.onJobClose}
              >
                <img
                src={arrowLeftWhite}
                />
              </button>
            </div>
            <div className={style.Company_card}>
              <div className={style.Company_card_imgWrapper}>
                <img
                src={companyLogo}
                className={style.Company_card_img}
                />
              </div>
              <div className={style.Company_card_content}>
                <h1 className={style.Company_card_heading}>Airtel India Pvt. Ltd.</h1>
                <p className={style.Company_card_details}>
                  500+ Employees
                </p>
                <p className={style.Company_card_details}>
                  Founded in 2017
                </p>
                <ul className={style.Company_card_tags}>
                  <li className={style.Company_card_tag}>
                    Fintech
                  </li>
                  <li className={style.Company_card_tag}>
                    Communication
                  </li>
                </ul>
                <p className={style.Company_card_desktopDetails}>
                  <span className={style.Company_card_desktopDetail}>
                    500+ Employees
                  </span>
                  <span className={style.Company_card_desktopDetail}>
                    Founded in 2017
                  </span>
                  <span className={style.Company_card_desktopDetail}>
                    Fintech
                  </span>
                </p>
              </div>
            </div>
          </Container>
        </div>
        <Container>
          <div className={style.Company_section}>
            <Heading
            variant='h2'
            className={style.Company_section_heading}
            >
              About Airtel
            </Heading>
            <div className={style.Company_section_description}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices convallis leo et viverra. Morbi mattis finibus lorem, non maximus felis mattis quis. Proin vel odio dignissim, auctor ipsum vel, rhoncus inibus dictum.  
              </p>
            </div>
          </div>
          <div className={style.Company_section}>
            <Heading
            variant='h2'
            className={style.Company_section_heading}
            >
              Work Culture
            </Heading>
            <ul className={style.Company_section_tags}>
              <li className={style.Company_section_tag}>
                Relaxing
              </li>
              <li className={style.Company_section_tag}>
                Ownership
              </li>
            </ul>
            <div className={style.Company_section_description}>
              <ul>
                <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
              </ul>
            </div>
          </div>
          <div className={style.Company_sections}>
            <div className={[style.Company_section, style.Company_section__half].join(' ')}>
              <Heading
              variant='h2'
              className={style.Company_section_heading}
              >
                Perks
              </Heading>
              <ul className={style.Company_section_benefitList}>
                <li className={style.Company_section_benefitList_item}>
                  Flexible hours
                </li>
                <li className={style.Company_section_benefitList_item}>
                  Flexible hours
                </li>
                <li className={style.Company_section_benefitList_item}>
                  Flexible hours
                </li>
                <li className={style.Company_section_benefitList_item}>
                  Flexible hours
                </li>
              </ul>
            </div>
            <div className={[style.Company_section, style.Company_section__half].join(' ')}>
              <Heading
              variant='h2'
              className={style.Company_section_heading}
              >
                Benefits
              </Heading>
              <ul className={style.Company_section_benefitList}>
                <li className={style.Company_section_benefitList_item}>
                  Flexible hours
                </li>
                <li className={style.Company_section_benefitList_item}>
                  Flexible hours
                </li>
                <li className={style.Company_section_benefitList_item}>
                  Flexible hours
                </li>
                <li className={style.Company_section_benefitList_item}>
                  Flexible hours
                </li>
              </ul>
            </div>
          </div>
          <div className={this.state.isInterviewProcessActive ? [style.Company_section, style.Company_section__active].join(' ') : style.Company_section}>
            <div 
            className={style.Company_section_top}
            onClick={this.toggleInterviewProcess}
            >
              <Heading
              variant='h2'
              >
                Interview Process
              </Heading>
              <button
              className={style.Company_section_accordionIcon}
              >
                <img
                src={arrowBottomViolet}
                />
              </button>
            </div>
            <div className={style.Company_section_content}>
              <ol className={style.Company_section_processList}>
                <li className={style.Company_section_processList_item}>
                  <h4 className={style.Company_section_processList_item_heading}>
                    Choose from one of our plans
                  </h4>
                  <p className={style.Company_section_processList_item_description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices convallis leo et viverra...
                  </p>
                </li>
                <li className={style.Company_section_processList_item}>
                  <h4 className={style.Company_section_processList_item_heading}>
                    Choose from one of our plans
                  </h4>
                  <p className={style.Company_section_processList_item_description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices convallis leo et viverra...
                  </p>
                </li>
                <li className={style.Company_section_processList_item}>
                  <h4 className={style.Company_section_processList_item_heading}>
                    Choose from one of our plans
                  </h4>
                  <p className={style.Company_section_processList_item_description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices convallis leo et viverra...
                  </p>
                </li>
              </ol>
            </div>
            <div className={style.Company_section_bottom}>
              <button
              className={style.Company_section_accordionBtn}
              onClick={this.toggleInterviewProcess}
              >
                {this.state.interviewProcessBtnText}
              </button>
            </div>
          </div>
          <div className={style.Company_section}>
            <Heading
            variant='h2'
            className={style.Company_section_heading}
            >
              Company Photos (20)
            </Heading>
            <Swiper
              spaceBetween={16}
              slidesPerView={'auto'}
              className={style.Company_section_imageSlider}
              breakpoints={{
                992: {
                  spaceBetween: 40
                }
              }}
            >
              <SwiperSlide className={style.Company_section_imageSlider_slide}>
                <img 
                  src={imgOffice}
                  className={style.Company_section_imageSlider_slide_img}
                />
              </SwiperSlide>
              <SwiperSlide className={style.Company_section_imageSlider_slide}>
                <img 
                  src={imgOffice}
                  className={style.Company_section_imageSlider_slide_img}
                />
              </SwiperSlide>
              <SwiperSlide className={style.Company_section_imageSlider_slide}>
                <img 
                  src={imgOffice}
                  className={style.Company_section_imageSlider_slide_img}
                />
              </SwiperSlide>
              <SwiperSlide className={style.Company_section_imageSlider_slide}>
                <img 
                  src={imgOffice}
                  className={style.Company_section_imageSlider_slide_img}
                />
              </SwiperSlide>
              <SwiperSlide className={style.Company_section_imageSlider_slide}>
                <img 
                  src={imgOffice}
                  className={style.Company_section_imageSlider_slide_img}
                />
              </SwiperSlide>
              <SwiperSlide className={style.Company_section_imageSlider_slide}>
                <img 
                  src={imgOffice}
                  className={style.Company_section_imageSlider_slide_img}
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className={style.Company_section}>
            <Heading
            variant='h2'
            className={style.Company_section_heading}
            >
              Latest company updates
            </Heading>
            <Swiper
              spaceBetween={16}
              slidesPerView={'auto'}
              className={style.Company_section_newsSlider}
              breakpoints={{
                992: {
                  spaceBetween: 40
                }
              }}
            >
              <SwiperSlide className={style.Company_section_newsSlider_slide}>
                <a className={style.Company_section_newsSlider_slide_link}>
                  <img
                  src={imgOffice}
                  className={style.Company_section_newsSlider_slide_img}
                  />
                  <h3
                  className={style.Company_section_newsSlider_slide_heading}
                  >
                    Article heading comes here. lorem ipsum
                  </h3>
                  <p
                  className={style.Company_section_newsSlider_slide_date}
                  >
                    1 week ago
                  </p>
                </a>
              </SwiperSlide>
              <SwiperSlide className={style.Company_section_newsSlider_slide}>
                <a className={style.Company_section_newsSlider_slide_link}>
                  <img
                  src={imgOffice}
                  className={style.Company_section_newsSlider_slide_img}
                  />
                  <h3
                  className={style.Company_section_newsSlider_slide_heading}
                  >
                    Article heading comes here. lorem ipsum
                  </h3>
                  <p
                  className={style.Company_section_newsSlider_slide_date}
                  >
                    1 week ago
                  </p>
                </a>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className={style.Company_section}>
            <Heading
            variant='h2'
            className={style.Company_section_heading}
            >
              Job openings
            </Heading>
            <Swiper
              spaceBetween={16}
              slidesPerView={'auto'}
              className={style.Company_section_jobsSlider}
            >
              <SwiperSlide className={style.Company_section_jobsSlider_slide}>
                <div className={style.Company_section_jobsSlider_slide_job}>
                  <div className={style.Company_section_jobsSlider_slide_job_imgWrapper}>
                    <img
                      src={companyLogo}
                      className={style.Company_section_jobsSlider_slide_job_img}
                    />
                  </div>
                  <div className={style.Company_section_jobsSlider_slide_job_content}>
                    <Heading
                      variant='h3'
                      className={style.Company_section_jobsSlider_slide_job_heading}
                    >
                      Senior Java Developer
                    </Heading>
                    <p className={style.Company_section_jobsSlider_slide_job_detail}>
                      Airtel India Pvt. Ltd.
                    </p>
                    <p className={style.Company_section_jobsSlider_slide_job_detail}>
                      Berlin
                    </p>
                    <p className={style.Company_section_jobsSlider_slide_job_salary}>
                      €40.000 - €70.000
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={style.Company_section_jobsSlider_slide}>
                <div className={style.Company_section_jobsSlider_slide_job}>
                  <div className={style.Company_section_jobsSlider_slide_job_imgWrapper}>
                    <img
                      src={companyLogo}
                      className={style.Company_section_jobsSlider_slide_job_img}
                    />
                  </div>
                  <div className={style.Company_section_jobsSlider_slide_job_content}>
                    <Heading
                      variant='h3'
                      className={style.Company_section_jobsSlider_slide_job_heading}
                    >
                      Senior Java Developer
                    </Heading>
                    <p className={style.Company_section_jobsSlider_slide_job_detail}>
                      Airtel India Pvt. Ltd.
                    </p>
                    <p className={style.Company_section_jobsSlider_slide_job_detail}>
                      Berlin
                    </p>
                    <p className={style.Company_section_jobsSlider_slide_job_salary}>
                      €40.000 - €70.000
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className={style.Company_section}>
            <div className={style.Company_section_formWrapper}>
              <Heading
              variant='h2'
              className={[style.Company_section_heading, style.Company_section_formHeading].join(' ')}
              >
                Subscribe to Company offers
              </Heading>
              <div className={style.Company_section_form}>
                <input 
                type='text'
                className={style.Company_section_form_input}
                placeholder='Enter your email'
                />
                <button
                className={style.Company_section_form_btn}
                >
                  <img
                    src={bellWhite}
                  />
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default CompanyProfile;