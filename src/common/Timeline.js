import React from 'react';
import style from './Timeline.module.scss';

const Timeline = ({ steps, currentStep }) => {
    return (
      <ul className={style.Timeline}>
          {steps.map((step, index) => {
              const stepClasses = [style.Timeline_item];

              if(index + 1 < currentStep) {
                  stepClasses.push(style.Timeline_item__completed);
              } else if(currentStep === index + 1) {
                  stepClasses.push(style.Timeline_item__current);
              }

              return (
                <li className={stepClasses.join(' ')} key={index}>
                    <div className={style.Timeline_item_circle}></div>
                    <span className={style.Timeline_item_text}>{step}</span>
                </li>
              )
          })}
      </ul>
    );
}

export default Timeline;
