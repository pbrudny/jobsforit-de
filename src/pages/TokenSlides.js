import React from 'react';
import {FullPage, Slide} from 'react-full-page';
import Slide1 from './tokenSlides/Slide1';
import Slide2 from './tokenSlides/Slide2';
import Slide3 from './tokenSlides/Slide3';
import TheEndSlide from './tokenSlides/TheEndSlide';

function TokenSlides() {
  return (
    <FullPage>
      <Slide style={{background: '#44546a'}}>
        <Slide1/>
      </Slide>
      <Slide style={{background: '#4ac9e3'}}>
        <Slide2/>
      </Slide>
      <Slide style={{background: '#fd6c7d'}}>
        <Slide3/>
      </Slide>
      <Slide style={{background: '#000000'}}>
        <TheEndSlide/>
      </Slide>
    </FullPage>
  );
}

export default TokenSlides;
