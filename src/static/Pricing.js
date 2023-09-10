import React, { useState } from 'react';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
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

const PLANS_DATA = [
  {
    planName: 'Premium+',
    normalPrice: '€250',
    promoPrice: '€200',
    promoText: 'You save €50!',
    bulletList: [
      'Job Offer 60 days listed',
      'Visualization with Company Logo & Technology Tags',
      'Individual Customer Care',
      '2 bump-ups',
      'Social Media Posts in our and several IT job groups',
    ]
  },
  {
    planName: 'Premium',
    normalPrice: '€200',
    promoPrice: '€160',
    promoText: 'You save €40!',
    large: true,
    label: 'Most\u00A0Popular',
    bulletList: [
      'Job Offer 30 days listed',
      'Visualization with Company Logo & Technology Tags',
      'Individual Customer Care',
      '1 bump-up',
      'Social Media Posts in our and several IT job groups',
    ]
  },
  {
    planName: 'Standard',
    normalPrice: '€150',
    promoPrice: '€125',
    promoText: 'You save €25!',
    bulletList: [
      'Job Offer 30 days listed',
      'Visualization with Company Logo & Technology Tags',
      'Individual Customer Care',
    ]
  }
];

const Pricing = () => {
  const [accordionItems, setAccordionItems] = useState([
    // ... your initial accordion items
  ]);

  const toggleAccordionItem = index => {
    const newAccordionItems = [...accordionItems];
    newAccordionItems[index].isActive = !newAccordionItems[index].isActive;
    setAccordionItems(newAccordionItems);
  };


  const handlePlanClick = () => {
    window.location.href = "mailto:hello@jobsforit.de?subject=I want to post a new job";
  };

  SwiperCore.use([Pagination, Navigation]);

  return (
    <>
      <TopNav />
      <div className={`${staticStyle.Static} ${style.Pricing}`}>
        <Container>
          <div className={staticStyle.Static_top}>
            <button className={staticStyle.Static_top_btn}>
              <img src={arrowLeftDarkGray} alt="Arrow Left" />
            </button>
          </div>
          <div className={style.Pricing_top}>
            <Heading variant='h1' className={style.Pricing_heading}>
              Find digital talent and
              <br />
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
              className={`${style.Pricing_plans_slider} swiper-align-center`}
            >
              {PLANS_DATA.map((plan, index) => (
                <SwiperSlide key={index} className={style.Pricing_plans_slide}>
                  <PricingTableItem
                    bordered
                    {...plan}
                    buttonText='Get started'
                    onClick={handlePlanClick}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className={style.Pricing_plans_desktopBoxes}>
              {PLANS_DATA.map((plan, index) => (
                <div key={index} className={`${style.Pricing_plans_desktopBox} ${plan.large ? style.Pricing_plans_desktopBox__large : ''}`}>
                  <PricingTableItem
                    bordered
                    {...plan}
                    buttonText='Get started'
                    onClick={handlePlanClick}
                  />
                </div>
              ))}
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Pricing;
