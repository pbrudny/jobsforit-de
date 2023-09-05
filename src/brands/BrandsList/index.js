import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router";
import { getCompanies } from '../../contentfulClient';
import {LinearProgress, withStyles} from "@material-ui/core";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdbreact/dist/css/mdb.css";
import 'mdb-overrides.css';

import TopNav from "../../common/TopNav/TopNav";
import Container from '../../common/Container/Container';
import style from './style.module.scss';
import BrandsFilterBar from "../BrandsFilterBar";
import {Link} from "react-router-dom";
import BrandsSection from '../BrandsSection';

import companyLogo from '../../assets/img/our-partners-logo.svg';
import companyImg from '../../assets/img/temp-company-profile-background.png';

function BrandsList (props) {
  const history = useHistory();
  const { classes } = props;

  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    getCompanies().then(
      response => {
        const items = response.items.map(i => {
          return {
            name: i.fields.name,
            fullName: i.fields.fullName,
            logo: i.fields.logo,
            size: i.fields.size,
            sys: i.sys,
            culture: i.fields.culture,
          }}
          );
        setCompanies(items);
      }
    );
  }, []);

  if(companies.length <= 0) {
   return <LinearProgress />
  }

  return (<>
    <TopNav />
    <BrandsFilterBar/>
    <div style={{backgroundColor: '#f5f5f5'}}>
      <Container>
        <div className={style.BrandsList_list}>
          <BrandsSection 
          title={'Popularly Searched'}
          items={[
            {
              id: 1,
              name: 'Airtel Pvt Ltd.',
              category: 'Industry',
              img: companyImg,
              logo: companyLogo,
              link: '/company'
            },
            {
              id: 2,
              name: '1336 Studios',
              category: 'Game Dev',
              img: companyImg,
              logo: companyLogo,
              link: '/company'
            },
            {
              id: 3,
              name: '4Com',
              category: 'Lifestyle',
              img: companyImg,
              logo: companyLogo,
              link: '/company'
            },
            {
              id: 3,
              name: '4Com',
              category: 'Lifestyle',
              img: companyImg,
              logo: companyLogo,
              link: '/company'
            },
          ]}
          />
          <BrandsSection 
          title={'Rising Companies'}
          items={[
            {
              id: 1,
              name: 'Airtel Pvt Ltd.',
              category: 'Industry',
              img: companyImg,
              logo: companyLogo,
              link: '/company'
            },
            {
              id: 2,
              name: '1336 Studios',
              category: 'Game Dev',
              img: companyImg,
              logo: companyLogo,
              link: '/company'
            },
            {
              id: 3,
              name: '4Com',
              category: 'Lifestyle',
              img: companyImg,
              logo: companyLogo,
              link: '/company'
            },
          ]}
          />
          <BrandsSection 
          title={'All Companies'}
          items={[
            {
              id: 1,
              name: 'Airtel Pvt Ltd.',
              category: 'Industry',
              img: companyImg,
              logo: companyLogo,
              link: '/company'
            },
            {
              id: 2,
              name: '1336 Studios',
              category: 'Game Dev',
              img: companyImg,
              logo: companyLogo,
              link: '/company'
            },
            {
              id: 3,
              name: '4Com',
              category: 'Lifestyle',
              img: companyImg,
              logo: companyLogo,
              link: '/company'
            },
          ]}
          />
        </div>
      </Container>
    </div>
  </>);
}

export default BrandsList;
