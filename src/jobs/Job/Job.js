import React, {Component} from 'react';
import 'swiper/swiper.scss';
import {observer} from "mobx-react";
import store from '../../stores/store';
import history from "../../history";
import style from './style.module.scss';
import arrowLeftWhite from '../../assets/img/icons-new-design/arrow--left--white.svg';
import arrowDarkGray from '../../assets/img/icons-new-design/arrow--left--dark-gray.svg';
import heartWhite from '../../assets/img/icons-new-design/heart--white.svg';
import shareWhite from '../../assets/img/icons-new-design/share--white.svg';
import locationWhite from '../../assets/img/icons-new-design/location--white.svg';
import Wysiwyg from '../../common/Wysiwyg';
import imgOffice from '../../assets/img/temp--office.jpg';
import Button from '../../common/Button/Button';
import Popup from '../../common/Popup';
import JobHeader from "../JobHeader/JobHeader";
import {experienceNames} from "../../common/helpers";
import JobSection from "../JobSection/JobSection";
import SkillsList from "../SkillsList/SkillsList";
import GallerySlider from "../../common/GallerySlider/GallerySlider";
import Map from "../../common/Map/Map";
import {ThemeContext} from "../../themeContext";
import {toJS} from "mobx";

class Job extends Component {
  myRef = React.createRef();

  constructor(props) {
    super(props);
    this.showModal = this.showModal.bind(this);
    this.showEmailModal = this.showEmailModal.bind(this);
    this.apply = this.apply.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
  }

  state = {
    showApplyPopup: false,
    applyPopupContent: '',
    applyPopupType: '',
    mapOpened: false,
    flipped: false
  }

  popupClosedHandler = () => {
    document.body.style.overflow = 'unset';
    this.setState({showApplyPopup: false});
  }

  onModalEmailClose = () => {
    const job = store.currentJob;
    const position = job.fields.position;
    this.popupClosedHandler();
    window.location = "mailto:" + job.fields.applyEmail + "?subject=Applied%20from%20JobsForIT.de%20for%20" + position + '%20position';
  }

  popupShowHandler = (type, content) => {
    document.body.style.overflow = 'hidden';
    this.setState({
      showApplyPopup: true,
      applyPopupContent: content,
      applyPopupType: type
    });
  }

  showParticles(value) {
    store.confetti = value;
  }

  skillsToNuts(job) {
    let mustHaves = [];
    let niceToHaves = [];

    if (job.fields.mustHave) {
      mustHaves = job.fields.mustHave.map(skill => {
        return {
          name: this.capitalize(skill),
          level: 4
        }
      });
    }

    if (job.fields.niceToHave) {
      niceToHaves = job.fields.niceToHave.map(skill => {
        return {
          name: this.capitalize(skill),
          level: 1
        }
      });
    }

    return mustHaves.concat(niceToHaves);
  }

  onModalClose() {
    const {job} = this.props;
    this.showParticles(false);
    const url = job.fields.applyUrl;
    window.open(url, '_blank');
    this.popupClosedHandler();
  }

  showModal() {
    this.showParticles(true);
    this.popupShowHandler('url', "Thanks for showing interest. Let me redirect you to the company website.");
  }

  showEmailModal(job) {
    const {t} = this.props;
    this.popupShowHandler('email', "Please send your CV to: " + job.fields.applyEmail);
  }

  apply() {
    const {job} = this.props;
    if (job.fields.applyEmail) {
      this.showEmailModal(job);
    } else if (job.fields.applyUrl) {
      this.showModal();
    }
    history.push('/jobs/' + job.fields.slug + '/applied');
  }

  niceToHave(job) {
    return job.fields.niceToHave.map((skill) => {
      return (
        <span className={this.props.classes.skillTag} key={skill}>{this.capitalize(skill)}</span>
      )
    })
  }

  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  getJobPrimaryColor(job) {
    return job.fields.technology.fields.color;
  }

