import React from 'react';

import style from './SliderInput.module.scss';
import tooltipBottomGray from 'assets/img/icons-new-design/tooltip-bottom--gray.svg';
import Slider from "@material-ui/core/Slider";

class SliderInput extends React.Component {

  formatNumber(num, prefix = '') {
    return prefix + num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  render() {
    const {min, max, value, step, prefix} = this.props;
    const [valueBottom, valueTop] = value;
    const percentageValueBottom = (valueBottom / max) * 100 + '%';
    const percentageValueTop = (valueTop / max) * 100 + '%';

    const minFormatted = this.formatNumber(min, prefix);
    const maxFormatted = this.formatNumber(max, prefix);
    const valueBottomFormatted = this.formatNumber(valueBottom, prefix);
    const valueTopFormatted = this.formatNumber(valueTop, prefix);

    const tooltipBottomPositionValue = Number(((valueBottom - min) * 100) / (max - min));
    const tooltipTopPositionValue = Number(((valueTop - min) * 100) / (max - min));

    return (
      <div className={style.SliderInput}>
        <div
          className={style.SliderInput_tooltip}
          style={{left: `calc(${tooltipBottomPositionValue}%`}}
        >
          <img
            src={tooltipBottomGray}
          />
          {valueBottomFormatted}
        </div>

        <div className={style.SliderInput_tooltip}
             style={{left: `calc(${tooltipTopPositionValue}%)`}}>
          <img
            src={tooltipBottomGray}
          />
          {valueTopFormatted}
        </div>

        <div className={style.SliderInput_input}>
          <Slider
            min={0}
            step={2000}
            max={200000}
            value={value}
            onChange={this.props.onChange}
            aria-labelledby="range-slider"
          />
        </div>

        <div className={style.SliderInput_bottom}>
          <span className={style.SliderInput_label}>
            {minFormatted}
          </span>
          <span className={style.SliderInput_label}>
            {maxFormatted}
          </span>
        </div>
      </div>
    )
  }
}

export default SliderInput;