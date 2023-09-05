import React from 'react';

import Container from '../../common/Container/Container';
import TopNav from '../../common/TopNav/TopNav';

import meetupBanner from '../../assets/img/meetup-banner.png';
import arrowWhite from '../../assets/img/icons-new-design/arrow--left--white.svg';
import shareWhite from '../../assets/img/icons-new-design/share--white.svg';
import linkedinIcon from '../../assets/img/icons-new-design/linkedin.svg';
import githubIcon from '../../assets/img/icons-new-design/github.svg';
import twitterIcon from '../../assets/img/icons-new-design/twitter.svg';
import facebookIcon from '../../assets/img/icons-new-design/facebook.svg';
import authorImg from '../../assets/img/temp-pricing-testimonials.png';
import meetupSpeaker from '../../assets/img/meetup-speaker.png';

import style from './Meetup.module.scss';
import Heading from 'common/Heading';

class Meetup extends React.Component {
  render() {
    return(
      <>
        <TopNav />
        <div className={style.Meetup_banner}>
          <img
          src={meetupBanner}
          className={style.Meetup_banner_img}
          />
          <div className={style.Meetup_banner_btns}>
            <button
              className={style.Meetup_banner_btn}
              >
              <img
              src={arrowWhite}
              />
            </button>
            <button
              className={style.Meetup_banner_btn}
              >
              <img
              src={shareWhite}
              />
            </button>
          </div>
        </div>
        <Container>
          <div className={style.Meetup_top}>
            <p className={style.Meetup_date}>On 14th July 2020</p>
            <Heading 
            variant='h1'
            className={style.Meetup_heading}
            >
              Meetup Title will come here
            </Heading>
            <p className={style.Meetup_details}>
              Speaker: Kevin Brown, CEO- ABC Company 
            </p>
          </div>
          <div className={style.Meetup_meta}>
            <div className={style.Meetup_author}>
              <img 
              src={authorImg}
              className={style.Meetup_author_img}
              />
              <p className={style.Meetup_author_signature}>
                Hosted By <a href='/'>Lora Studio</a>
              </p>
            </div>
            <div className={style.Meetup_share}>
              <p className={style.Meetup_share_text}>
                Share
              </p>
              <a 
              href='/'
              className={style.Meetup_share_btn}>
                <img 
                src={linkedinIcon}
                />
              </a>
              <a 
              href='/'
              className={style.Meetup_share_btn}>
                <img 
                src={githubIcon}
                />
              </a>
              <a 
              href='/'
              className={style.Meetup_share_btn}>
                <img 
                src={twitterIcon}
                />
              </a>
              <a 
              href='/'
              className={style.Meetup_share_btn}>
                <img 
                src={facebookIcon}
                />
              </a>
            </div>
          </div>
          <section className={style.Meetup_section}>
            <Heading 
            variant='h2'
            className={style.Meetup_section_heading}
            >
              Introduction
            </Heading>
            <p className={style.Meetup_section_text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices convallis leo et viverra. Morbi mattis finibus lorem, non maximus felis mattis quis. Proin vel odio dignissim, auctor ipsum vel, rhoncus inibus dictum. roin vel odio dignissim, auctor ipsum vel, rhoncus inibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices convallis leo et viverra. Morbi mattis finibus lorem, non maximus felis mattis quis. Proin vel odio dignissim, auctor ipsum vel, rhoncus inibus dictum. roin vel odio dignissim, auctor ipsum vel, rhoncus inibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices convallis leo et viverra. Morbi mattis finibus lorem, non maximus felis mattis quis. 
            </p>
            <p className={style.Meetup_section_text}>
            Proin vel odio dignissim, auctor ipsum vel, rhoncus inibus dictum. roin vel odio dignissim, auctor ipsum vel, rhoncus inibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices convallis leo et viverra. Morbi mattis finibus lorem, non maximus felis mattis quis. Proin vel odio dignissim, auctor ipsum vel, rhoncus inibus dictum. roin vel odio dignissim, auctor ipsum vel, rhoncus inibus. 
            </p>
          </section>
          <section className={style.Meetup_section}>
            <Heading 
            variant='h2'
            className={style.Meetup_section_heading}
            >
              Webinar details
            </Heading>
            <p className={style.Meetup_section_text}>
            Tuesday, 14th July 2020
            <br />
            <br />
            10:00 am - 2:00 pm CET
            <br />
            <br />
            Fee - €16.00
            </p>
            <a 
            href='/'
            className={style.Meetup_section_registerBtn}>
              Register here
            </a>
          </section>
          <section className={style.Meetup_section}>
            <Heading 
            variant='h2'
            className={style.Meetup_section_heading}
            >
              For who?
            </Heading>
            <p className={style.Meetup_section_text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices convallis leo et viverra.
            </p>
          </section>
          <section className={style.Meetup_section}>
            <Heading 
            variant='h2'
            className={style.Meetup_section_heading}
            >
              Key take aways
            </Heading>
            <ul className={style.Meetup_section_benefitList}>
              <li className={style.Meetup_section_benefitList_item}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
              <li className={style.Meetup_section_benefitList_item}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
              <li className={style.Meetup_section_benefitList_item}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
            </ul>
          </section>
          <section className={style.Meetup_section}>
            <Heading 
            variant='h2'
            className={style.Meetup_section_heading}
            >
              Our Speaker
            </Heading>
            <div className={style.Meetup_speaker}>
              <img 
              src={meetupSpeaker}
              className={style.Meetup_speaker_img}
              />
              <div className={style.Meetup_speaker_group}>
                <Heading
                variant='h3'
                className={style.Meetup_speaker_heading}
                >
                  Kevin Brown
                </Heading>
                <p className={style.Meetup_speaker_detail}>
                  CEO - ABC Company
                </p>
                <div className={style.Meetup_speaker_bottom}>
                  <p className={style.Meetup_section_text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices convallis leo et viverra. Morbi mattis finibus lorem, non maximus felis mattis quis. Proin vel odio dignissim, auctor ipsum vel, rhoncus inibus dictum.
                  </p>
                  <a 
                  href='/'
                  className={style.Meetup_section_registerBtn}>
                    Register here
                  </a>
                </div>
              </div>
            </div>
          </section>
        </Container>
      </>
    );
  }
}

export default Meetup;