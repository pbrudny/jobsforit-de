import React, { Component, useState, useEffect } from 'react';
import { useHistory } from "react-router";

import { MDBInput } from "mdbreact";

import Container from '../../common/Container/Container';
import TopNav from '../../common/TopNav/TopNav';
import Timeline from '../../common/Timeline';
import Message from '../../common/Message';
import Heading from '../../common/Heading';
import ImageUploader from '../../common/ImageUploader';
import AddMoreButton from '../../common/AddMoreButton/AddMoreButton';
import Button from '../../common/Button/Button';

import acorn from '../../assets/img/icons-new-design/acorn.svg';
import arrowLeftDarkGray from '../../assets/img/icons-new-design/arrow--left--dark-gray.svg';


import style from './style.module.scss';

function InvoiceDetails (props) {

  const history = useHistory();

  const [invoiceDetails, setInvoiceDetails] = useState({});

  const handleRecruiterName = (event) => {
    setInvoiceDetails({...invoiceDetails, recruiterName: event.target.value });
  };

  const handleCompanyName = (event) => {
    setInvoiceDetails({...invoiceDetails, companyName: event.target.value });
  };

  const handleVat = (event) => {
    setInvoiceDetails({...invoiceDetails, vat: event.target.value });
  }

  const handleCompanyAddress = (event) => {
    setInvoiceDetails({...invoiceDetails, companyAddress: event.target.value });
  }

  const proceedToPayment = () => {
    console.log('Poceed to payment')
  }

  const cancelPayment = () => {
    history.push('/add-job');
  }

  return(
    <>
      <TopNav />
      <Container>
          <div className={style.PostJob_mobileTop}>
            <button onClick={cancelPayment} className={style.PostJob_mobileTop_btn}>
              <img
              src={arrowLeftDarkGray}
              />
            </button>
            <span className={style.PostJob_mobileTop_label}>Step 3 of 4</span>
          </div>
          <Timeline
          steps={[
            'Choose Plan',
            'Post Job',
            'Invoice',
            'Payment'
          ]}
          currentStep={3}
          />
          <div className={style.PostJob_top}>
            <Heading variant="h1">Invoice Details</Heading>
          </div>
          <section className={style.PostJob_section}>
            <div className={style.PostJob_row}>
              <div className={style.PostJob_input}>
                <MDBInput 
                value={invoiceDetails.recruiterName}
                onChange={handleRecruiterName}
                label='Recruiter Name'
                />
              </div>
              <div className={style.PostJob_input}>
                <MDBInput 
                value={invoiceDetails.companyName}
                onChange={handleCompanyName}
                label='Company Name'
                />
              </div>
              <div className={style.PostJob_input}>
                <MDBInput 
                value={invoiceDetails.vat}
                onChange={handleVat}
                label='VAT no. of company'
                />
              </div>
              <div className={style.PostJob_input}>
                <MDBInput 
                type='textarea'
                rows='3'
                value={invoiceDetails.companyAddress}
                onChange={handleCompanyAddress}
                label='Company Address'
                />
              </div>
            </div>
          </section>
          <div className={style.PostJob_buttons}>
            <Button variant='long primary' clicked={proceedToPayment}>Proceed to payment</Button>
            <Button variant='long secondary' clicked={cancelPayment}>Cancel</Button>
          </div>
      </Container>
    </>
  )
}

export default InvoiceDetails;