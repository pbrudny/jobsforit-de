import React, { Component } from 'react';
import { Paper } from '@material-ui/core';
import Grid from "@material-ui/core/Grid/Grid";
import { SentimentDissatisfied } from "@material-ui/icons";
import TopNav from "../common/TopNav/TopNav";
import {isMobile, isTablet} from "react-device-detect";
import Error404Gif from "../common/Error404Gif";
import MobileTopNav from "../common/MobileTopNav";
import windowSize from "react-window-size";

class NotFound extends Component {
  render() {
    const mobileTablet = isMobile || isTablet || this.props.windowWidth < 1100;
    if (mobileTablet) {
      return (
        <>
          <MobileTopNav />
          <Paper style={{
            width: '100vw',
            margin: '0 auto',
            height: '90vh',
            padding: '3rem'
          }}>
            <h3 style={{textAlign: 'center', marginBottom: '2rem'}}>Page not found <SentimentDissatisfied /></h3>
            <Grid container justify = "center">
              <Grid item>
                <Error404Gif small />
              </Grid>
            </Grid>
          </Paper>
        </>
      )
    }
    return (
      <>
        <TopNav />
        <Paper style={{
          width: '100%',
          margin: '0 auto',
          height: '95vh',
          padding: '3rem'
        }}>
          <h2 style={{textAlign: 'center', marginBottom: '2rem'}}>Page not found <SentimentDissatisfied /></h2>
          <Grid container justify = "center">
            <Grid item>
              <Error404Gif />
            </Grid>
          </Grid>
        </Paper>
      </>
    )
  }
}

NotFound = windowSize(NotFound);
export default NotFound;
