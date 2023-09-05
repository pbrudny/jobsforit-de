import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';
import {Link} from "react-router-dom";
import windowSize from "react-window-size";
import Slide1Mobile from "./Slide1Mobile";
import TheEndSlideMobile from "./TheEndSlideMobile";

const styles = theme => ({
  container1: {
    "fontFamily": "Arial, 'Helvetica Neue', Helvetica, sans-serif",
    "color": "#333",
    "fontSize": "14px",
    "lineHeight": "20px",
    "boxSizing": "border-box",
    "position": "absolute",
    "left": "0%",
    "top": "0%",
    "right": "0%",
    "bottom": "auto",
    "maxWidth": "100%",
    "minHeight": "100%",
    "marginRight": "auto",
    "marginLeft": "auto",
    "padding": "30px",
    "backgroundColor": "#44546a"
  },
  theEnd: {
    paddingTop: '10%',
    width: '70%',
    marginLeft: '15%'
  },
  theEndImage: {
    width: '40%',
    paddingTop: '10%',
    paddingBottom: '3rem',
    position: 'relative',
    marginLeft: '20%'
  },
  goBackImage: {
    width: '40%',
    marginLeft: '20%',
  },
  theEndTitle: {
    color: 'white',
    fontSize: '3rem'
  }
});

function TheEndSlide(props) {
  const {classes, windowWidth} = props;

  if (windowWidth < 960) {
    return (<TheEndSlideMobile/>)
  } else {
    return <>
      <Grid container>
        <Grid item
              md={10} style={{textAlign: 'center'}}
        >
          <img
            src={"https://media.giphy.com/media/3ohs86vZAWiJXWvQI0/giphy.gif"}
            className={classes.theEndImage}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={10} style={{textAlign: 'center'}}>
          <Link to={'/'} style={{color: 'white'}}>
            <img
              src={'https://media.giphy.com/media/hsPUkN1zcuw7vDlBYI/giphy.gif'}
              className={classes.goBackImage}
            />
          </Link>
        </Grid>
      </Grid>
    </>
  }
}

TheEndSlide = windowSize(TheEndSlide);

export default withStyles(styles)(TheEndSlide);
