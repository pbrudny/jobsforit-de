import React, { Component, useState, useEffect } from 'react';
import { useHistory } from "react-router";
import { createImageCompanyJob, getBenefits, getOfficePerks } from '../../contentfulClient';
import {LinearProgress, withStyles} from "@material-ui/core";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import 'mdb-overrides.css';

import { salaries, cities, skillLevels, perks, employees} from "./data";

import {
  MDBInput,
  MDBFormInline,
  MDBAutocomplete,
  MDBAlert, MDBSelect
} from "mdbreact";

import TopNav from "../../common/TopNav/TopNav";

import store from "../../stores/store";

import Container from '../../common/Container/Container';
import Timeline from '../../common/Timeline';
import Message from '../../common/Message';
import Heading from '../../common/Heading';
import ImageUploader from '../../common/ImageUploader';
import AddMoreButton from '../../common/AddMoreButton/AddMoreButton';
import Button from '../../common/Button/Button';

import acorn from '../../assets/img/icons-new-design/acorn.svg';
import arrowLeftDarkGray from '../../assets/img/icons-new-design/arrow--left--dark-gray.svg';

import style from './style.module.scss';

function NewJobContainer (props) {
  const history = useHistory();
  const { classes } = props;

  const [checkedPerks, setCheckedPerks] = useState({});
  const [checkedBenefits, setCheckedBenefits] = useState({});
  const [jobDetails, setJobDetails] = useState({});
  const [companyDetails, setCompanyDetails] = useState({});
  const [levels, setLevels] = useState(skillLevels);
  const [logoFile, setLogoFile] = useState(null);
  const [applyOwn, setApplyOwn] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);
  const [applyOwnUrl, setApplyOwnUrl] = useState(null);
  const [benefits, setBenefits] = useState([]);
  const [officePerks, setOfficePerks] = useState([]);
  const [logo, setLogo] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [jobRoles, setRoles] = useState(['']);
  const [skills, setSkills] = useState([{skill: '', level: 0}]);


  useEffect(() => {
    getBenefits().then(
      response => {
        const items = response.items.map(i => {return {name: i.fields.title, label: i.fields.title}});
        setBenefits(items);
      }
    );
    getOfficePerks().then(
      response => {
        const items = response.items.map(i => {return {name: i.fields.title, label: i.fields.title}});
        setOfficePerks(items);
      }
    );
  }, []);

  const handlePerksChange = (event) => {
    setCheckedPerks({...checkedPerks, [event.target.value] : event.target.checked });
  };

  const handleBenefitsChange = (event) => {
    setCheckedBenefits({...checkedBenefits, [event.target.value] : event.target.checked });
  };

  const handleCompanyName = (event) => {
    setCompanyDetails({...companyDetails, name: event.target.value });
  };

  const handleCompanyLogo = files => {
    console.log(files[0]);
    setCompanyDetails({...companyDetails, logo: files[0] });
  };

  const handleCompanyPhotos = files => {
    setCompanyDetails({...companyDetails, photos: files });
  };

  const handleCompanyDescription = (event) => {
    setCompanyDetails({...companyDetails, description: event.target.value });
  };

  const handleCompanySize = (event) => {
    setCompanyDetails({...companyDetails, size: event.target.value });
  };

  const handleCompanyIndustry = (event) => {
    setCompanyDetails({...companyDetails, industry: event.target.value });
  };

  const handleCity = (cityName) => {
    const city = store.getCityByName(cityName);
    if (city) {
      setJobDetails({...jobDetails, cityId: city.sys.id });
    }
  };

  const handleStreet = (street) => {
    setJobDetails({...jobDetails, street: street });
  };

  const handleCompanyWebsite = (event) => {
    setCompanyDetails({...companyDetails, website: event.target.value });
  };

  const handleJobTitle = (event) => {
    setJobDetails({...jobDetails, position: event.target.value });
  };

  const handleJobType = (event) => {
    setJobDetails({...jobDetails, type: event.target.value });
  };

  const handleWorkLocation = (event) => {
    setJobDetails({...jobDetails, workLocation: event.target.value });
  };

  const handleSalaryBottom = (value) => {
    setJobDetails({...jobDetails, salaryBottom: value.replace('.', '') });
  };

  const handleSalaryTop = (value) => {
    setJobDetails({...jobDetails, salaryTop: value.replace('.', '') });
  };

  const handleDescription = (event) => {
    setJobDetails({...jobDetails, descriptionA: event.target.value });
  };

  const handleApplyUrl = (event) => {
    setJobDetails({...jobDetails, applyUrl: event.target.value });
  };

  const handleLogoUpload = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setLogo(imageList);
  };

  const handleGalleryUpload = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setGallery(imageList);
  };

  const handleJobExperience = (event) => {
    console.log(event);
    setJobDetails({...jobDetails, experience: event.target.value});
  }

  const addRole = () => {
    setRoles([...jobRoles, '']);
  };

  const handleRolesChange = (e) => {
      const updatedRoles = [...jobRoles];
      updatedRoles[e.target.dataset.order] = e.target.value;
      setRoles(updatedRoles);
  };

  const addSkill = () => {
    setSkills([...skills, {skill: '', level: 0}])
  }

  const handleSkillsChange = (e, order) => {
    let updatedSkills = [...skills];
    updatedSkills = updatedSkills.map(skill => {
      return {...skill}
    });
    console.log(order);
    updatedSkills[order].skill = e.target.value;
    setSkills(updatedSkills);
  }

  const handleSkillsLevelChange = (e) => {
    const updatedSkills = [...skills];
    updatedSkills[e.currentTarget.dataset.order][e.currentTarget.dataset.input] = parseInt(e.currentTarget.dataset.value);
    setSkills(updatedSkills);
  }

  const removeSkill = skill => {
    let updatedSkills = [
      ...skills
    ];

    const updatedSkills1 = updatedSkills.map(skill => {
      return {...skill}
    });

    console.log(updatedSkills1)

    const filtered = updatedSkills1.filter((value, index) => index !== skill);

    console.log(filtered)

    setSkills(filtered);
  }

  async function sendForm() {
    try {
      if(companyDetails.name && jobDetails.position && companyDetails.logo)
      if (
        companyDetails.name
        && companyDetails.description
        && companyDetails.logo
        && companyDetails.website
        && jobDetails.position
        && jobDetails.salaryBottom
        && jobDetails.salaryTop
        && jobDetails.descriptionA
        && jobDetails.cityId
      )
      {
        setSuccessAlert(true);
        await createImageCompanyJob(companyDetails, jobDetails);
        console.log('sent');
        history.push('/add-job-invoice');
      } else {
        console.log('missing required fields :(')
      }
    } catch (err) {
      console.log('error: ', err)
    }
  };

  if (successAlert) {
    return (<>
      <TopNav />
      <MDBAlert color='success'>
        <h4 className='alert-heading'>Your job offer has been sent!</h4>
        <p>
          Our team will verify the content within the next 24 hours.
        </p>
        </MDBAlert>
      </>
    );
  }

  if(benefits.length <= 0 || officePerks.length <= 0) {
   return <LinearProgress />
  }

  return (<div className={style.PostJob}>
    <TopNav />
    <Container>
      <div className={style.PostJob_mobileTop}>
        <button className={style.PostJob_mobileTop_btn}>
          <img
          src={arrowLeftDarkGray}
          />
        </button>
        <span className={style.PostJob_mobileTop_label}>Step 2 of 4</span>
      </div>
      <Timeline
      steps={[
        'Choose Plan',
        'Post Job',
        'Invoice',
        'Payment'
      ]}
      currentStep={2}
      />
      <div className={style.PostJob_top}>
        <Heading variant="h2">Post your Job</Heading>
        <p className={style.PostJob_top_description}>It will take 10 minutes</p>
      </div>
      <section className={style.PostJob_section}>
        <Heading variant="h3" className={style.PostJob_sectionHeading}>Step 1 (company details)</Heading>
        <div className={style.PostJob_row}>
          <ImageUploader
              images={logo}
              onChange={handleLogoUpload}
              label='Upload Company Logo'
              acceptType={['jpg','png']}
              className={style.PostJob_imageUploader}
          />
        <div className={[style.PostJob_row, style.PostJob_row__twoThird].join(' ')}>
          <div className={style.PostJob_input}>
            <MDBInput
            value={companyDetails.name}
            onChange={handleCompanyName}
            label='Company name *'
            />
          </div>
          <div className={style.PostJob_input}>
            <MDBInput
                value={companyDetails.industry}
                onChange={handleCompanyIndustry}
                label='Industry *'
            />
          </div>
          <div className={style.PostJob_input}>
            <MDBInput
            value={companyDetails.website}
            onChange={handleCompanyWebsite}
            label='Company website URL *'
            />
          </div>
          <div className={style.PostJob_input}>
            <MDBSelect
                options={[
                  {
                    text: '0-50',
                    value: '0-50'
                  },
                  {
                    text: '50-100',
                    value: '50-100'
                  },
                  {
                    text: '100-200',
                    value: '100-200'
                  }
                ]}
                selected={jobDetails.size}
                onChange={handleCompanySize}
                label='Employee count'
            />
          </div>
          <div className={style.PostJob_input}>
            <span className={style.PostJob_input_label}>Office location *</span>
            <div className={style.PostJob_salary}>
              <div className={[style.PostJob_salary_item].join(' ')}>
                <MDBAutocomplete
                    data={cities}
                    label='City'
                    clear
                    clearClass='clear-class'
                    clearColor='#a6a6a6'
                    clearSize='24'
                    id='city-location'
                    getValue={handleCity}
                    size='md'
                />
              </div>
              <div className={[style.PostJob_salary_item].join(' ')}>
                <MDBAutocomplete
                    label='Street'
                    clear
                    clearClass='clear-class'
                    clearColor='#a6a6a6'
                    clearSize='24'
                    id='street-location'
                    getValue={handleStreet}
                    size='md'
                />
              </div>
            </div>
          </div>
        </div>
        </div>
        <div>
          <MDBInput 
          value={companyDetails.description} 
          onChange={handleCompanyDescription}
          label='About your company *'
          type="textarea"
          rows="2"
          />
        </div>
      </section>
      <section className={style.PostJob_section}>
        <Heading variant="h3" className={style.PostJob_sectionHeading}>Step 2 (Job details)</Heading>
        <div className={style.PostJob_row}>
          <div className={style.PostJob_input}>
            <MDBInput 
            value={jobDetails.position}
            onChange={handleJobTitle}
            label='Job title'
            />
          </div>
          <div className={style.PostJob_input}>
            <MDBSelect
            options={[
              {
                text: 'Remote',
                value: '1'
              },
              {
                text: 'Standard',
                value: '2'
              }
            ]}
            selected={jobDetails.type}
            onChange={handleJobType}
            label='Job type'
            />
          </div>
          <div className={style.PostJob_input}>
            <MDBSelect
                options={[
                  {
                    text: 'Remote',
                    value: '1'
                  },
                  {
                    text: 'Standard',
                    value: '2'
                  }
                ]}
                selected={jobDetails.workLocation}
                onChange={handleWorkLocation}
                label='Work location'
            />
          </div>
          <div className={style.PostJob_input}>
            <span className={style.PostJob_input_label}>Experience Level</span>
            <div className={style.PostJob_radio}>
              <MDBInput 
              gap 
              onClick={handleJobExperience}
              checked={jobDetails.experience == 1 ? true : false}
              label="Junior"
              type="radio"
              id="experience1"
              value="1" 
              />
              <MDBInput 
              gap
              onClick={handleJobExperience}
              checked={jobDetails.experience == 2 ? true : false}
              label="Mid"
              type="radio"
              id="experience2"
              value="2"
              />
              <MDBInput
              gap
              onClick={handleJobExperience}
              checked={jobDetails.experience == 3 ? true : false}
              label="Senior"
              type="radio"
              id="experience3"
              value="3"
              />
            </div>
          </div>
          <div className={style.PostJob_input}>
            <span className={style.PostJob_input_label}>Salary</span>
            <div className={style.PostJob_salary}>
              <div className={[style.PostJob_salary_item, 'no-input-margins'].join(' ')}>
                <MDBAutocomplete
                  data={salaries}
                  clear
                  clearClass='clear-class'
                  clearColor='#a6a6a6'
                  clearSize='24'
                  id='salary-bottom'
                  getValue={handleSalaryBottom}
                  size='md'
                />
              </div>
              <div className={[style.PostJob_salary_item, 'no-input-margins'].join(' ')}>
                <MDBAutocomplete
                  data={salaries}
                  clear
                  clearClass='clear-class'
                  clearColor='#a6a6a6'
                  clearSize='24'
                  id='salary-top'
                  getValue={handleSalaryTop}
                  size='md'
                />
              </div>
            </div>
          </div>
          <div className={style.PostJob_input}>
            <MDBSelect
                options={cities.map(value => {
                  return {
                    text: value,
                    value: value
                  }
                })}
                selected={jobDetails.workLocation}
                onChange={handleCity}
                label='Job location'
            />
          </div>
        </div>
        <div style={{margin: '64px 0'}}>
          <MDBInput 
            value={jobDetails.descriptionA}
            onChange={handleDescription}  
            label='Job Description'
            type="textarea"
            rows="2"
          />
        </div>
        <div style={{margin: '64px 0'}}>
          <span className={style.PostJob_input_label}>Roles & Responsibilities</span>
          {jobRoles.map((val, order) => (
            <MDBInput 
            key={order}
            onChange={handleRolesChange}
            type="textarea"
            rows="1"
            data-order={order}
            value={val}
            hint='Type something...'
            />
          ))}
          <AddMoreButton onClick={addRole}>+ Add more</AddMoreButton>
        </div>
        <div className={style.PostJob_row}>
          <div className={style.PostJob_checkboxGroup}>
            <span className={style.PostJob_input_label}>Perks</span>
            <div className={style.PostJob_checkboxes}>
              { officePerks.map(item => (
                <MDBInput
                  value={item.name}
                  label={item.label}
                  checked={checkedPerks[item.name]}
                  onChange={handlePerksChange}
                  type='checkbox'
                  id={'perk' + item.name}
                  containerClass='my-3'
                />
                ))
              }
            </div>
          </div>
          <div className={style.PostJob_checkboxGroup}>
            <span className={style.PostJob_input_label}>Benefits</span>
            <div className={style.PostJob_checkboxes}>
              { benefits.map(item => (
                <MDBInput
                  value={item.name}
                  label={item.label}
                  checked={checkedBenefits[item.name]}
                  onChange={handleBenefitsChange}
                  type='checkbox'
                  id={'benefit' + item.name}
                  containerClass='my-3'
                />
              ))
              }
            </div>
          </div>
        </div>
      </section>
      <section className={style.PostJob_section}>
        <Heading variant="h3" className={style.PostJob_sectionHeading}>Step 3 (Required skillset)</Heading>
        <div className={style.PostJob_row}>
          {skills.map((val, order) => (
            <div key={order} className={[style.SkillInput, style.PostJob_input].join(' ')}>
              {order !== 0 &&
              <button
                  aria-label='remove'
                  className={style.SkillInput_removeBtn}
                  onClick={() => removeSkill(order)}
              />
              }
              <div className={style.SkillInput_top}>
                <span className={style.PostJob_input_label}>Skill {order + 1}</span>
                <MDBInput
                  id={'skillInput-' + order}
                  onChange={(e) => handleSkillsChange(e, order)}
                  size='md'
                  value={val.skill}
                />
              </div>
              <div className={style.SkillInput_bottom}>
                <span className={style.PostJob_input_label}>Select expertise</span>
                <ul className={style.SkillInput_level}>
                  {levels.map((level, index) => (
                    <li className={style.SkillInput_levelItem} key={index}>
                      <button 
                      className={style.SkillInput_button} 
                      data-order={order} 
                      data-input='level'
                      data-value={level.value}
                      onClick={handleSkillsLevelChange}
                      >
                        <img
                        src={acorn}
                        className={index+1 <= val.level ? style.SkillInput_icon : [style.SkillInput_icon, style.SkillInput_icon__grayscale].join(' ')}
                        />
                        <span className={style.SkillInput_label}>{level.text}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          <AddMoreButton onClick={addSkill} className={style.SkillInput_addMore}>+ Add more</AddMoreButton>
          <div className={style.PostJob_input}>
            
          </div>
        </div>
      </section>
      <section className={style.PostJob_section}>
        <Heading variant="h3" className={style.PostJob_sectionHeading}>Step 4 (Candidate action)</Heading>
        <div className={style.PostJob_applyOptions}>
          <span className={[style.PostJob_input_label, style.PostJob_applyOptions_label].join(' ')}>How do you want the candidate to apply for your job?</span>
          <MDBFormInline>
            <MDBInput
              onChange={() => setApplyOwn(false)}
              checked={!applyOwn}
              label='Apply through JobsForIT'
              labelClass='mr-5'
              gap
              type='radio'
              id='jfitApply'
            />
            <MDBInput
              onChange={() => setApplyOwn(true)}
              checked={!!applyOwn}
              label='Apply on your company website'
              labelClass='mr-5'
              gap
              type='radio'
              id='ownApply'
            />
          </MDBFormInline>
          { applyOwn &&
            <div className={style.PostJob_input}>
              <MDBInput
              value={jobDetails.applyUrl}
              onChange={handleApplyUrl}
              label='Company Job detail URL'
              />
            </div>
          }
        </div>
      </section>
      <div className={style.PostJob_buttons}>
          <Button variant='long primary' clicked={()=> sendForm()}>Submit job details</Button>
          <Button variant='long secondary'>Preview your Job</Button>
      </div>
    </Container>
  </div>);
}

export default NewJobContainer;
