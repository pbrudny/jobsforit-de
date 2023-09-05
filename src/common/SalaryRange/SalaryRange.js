import React, {Component} from "react";
import NumberFormat from "react-number-format";
import PropTypes from "prop-types";
import {ThemeContext} from "../../themeContext";

import style from './style.module.scss';

class SalaryRange extends Component {

  getSalaryValue(value, short) {
    if(short) {
      return value > 1000 ? value.toString().slice(0, -3) : value;
    }

    return value;
  }

  getSalarySuffix(value) {
    return value > 1000 ? 'k' : '';
  }

  render() {
    const { job, short } = this.props;
    const displayBottom = job.fields.localCurrency ? job.fields.salaryBottomLocal : job.fields.salaryBottom;
    const displayTop = job.fields.localCurrency ? job.fields.salaryTopLocal : job.fields.salaryTop;
    const displayCurrency = job.fields.localCurrency || "€";

    const classes = [style.SalaryRange];
    const themeContext = this.context;

    if(this.props.className) {
      classes.push(this.props.className);
    }

    if (themeContext.theme === 'dark') {
      classes.push(style.SalaryRange_dark);
    } else {
      classes.push(style.SalaryRange_light);
    }
    return <strong>
      <span className={classes.join(' ')}>
        <NumberFormat
          value={this.getSalaryValue(displayBottom, short)}
          displayType={"text"}
          thousandSeparator={"."}
          decimalSeparator={","}
          prefix={displayCurrency}
          suffix={short ? this.getSalarySuffix(displayBottom) : ''}
        />
        {" - "}
        <NumberFormat
          value={this.getSalaryValue(displayTop, short)}
          displayType={"text"}
          thousandSeparator={"."}
          decimalSeparator={","}
          prefix={displayCurrency}
          suffix={short ? this.getSalarySuffix(displayTop) : ''}
        />
      </span>
    </strong>;
  }
}

SalaryRange.contextType = ThemeContext;
SalaryRange.propTypes = {job: PropTypes.any};

export default SalaryRange;
