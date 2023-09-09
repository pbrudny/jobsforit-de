import React, { useContext } from "react";
import NumberFormat from "react-number-format";
import PropTypes from "prop-types";
import { ThemeContext } from "../../themeContext";

import style from './style.module.scss';

const getSalaryValue = (value, short) => {
  if (short) {
    return value > 1000 ? value.toString().slice(0, -3) : value;
  }
  return value;
}

const getSalarySuffix = (value) => {
  return value > 1000 ? 'k' : '';
}

const SalaryRange = ({ job, short, className }) => {
  const displayBottom = job.fields.localCurrency ? job.fields.salaryBottomLocal : job.fields.salaryBottom;
  const displayTop = job.fields.localCurrency ? job.fields.salaryTopLocal : job.fields.salaryTop;
  const displayCurrency = job.fields.localCurrency || "€";

  const themeContext = useContext(ThemeContext);

  const classes = [style.SalaryRange];
  if (className) {
    classes.push(className);
  }
  if (themeContext.theme === 'dark') {
    classes.push(style.SalaryRange_dark);
  } else {
    classes.push(style.SalaryRange_light);
  }

  return (
    <strong>
            <span className={classes.join(' ')}>
                <NumberFormat
                  value={getSalaryValue(displayBottom, short)}
                  displayType={"text"}
                  thousandSeparator={"."}
                  decimalSeparator={","}
                  prefix={displayCurrency}
                  suffix={short ? getSalarySuffix(displayBottom) : ''}
                />
              {" - "}
              <NumberFormat
                value={getSalaryValue(displayTop, short)}
                displayType={"text"}
                thousandSeparator={"."}
                decimalSeparator={","}
                prefix={displayCurrency}
                suffix={short ? getSalarySuffix(displayTop) : ''}
              />
            </span>
    </strong>
  );
}

SalaryRange.propTypes = {
  job: PropTypes.shape({
    fields: PropTypes.shape({
      localCurrency: PropTypes.string,
      salaryBottomLocal: PropTypes.number,
      salaryBottom: PropTypes.number,
      salaryTopLocal: PropTypes.number,
      salaryTop: PropTypes.number
    })
  }).isRequired,
  short: PropTypes.bool,
  className: PropTypes.string
};

export default SalaryRange;
