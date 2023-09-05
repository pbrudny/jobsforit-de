import React from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import TopNav from '../common/TopNav/TopNav';
import blogBanner from '../assets/img/blog-banner.png';
import arrowWhite from '../assets/img/icons-new-design/arrow--left--white.svg';
import shareWhite from '../assets/img/icons-new-design/share--white.svg';
import clockGray from '../assets/img/icons-new-design/clock--gray.svg';
import clapGray from '../assets/img/icons-new-design/clap--gray.svg';
import clapWhite from '../assets/img/icons-new-design/clap--white.svg';
import linkedinIcon from '../assets/img/icons-new-design/linkedin.svg';
import githubIcon from '../assets/img/icons-new-design/github.svg';
import twitterIcon from '../assets/img/icons-new-design/twitter.svg';
import facebookIcon from '../assets/img/icons-new-design/facebook.svg';
import authorImg from '../assets/img/icons-new-design/mascot.svg';
import blogIllustration from '../assets/img/blog-single-illustration.svg';
import Container from '../common/Container/Container';
import Heading from '../common/Heading';
import companyLogo from '../assets/img/our-partners-logo.svg';

import style from './BlogSingle.module.scss';

class BlogSingle extends React.Component {
  render() {

    SwiperCore.use([Navigation]);

    return(
      <div className={style.BlogSingle}>
        <TopNav />
        <div className={style.BlogSingle_banner}>
          <img
          src={blogBanner}
          className={style.BlogSingle_banner_img}
          />
          <div className={style.BlogSingle_banner_btns}>
            <button
              className={style.BlogSingle_banner_btn}
              >
              <img
              src={arrowWhite}
              />
            </button>
            <button
              className={style.BlogSingle_banner_btn}
              >
              <img
              src={shareWhite}
              />
            </button>
          </div>
        </div>
        <Container>
          <div className={style.BlogSingle_top}>
            <span className={style.BlogSingle_label}>
              Remote
            </span>
            <Heading
            variant='h2'
            className={style.BlogSingle_heading}
            >
              Article heading will come here.
            </Heading>
            <div className={style.BlogSingle_details}>
              <p className={style.BlogSingle_detail}>
                <img 
                src={clockGray}
                />
                1 week ago
              </p>
              <p className={style.BlogSingle_detail}>
                <img 
                src={clapGray}
                />
                120 claps
              </p>
            </div>
          </div>
          <div className={style.BlogSingle_meta}>
            <div className={style.BlogSingle_author}>
              <div className={style.BlogSingle_author_imgWrapper}>
                <img 
                src={authorImg}
                className={style.BlogSingle_author_img}
                />
              </div>
              <div>
                <a 
                href='/'
                className={style.BlogSingle_author_name}
                >
                  JobsForIT
                </a>
                <p className={style.BlogSingle_author_detail}>
                  5 min read
                </p>
              </div>
            </div>
            <div className={style.BlogSingle_share}>
              <p className={style.BlogSingle_share_text}>
                Share
              </p>
              <a 
              href='/'
              className={style.BlogSingle_share_btn}>
                <img 
                src={linkedinIcon}
                />
              </a>
              <a 
              href='/'
              className={style.BlogSingle_share_btn}>
                <img 
                src={githubIcon}
                />
              </a>
              <a 
              href='/'
              className={style.BlogSingle_share_btn}>
                <img 
                src={twitterIcon}
                />
              </a>
              <a 
              href='/'
              className={style.BlogSingle_share_btn}>
                <img 
                src={facebookIcon}
                />
              </a>
            </div>
          </div>
          <div className={style.BlogSingle_content}>
            <p className={style.BlogSingle_text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices convallis leo et viverra. Morbi mattis finibus lorem, non maximus felis mattis quis. Proin vel odio dignissim, auctor ipsum vel, rhoncus inibus dictum. roin vel odio dignissim, auctor ipsum vel, rhoncus inibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices convallis leo et viverra. Morbi mattis finibus lorem, non maximus felis mattis quis. Proin vel odio dignissim, auctor ipsum vel, rhoncus inibus dictum. roin vel odio dignissim, auctor ipsum vel, rhoncus inibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices convallis leo et viverra. Morbi mattis finibus lorem, non maximus felis mattis quis. Proin vel odio dignissim, auctor ipsum vel, rhoncus inibus dictum. roin vel odio dignissim, auctor ipsum vel, rhoncus inibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices convallis leo et viverra. Morbi mattis finibus lorem, non maximus felis mattis quis. Proin vel odio dignissim, auctor ipsum vel, rhoncus inibus dictum. roin vel odio dignissim, auctor ipsum vel, rhoncus inibus. 
            </p>
            <p className={style.BlogSingle_text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices convallis leo et viverra. Morbi mattis finibus lorem, non maximus felis mattis quis. Proin vel odio dignissim, auctor ipsum vel, rhoncus inibus dictum. roin vel odio dignissim, auctor ipsum vel, rhoncus inibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices convallis leo et viverra. Morbi mattis finibus lorem, non maximus felis mattis quis. Proin vel odio dignissim, auctor ipsum vel, rhoncus inibus dictum. roin vel odio dignissim, auctor ipsum vel, rhoncus inibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices convallis leo et viverra. Morbi mattis finibus lorem, non maximus felis mattis quis. Proin vel odio dignissim, auctor ipsum vel, rhoncus inibus dictum. roin vel odio dignissim, auctor ipsum vel, rhoncus inibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices convallis leo et viverra. Morbi mattis finibus lorem, non maximus felis mattis quis. Proin vel odio dignissim, auctor ipsum vel, rhoncus inibus dictum. roin vel odio dignissim, auctor ipsum vel, rhoncus inibus. 
            </p>
            <img 
            src={blogIllustration}
            className={style.BlogSingle_content_img}
            />
            <p className={style.BlogSingle_text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices convallis leo et viverra. Morbi mattis finibus lorem, non maximus felis mattis quis. Proin vel odio dignissim, auctor ipsum vel, rhoncus inibus dictum. roin vel odio dignissim, auctor ipsum vel, rhoncus inibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices convallis leo et viverra. Morbi mattis finibus lorem, non maximus felis mattis quis. Proin vel odio dignissim, auctor ipsum vel, rhoncus inibus dictum. roin vel odio dignissim, auctor ipsum vel, rhoncus inibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices convallis leo et viverra. Morbi mattis finibus lorem, non maximus felis mattis quis. Proin vel odio dignissim, auctor ipsum vel, rhoncus inibus dictum. roin vel odio dignissim, auctor ipsum vel, rhoncus inibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices convallis leo et viverra. Morbi mattis finibus lorem, non maximus felis mattis quis. Proin vel odio dignissim, auctor ipsum vel, rhoncus inibus dictum. roin vel odio dignissim, auctor ipsum vel, rhoncus inibus. 
            </p>
            <p className={style.BlogSingle_text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices convallis leo et viverra. Morbi mattis finibus lorem, non maximus felis mattis quis. Proin vel odio dignissim, auctor ipsum vel, rhoncus inibus dictum. roin vel odio dignissim, auctor ipsum vel, rhoncus inibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices convallis leo et viverra. Morbi mattis finibus lorem, non maximus felis mattis quis. Proin vel odio dignissim, auctor ipsum vel, rhoncus inibus dictum. roin vel odio dignissim, auctor ipsum vel, rhoncus inibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices convallis leo et viverra. Morbi mattis finibus lorem, non maximus felis mattis quis. Proin vel odio dignissim, auctor ipsum vel, rhoncus inibus dictum. roin vel odio dignissim, auctor ipsum vel, rhoncus inibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices convallis leo et viverra. Morbi mattis finibus lorem, non maximus felis mattis quis. Proin vel odio dignissim, auctor ipsum vel, rhoncus inibus dictum. roin vel odio dignissim, auctor ipsum vel, rhoncus inibus. 
            </p>
            <div className={style.BlogSingle_bottom}>
              <button className={style.BlogSingle_clapBtn}>
                <img 
                src={clapWhite}
                />
              </button>
            </div>
          </div>
          <div className={style.BlogSingle_sliderSection}>
            <Heading
            variant='h3'
            className={style.BlogSingle_sliderSection_heading}
            >
              Related Jobs
            </Heading>
            <Swiper
              navigation
              spaceBetween={16}
              slidesPerView={'auto'}
              className={style.BlogSingle_sliderSection_slider}
              breakpoints={{
                992: {
                  spaceBetween: 40,
                }
              }}
            >
              <SwiperSlide className={style.BlogSingle_sliderSection_slide}>
                <div className={style.BlogSingle_sliderSection_slide_job}>
                  <div className={style.BlogSingle_sliderSection_slide_job_imgWrapper}>
                    <img
                      src={companyLogo}
                      className={style.BlogSingle_sliderSection_slide_job_img}
                    />
                  </div>
                  <div className={style.BlogSingle_sliderSection_slide_job_content}>
                    <Heading
                      variant='h3'
                      className={style.BlogSingle_sliderSection_slide_job_heading}
                    >
                      Senior Java Developer
                    </Heading>
                    <p className={style.BlogSingle_sliderSection_slide_job_detail}>
                      Airtel India Pvt. Ltd.
                    </p>
                    <p className={style.BlogSingle_sliderSection_slide_job_detail}>
                      Berlin
                    </p>
                    <p className={style.BlogSingle_sliderSection_slide_job_salary}>
                      €40.000 - €70.000
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={style.BlogSingle_sliderSection_slide}>
                <div className={style.BlogSingle_sliderSection_slide_job}>
                  <div className={style.BlogSingle_sliderSection_slide_job_imgWrapper}>
                    <img
                      src={companyLogo}
                      className={style.BlogSingle_sliderSection_slide_job_img}
                    />
                  </div>
                  <div className={style.BlogSingle_sliderSection_slide_job_content}>
                    <Heading
                      variant='h3'
                      className={style.BlogSingle_sliderSection_slide_job_heading}
                    >
                      Senior Java Developer
                    </Heading>
                    <p className={style.BlogSingle_sliderSection_slide_job_detail}>
                      Airtel India Pvt. Ltd.
                    </p>
                    <p className={style.BlogSingle_sliderSection_slide_job_detail}>
                      Berlin
                    </p>
                    <p className={style.BlogSingle_sliderSection_slide_job_salary}>
                      €40.000 - €70.000
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={style.BlogSingle_sliderSection_slide}>
                <div className={style.BlogSingle_sliderSection_slide_job}>
                  <div className={style.BlogSingle_sliderSection_slide_job_imgWrapper}>
                    <img
                      src={companyLogo}
                      className={style.BlogSingle_sliderSection_slide_job_img}
                    />
                  </div>
                  <div className={style.BlogSingle_sliderSection_slide_job_content}>
                    <Heading
                      variant='h3'
                      className={style.BlogSingle_sliderSection_slide_job_heading}
                    >
                      Senior Java Developer
                    </Heading>
                    <p className={style.BlogSingle_sliderSection_slide_job_detail}>
                      Airtel India Pvt. Ltd.
                    </p>
                    <p className={style.BlogSingle_sliderSection_slide_job_detail}>
                      Berlin
                    </p>
                    <p className={style.BlogSingle_sliderSection_slide_job_salary}>
                      €40.000 - €70.000
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={style.BlogSingle_sliderSection_slide}>
                <div className={style.BlogSingle_sliderSection_slide_job}>
                  <div className={style.BlogSingle_sliderSection_slide_job_imgWrapper}>
                    <img
                      src={companyLogo}
                      className={style.BlogSingle_sliderSection_slide_job_img}
                    />
                  </div>
                  <div className={style.BlogSingle_sliderSection_slide_job_content}>
                    <Heading
                      variant='h3'
                      className={style.BlogSingle_sliderSection_slide_job_heading}
                    >
                      Senior Java Developer
                    </Heading>
                    <p className={style.BlogSingle_sliderSection_slide_job_detail}>
                      Airtel India Pvt. Ltd.
                    </p>
                    <p className={style.BlogSingle_sliderSection_slide_job_detail}>
                      Berlin
                    </p>
                    <p className={style.BlogSingle_sliderSection_slide_job_salary}>
                      €40.000 - €70.000
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </Container>
      </div>
    );
  }
}

export default BlogSingle;