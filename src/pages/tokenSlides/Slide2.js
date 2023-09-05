import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';
import windowSize from "react-window-size";
import Slide2Mobile from "./Slide2Mobile";

const styles = theme => ({
  section2: {
    "position": "relative",
    "height": "100%",
    "maxHeight": "100vh",
    "minHeight": "100vh",
    "padding": "2vh",
    "backgroundColor": "#4ac9e3"
  },
  image3: {
    paddingTop: '2vh',
    "paddingBottom": "0px",
    height: '12vh',
  },
  slideTitle: {
    "marginBottom": "0px",
    "paddingRight": "3vh",
    "paddingLeft": "3vh",
    "fontFamily": "Roboto, sans-serif",
    "color": "#fff",
    "fontSize": "3.4vw",
    "fontWeight": "600",
    "textAlign": "center",
  },
});

function Slide2(props) {
  const {classes, windowWidth} = props;

  if (windowWidth < 960) {
    return (<Slide2Mobile/>)
  } else {
    return (
      <div className={classes.section2}>
        <Grid container>
          <Grid item style={{textAlign: 'center'}} md={2} xs={2}>
            <img
              src="https://uploads-ssl.webflow.com/5dbecdac9c1a0177bb3a2f8e/5dbf766a5533475d738ff59b_image9.gif"
              className={classes.image3}
              alt={"section"}
            />
          </Grid>
          <Grid item md={8} xs={7} style={{paddingTop: '3vh', textAlign: 'center'}}>
            <span className={classes.slideTitle}>Oh. You are still here? That is so nice</span>
          </Grid>
          <Grid item md={2} xs={2} style={{textAlign: 'center'}}>
            <img
              src="https://uploads-ssl.webflow.com/5dbecdac9c1a0177bb3a2f8e/5dbf766a5533475d738ff59b_image9.gif"
              className={classes.image3}
              alt={"rules"}
            />
          </Grid>
        </Grid>
        <Grid container style={{marginTop: "5vh"}}>
          <Grid item md={12} style={{textAlign: 'center', marginTop: "5vh"}}>
            <img src={"https://media.giphy.com/media/fn7DIqkuEuzFhjlr2k/giphy-downsized-large.gif"}/>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Slide2 = windowSize(Slide2);
export default withStyles(styles)(Slide2);
