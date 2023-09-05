import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';

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
    paddingTop: '1vh',
    "paddingBottom": "0px",
    height: '7vh',
  },
  slideTitle: {
    "marginBottom": "0px",
    "fontFamily": "Roboto, sans-serif",
    "fontSize": "2.5vh",
    "color": "#fff",
    "fontWeight": "600",
    "textAlign": "center",
  },
});

function Slide2Mobile(props) {
  const {classes} = props;

  return (
    <div className={classes.section2}>
      <Grid container>
        <Grid item style={{textAlign: 'center'}} xs={2}>
          <img
            src="https://uploads-ssl.webflow.com/5dbecdac9c1a0177bb3a2f8e/5dbf766a5533475d738ff59b_image9.gif"
            className={classes.image3}
            alt={"section"}
          />
        </Grid>
        <Grid item xs={8} style={{paddingTop: '3vh', textAlign: 'center'}}>
          <span className={classes.slideTitle}>Oh. You are still here? <br />
            That is so nice</span>
        </Grid>
        <Grid item xs={2} style={{textAlign: 'center'}}>
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

export default withStyles(styles)(Slide2Mobile);
