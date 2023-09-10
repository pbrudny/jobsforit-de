import React from 'react';
import style from './SliderInput.module.scss';
import tooltipBottomGray from 'assets/img/icons-new-design/tooltip-bottom--gray.svg';
import Slider from "@material-ui/core/Slider";

const SliderInput = ({ min, max, value, step, prefix, onChange }) => {
  const formatNumber = (num, prefix = '') => {
    return prefix + num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  const [valueBottom, valueTop] = value;
  const percentageValueBottom = (valueBottom / max) * 100 + '%';
  const percentageValueTop = (valueTop / max) * 100 + '%';

  const minFormatted = formatNumber(min, prefix);
  const maxFormatted = formatNumber(max, prefix);
  const valueBottomFormatted = formatNumber(valueBottom, prefix);
  const valueTopFormatted = formatNumber(valueTop, prefix);

  const tooltipBottomPositionValue = Number(((valueBottom - min) * 100) / (max - min));
  const tooltipTopPositionValue = Number(((valueTop - min) * 100) / (max - min));

  return (
    <div className={style.SliderInput}>
      <div
        className={style.SliderInput_tooltip}
        style={{ left: `calc(${tooltipBottomPositionValue}%)` }}
      >
        <img src={tooltipBottomGray} alt="Tooltip Bottom" />
        {valueBottomFormatted}
      </div>

      <div className={style.SliderInput_tooltip}
           style={{ left: `calc(${tooltipTopPositionValue}%)` }}>
        <img src={tooltipBottomGray} alt="Tooltip Top" />
        {valueTopFormatted}
      </div>

      <div className={style.SliderInput_input}>
        <Slider
          min={0}
          step={2000}
          max={200000}
          value={value}
          onChange={onChange}
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
  );
}

export default SliderInput;