  adjustedTime(job) {
    if (job.fields.dateDisplayed) {
      return Date.parse(job.fields.dateDisplayed);
    }
    return Date.parse(job.sys.createdAt);
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
        style={{color: 'white', background: background}}
      >
        {message}
      </span>
    )
  }

  mapShowHandler = () => {
    this.setState({
      mapOpened: true,
      flipped: true
    });
  }

  mapHideHandler = () => {
    this.setState({
      mapOpened: false,
      flipped: false
    });
  }

  getLocation = (job) => {
    if (job.fields.location) {
      return [job.fields.location.lat, job.fields.location.lon]
    } else if (job.fields.company.fields.location) {
      return [job.fields.company.fields.location.lat, job.fields.company.fields.location.lon]
    } else {
      return [51.16569, 10.45152]
    }
  }

  render() {
    const job = store.currentJob;
    const classes = [style.Job];

    const themeContext = this.context;

    if (themeContext.theme === 'dark') {
      classes.push(style.Job__dark);
    } else {
      classes.push(style.Job__light);
    }

    const jobHeaderBackgroundDark = {background: `linear-gradient(180deg, ${this.getJobPrimaryColor(job)} 0%, rgba(91, 66, 63, 0) 100%)`};
    const jobHeaderBackgroundLight = {background: `linear-gradient(180deg, ${this.getJobPrimaryColor(job)} -12.06%, #3F4A5B 366.76%)`};

    return (
      <div className={classes.join(' ')}>
        <div
          className={this.state.flipped ? [style.Job_cardContainer, style.Job_cardContainer__flipped].join(' ') : style.Job_cardContainer}>
          <div className={style.Job_card}>
            <div className={style.Job_header}
                 style={themeContext.theme === 'dark' ? jobHeaderBackgroundDark : jobHeaderBackgroundLight}>
              <div className={style.Job_header_group}>
                <button
                  className={[style.Job_closeBtn, style.Job_header_icon].join(' ')}
                  onClick={this.props.onJobClose}
                >
                  <img
                    src={arrowLeftWhite}
                  />
                </button>
                <ul className={style.Job_header_icons}>
                  {/*<li className={style.Job_header_icons_item}>*/}
                  {/*  <button className={style.Job_header_icon}>*/}
                  {/*    <img*/}
                  {/*      src={heartWhite}*/}
                  {/*    />*/}
                  {/*  </button>*/}
                  {/*</li>*/}
                  {/*<li className={style.Job_header_icons_item}>*/}
                  {/*  <button className={style.Job_header_icon}>*/}
                  {/*    <img*/}
                  {/*      src={shareWhite}*/}
                  {/*    />*/}
                  {/*  </button>*/}
                  {/*</li>*/}
                  <li className={style.Job_header_icons_item}>
                    <button
                      className={style.Job_header_icon}
                      onClick={this.mapShowHandler}
                    >
                      <img
                        src={locationWhite}
                      />
                    </button>
                  </li>
                  <li>
                    {job.fields.trackingPixel &&
                    <img src={job.fields.trackingPixel} alt="dot"/>
                    }
                  </li>
                </ul>
              </div>
              <JobHeader
                logo={job.fields.company.fields.logo.fields.file.url || ''}
                name={job.fields.position || ''}
                companyName={job.fields.company.fields.name || ''}
                companyWebsite={job.fields.company.fields.website || ''}
                companySize={job.fields.company.fields.size || ''}
                industry={job.fields.company.fields.industry || ''}
                experience={experienceNames(job.fields.expBottom, job.fields.expTop) || ''}
                location={job.fields.city ? job.fields.city.fields.name : ''}
                agreementType={job.fields.agreementType || ''}
                job={job}
                theme={themeContext.theme}
              />
            </div>
            {this.state.mapOpened &&
            <div className={style.Job_map}>
              <button
                className={style.Job_map_icon}
                onClick={this.mapHideHandler}
              >
                <img
                  src={arrowDarkGray}
                />
              </button>
              <Map
                position={this.getLocation(job)}
                zoom={job.fields.mapZoom || 5}
                popup={[job.fields.locationLabelTop || 'Germany', <br/>,
                  job.fields.locationLabelBottom || '-']}
                theme={themeContext.theme}
              />
            </div>
            }
          </div>
        </div>
        <JobSection theme={themeContext.theme} heading={'Skills Required'}>
          <SkillsList
            theme={themeContext.theme}
            skillsList={this.skillsToNuts(job)}
          />
        </JobSection>
        <JobSection theme={themeContext.theme} heading={job.fields.titleA}>
          <Wysiwyg className={style.Job_description}>
            {job.fields.descriptionA}
          </Wysiwyg>
        </JobSection>
        <JobSection theme={themeContext.theme} heading={job.fields.titleB}>
          <Wysiwyg className={style.Job_description}>
            {job.fields.descriptionB}
          </Wysiwyg>
        </JobSection>
        <JobSection theme={themeContext.theme} heading={job.fields.titleC}>
          <Wysiwyg className={style.Job_description}>
            {job.fields.descriptionC}
          </Wysiwyg>
        </JobSection>
        <JobSection theme={themeContext.theme} heading={job.fields.titleD}>
          <Wysiwyg className={style.Job_description}>
            {job.fields.descriptionD}
          </Wysiwyg>
        </JobSection>
        {job.fields.officePerks &&
        <JobSection theme={themeContext.theme} heading={'Perks'}>
          <ul className={style.Job_benefitList}>
            {job.fields.officePerks.map(element => {
              return (
                <li
                  key={element.fields.title}
                  className={style.Job_benefitList_item}
                >
                  {element.fields.title}
                </li>
              );
            })}
          </ul>
        </JobSection>
        }

        {job.fields.workBenefits &&
        <JobSection theme={themeContext.theme} heading={'Benefits'}>
          <ul className={style.Job_benefitList}>
            {job.fields.workBenefits.map(element => {
              return (
                <li
                  key={element.fields.title}
                  className={style.Job_benefitList_item}
                >
                  {element.fields.title}
                </li>
              );
            })}
          </ul>
        </JobSection>
        }

        <JobSection theme={themeContext.theme} heading={job.fields.titleE}>
          <Wysiwyg className={style.Job_description}>
            {job.fields.descriptionE}
          </Wysiwyg>
          {job.fields.company.fields.photos && <div>
            <GallerySlider
              items={job.fields.company.fields.photos.map(photo => {
                return {
                  src: photo.fields.file.url,
                  w: 1920,
                  h: 1080
                }
              })}
            />
          </div>
          }
        </JobSection>
        <div className={style.Job_bottom}>
          <Button
            variant="primary long"
            clicked={this.apply}
          >
            Apply Now
          </Button>
        </div>
        <Popup
          open={this.state.showApplyPopup}
          onCloseClick={this.state.applyPopupType === 'url' ? this.onModalClose : this.onModalEmailClose}
          apply
        >
          <p className={style.Job_applyPopupSideInfo}>
            Fasten your seatbelts. We’re redirecting you to the company website.
          </p>
          <p className={style.Job_applyPopupText}>
            <strong>Good luck.</strong>
          </p>
        </Popup>
      </div>
    );
  }
}

Job.contextType = ThemeContext;
Job = observer(Job);
export default Job;
