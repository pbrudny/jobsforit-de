import React from 'react';
import { Paper } from '@material-ui/core';
import Grid from "@material-ui/core/Grid/Grid";
import { SentimentDissatisfied } from "@material-ui/icons";
import Giphy from "react-hooks-giphy";
import logo from 'assets/img/vectorpaint.png';

const NotMobile = () => {
  return (
    <Grid container justify = "center">
      <Paper style={{padding: 20, margin: 30}}>
        <div style={{marginLeft: '30%', width: '100px'}}>
          <img src={logo} style={{height: '28px', marginBottom: '1rem'}} alt="JobsForIT.de" />
        </div>
        <Giphy
          tag="I'm sorry"
          style={{marginTop: '1rem', maxWidth: '300px'}}
        />
        <h3 style={{textAlign: 'center'}}>We are not on mobile yet. <SentimentDissatisfied /></h3>
      </Paper>
    </Grid>
  )
};

export default NotMobile;
