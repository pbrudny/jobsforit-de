import React from "react";
import PropTypes from 'prop-types';

import Paper from "@material-ui/core/Paper/Paper";
import {withStyles} from '@material-ui/core/styles';
import {Col, Row} from "antd";
import Button from "common/Button/Button";
import store from "../../stores/store";

const styles = theme => (
  {
    sticker: {
      margin: '2rem 35%',
      width: '30%',
      textAlign: 'center'
    }
  }
);

const ZeroJobs = (props) => {
  const resetAllFilters = () => {
    store.resetAllFilters();
  }

  const {classes} = props;

  return (
    <Paper style={{paddingBottom: "50%"}}>
      <Row>
        <Col span={10}>
          <h1 style={{paddingBottom: "30px", paddingTop: "2rem", textAlign: "center"}}>
            <span>Zero jobs like this 🙁</span>
          </h1>
        </Col>
        <Col span={3}></Col>
      </Row>
      <Row>
        <Col span={10}>
          <h3 style={{paddingBottom: "30px", paddingTop: "2rem", textAlign: "center"}}>
            <Button variant="primary long" clicked={resetAllFilters}>
              Reset filters
            </Button>
          </h3>
        </Col>
      </Row>
    </Paper>
  );
}

ZeroJobs.propTypes = {
  classes: PropTypes.any,
  onClick: PropTypes.func
};

export default withStyles(styles)(ZeroJobs);
