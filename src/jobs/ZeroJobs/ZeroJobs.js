import React from "react";
import PropTypes from 'prop-types';

import Paper from "@material-ui/core/Paper";
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from "common/Button/Button"; // Assuming your custom button component
import store from "../../stores/store";

const styles = theme => ({
  sticker: {
    margin: '2rem 35%',
    width: '30%',
    textAlign: 'center'
  }
});

const ZeroJobs = (props) => {
  const resetAllFilters = () => {
    store.resetAllFilters();
  }

  const { classes } = props;

  return (
    <Paper style={{ paddingBottom: "50%" }}>
      <Grid container>
        <Grid item xs={10}>
          <h1 style={{ paddingBottom: "30px", paddingTop: "2rem", textAlign: "center" }}>
            <span>Zero jobs like this 🙁</span>
          </h1>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
      <Grid container>
        <Grid item xs={10}>
          <h3 style={{ paddingBottom: "30px", paddingTop: "2rem", textAlign: "center" }}>
            <Button variant="primary long" clicked={resetAllFilters}>
              Reset filters
            </Button>
          </h3>
        </Grid>
      </Grid>
    </Paper>
  );
}

ZeroJobs.propTypes = {
  classes: PropTypes.any,
  onClick: PropTypes.func
};

export default withStyles(styles)(ZeroJobs);
