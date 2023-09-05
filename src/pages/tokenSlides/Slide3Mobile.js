import React from 'react';
import {Grid} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
  heading3: {
    "position": "static",
    "marginTop": "3vh",
    "fontFamily": "Roboto, sans-serif",
    "color": "#fff",
    "fontSize": "2vh",
    "fontWeight": "400",
    "textAlign": "center"
  },
  developers: {
    "color": "#ef5d68"
  },
  heart: {
    "color": "#ef5d68"
  },
  whyTextWrapper: {
    "display": "block",
    "marginRight": "0px",
    "marginBottom": "0px",
    "marginLeft": "0px",
    "padding": "1.5vh",
    "backgroundColor": "#35dda2",
    "color": "#333"
  },
  textWrapper: {
    "paddingLeft": "20%",
    "paddingTop": "1vh"
  },
  fireGif: {
    height: '8vh'
  },
  iconWrapper: {
    width: '30%',
    margin: '0 35%',
    height: '20vh'
  },
  transparencyWrapper: {
    "fontFamily": "Arial, 'Helvetica Neue', Helvetica, sans-serif",
    "color": "#333",
    "fontSize": "2vh",
    "lineHeight": "20vh",
    "boxSizing": "border-box",
    "position": "relative",
    "left": "0px",
    "top": "14vh",
    "display": "block",
    "width": "40vh",
    "height": "65vh",
    "marginRight": "2vh",
    "marginLeft": "2vh",
    "paddingTop": "0px",
    "paddingLeft": "0px",
    "borderStyle": "solid",
    "borderWidth": "0.5vh",
    "backgroundColor": "transparent",
    "borderColor": "#e01563"
  },
  transparencyHeader: {
    "boxSizing": "border-box",
    "fontWeight": "bold",
    "lineHeight": "3.4vh",
    "margin": "2.5vh 1.6vh 0.9vh",
    "paddingTop": "0.3vh",
    "paddingBottom": "0.3vh",
    "borderStyle": "solid",
    "borderWidth": "0.4vh",
    "borderRadius": "4vh",
    "fontSize": "2.2vh",
    "fontFamily": "Roboto, sans-serif",
    "textAlign": "center",
    "backgroundColor": "azure",
    "borderColor": "#08afc3",
    "color": "#e01563"
  },
  slideTitle: {
    "marginBottom": "0px",
    "paddingRight": "2vw",
    "paddingLeft": "2vw",
    "fontFamily": "Roboto, sans-serif",
    "color": "#fff",
    "fontSize": "2.8vh",
    "fontWeight": "600",
    "textAlign": "center"
  },
  section3: {
    "position": "relative",
    "display": "block",
    "height": "100%",
    "minHeight": "100vh",
    "backgroundColor": "#fd6c7d"
  },
  image5: {
    "position": "relative",
    "left": "-1vh",
  },
  pioWrapper: {
    border: "solid 8px #74ffe1",
    margin: "1vh",
    height: '15vh',
    width: '80vw',
  },
  growthIcon: {
    "fontFamily": "Arial, 'Helvetica Neue', Helvetica, sans-serif",
    "color": "#333",
    "fontSize": "1.4vh",
    "lineHeight": "2vh",
    "height": "4.4vh",
    "boxSizing": "border-box",
    "border": "0",
    "maxWidth": "100%",
    "verticalAlign": "middle",
    "display": "inline-block",
    "position": "relative",
    "left": "-1vh"
  },
  mattImage: {
    "fontFamily": "Arial, 'Helvetica Neue', Helvetica, sans-serif",
    "color": "#333",
    "fontSize": "1.4vh",
    "lineHeight": "2vh",
    "border": "1px none #000",
    "textAlign": "center",
    "paddingLeft": "10%",
  },
  icon: {
    height: '5vh',
    paddingBottom: '2vh',
    paddingRight: '0.8vh'
  },
  iconLabel: {
    "textAlign": "center",
    "padding": "1vh"
  },
  stepLabel: {
    "fontFamily": "Roboto, sans-serif",
    "fontSize": "3vh",
    "fontWeight": "500",
    "color": "#44546a",
    "textAlign": "center",
    "paddingTop": "0.6vh"
  }
});

function Slide3Mobile(props) {
  const {classes} = props;
  return (
    <div className={classes.section3}>
      <Grid container>
        <Grid item xs={1} style={{textAlign: 'center'}}>
          <img
            src="https://uploads-ssl.webflow.com/5dbecdac9c1a0177bb3a2f8e/5dbf7ab98b310728988fd4d3_image10.gif"
            className={classes.fireGif}
            alt={"section"}
          />
        </Grid>
        <Grid item xs={10} style={{paddingTop: '3vh', textAlign: 'center'}}>
          <span className={classes.slideTitle}>For your bravery we want to give you $J4IT tokens</span>
          <h2 className={classes.heading3}>
            (after all we have few millions of them...)
          </h2>
        </Grid>
        <Grid item xs={1} style={{textAlign: 'center'}}>
          <img
            src="https://uploads-ssl.webflow.com/5dbecdac9c1a0177bb3a2f8e/5dbf7ab98b310728988fd4d3_image10.gif"
            className={classes.fireGif}
            alt={"crew"}
          />
        </Grid>
      </Grid>

      <Grid
        container
        alignItems="center"
        direction="column"
        justifyContent="space-between"
      >
        <Grid item xs={12}>
          <div className={classes.pioWrapper}>
            <h2 className={classes.stepLabel}>Step 1.</h2>
            <h2 className={classes.heading3}>
              Visit our <a style={{textDecoration: 'underline', color: '#ffd201'}}
                           href={"https://izdsrzcxwbao.usemoralis.com/"}>airdrop site</a>
            </h2>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.pioWrapper}>
            <h2 className={classes.stepLabel}>Step 2.</h2>
            <h2 className={classes.heading3}>
              Connect your Metamask wallet
            </h2>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.pioWrapper}>
            <h2 className={classes.stepLabel}>Step 3.</h2>
            <h2 className={classes.heading3}>
              Receive tokens to your wallet
            </h2>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.pioWrapper}>
            <h2 className={classes.stepLabel}>Step 4.</h2>
            <h2 className={classes.heading3}>
              Enjoy your new and better life
            </h2>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Slide3Mobile);
