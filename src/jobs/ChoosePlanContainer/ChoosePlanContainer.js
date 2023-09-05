import React, { Component } from 'react';
import store from '../../stores/store';
import { observer } from "mobx-react";
// import {LinearProgress, Button, withStyles} from "@material-ui/core";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "bootstrap-css-only/css/bootstrap.min.css";
// import "mdbreact/dist/css/mdb.css";
// import 'mdb-overrides.css';

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBIcon,
  MDBTooltip,
  MDBBadge,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBBtn
} from "mdbreact";

import TopNav from "../../common/TopNav/TopNav";

import {isMobile, isTablet} from "react-device-detect";
import windowSize from 'react-window-size';
import SectionContainer from "../../common/sectionContainer";
import history from "../../history";

const styles = theme => ({
  bulletList: {
    textAlign: 'left',
    marginLeft: '12%'
  }
});

class ChoosePlanContainer extends Component {
  showModal(evt) {
    const pricePackage = evt.currentTarget.value;
    history.push('/add-job');
  }

  render() {
    const logoVisible = 'Company Logo and Technology Tags visible';
    const customCare = 'Individual Custom Care';
    const offer30days = 'Listing offer for 30 days';
    const { classes } = this.props;

    return (<>
      <TopNav />
      <MDBContainer>
      <SectionContainer tag="section" className="text-center">
        <h2 className="h1-responsive font-weight-bold text-center my-5">Our pricing plans</h2>
        <p className="grey-text text-center w-responsive mx-auto mb-5">
          Find the right package
        </p>
        <MDBRow>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBCard pricing>
              <div className="price header white-text deep-purple rounded-top">
                <h2 className="number">125</h2>
                <div className="version">
                  <h5 className="mb-0" style={{color: 'white'}}>Professional</h5>
                </div>
                <div className="ribbon ribbon-top-right"><span>75 Eur</span></div>
              </div>
              <MDBCardBody className="striped mb-1">
                <ul className={classes.bulletList}>
                  <li>
                    <p className="mt-2">
                      <MDBIcon icon="check" className="green-text pr-2" />
                      Listing offer for 60 days
                    </p>
                  </li>
                  <li>
                    <p className="mt-2">
                      <MDBIcon icon="check" className="green-text pr-2" />
                      {logoVisible}
                    </p>
                  </li>
                  <li>
                    <p>
                      <MDBIcon icon="check" className="green-text pr-2" />
                      2x Refresh of the offer
                    </p>
                  </li>
                  <li>
                    <p>
                      <MDBIcon icon="check" className="green-text pr-2" />
                      Individual Promotion on Social Media
                    </p>
                  </li>
                  <li>
                    <p>
                      <MDBIcon icon="check" className="green-text pr-2" />
                      {customCare}
                    </p>
                  </li>
                  <li>
                    <p>
                      <MDBIcon icon="check" className="green-text pr-2" />
                      Newsletter Promotion
                    </p>
                  </li>
                </ul>
                <button
                  className="btn-deep-purple btn Ripple-parent"
                  value={'an Enterprise'}
                  onClick={this.showModal}
                >
                  Buy now
                </button>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBCard pricing>
              <div className="price header white-text indigo rounded-top">
                <h2 className="number">75</h2>
                <h6 style={{color: 'white', marginTop: '-1.72rem'}}>Recommended</h6>
                <div className="version">
                  <h5 className="mb-0" style={{color: 'white'}}>Standard</h5>
                </div>
                <div className="ribbon ribbon-top-right"><span>25 Eur</span></div>
              </div>
              <MDBCardBody className="striped mb-1">
                <ul className={classes.bulletList}>
                  <li>
                    <p className="mt-2">
                      <MDBIcon icon="check" className="green-text pr-2" />
                      { offer30days }
                    </p>
                  </li>
                  <li>
                    <p className="mt-2">
                      <MDBIcon icon="check" className="green-text pr-2" />
                      {logoVisible}
                    </p>
                  </li>
                  <li>
                    <p>
                      <MDBIcon icon="check" className="green-text pr-2" />
                      1x Refresh of the offer
                    </p>
                  </li>
                  <li>
                    <p>
                      <MDBIcon icon="check" className="green-text pr-2" />
                      Promotion on Social Media
                    </p>
                  </li>
                  <li>
                    <p>
                      <MDBIcon icon="check" className="green-text pr-2" />
                      {customCare}
                    </p>
                  </li>
                  <li>
                    <p><MDBIcon className="green-text pr-2" /></p>
                  </li>
                </ul>
                <button
                  className="btn-indigo btn Ripple-parent"
                  value={'a Standard'}
                  onClick={this.showModal}
                >
                  Buy now
                </button>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBCard pricing>
              <div className="price header white-text blue rounded-top">
                <h2 className="number">55</h2>
                <div className="version">
                  <h5 className="mb-0" style={{color: 'white'}}>Starter</h5>
                </div>
                <div className="ribbon ribbon-top-right"><span>FREE</span></div>
              </div>
              <MDBCardBody className="striped mb-1">
                <ul className={classes.bulletList}>
                  <li>
                    <p className="mt-2">
                      <MDBIcon icon="check" className="green-text pr-2" />
                      {offer30days}
                    </p>
                  </li>
                  <li>
                    <p>
                      <MDBIcon icon="check" className="green-text pr-2" />
                      {logoVisible}
                    </p>
                  </li>
                  <li>
                    <p><MDBIcon className="green-text pr-2" /></p>
                  </li>
                  <li>
                    <p><MDBIcon className="green-text pr-2" /></p>
                  </li>
                  <li>
                    <p><MDBIcon className="green-text pr-2" /></p>
                  </li>
                  <li>
                    <p><MDBIcon className="green-text pr-2" /></p>
                  </li>
                </ul>
                <button
                  className="btn-blue btn Ripple-parent"
                  value={'a Basic'}
                  onClick={this.showModal}
                >
                  Buy now
                </button>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </SectionContainer>
      </MDBContainer>
    </>);
  }
}

// ChoosePlanContainer = withStyles(styles)(ChoosePlanContainer);
export default ChoosePlanContainer;
