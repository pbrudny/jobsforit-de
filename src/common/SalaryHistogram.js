import React from 'react';
import {BarSeries, Histogram, withParentSize, XAxis, YAxis} from '@data-ui/histogram';
import { toJS } from 'mobx';
import LoadingGif from "./LoadingGif";

const ResponsiveHistogram = withParentSize(({ parentWidth, parentHeight, ...rest}) => (
  <Histogram
    width={parentWidth}
    height={parentHeight}
    {...rest}
  />
));

function SalaryHistogram({jobs}) {
  const range = (start, stop, step = 1) =>
    Array(Math.ceil((stop - start) / step)).fill(start).map((x, y) => x + y * step);

  const salaries = jobs.map((job)=> range(job.fields.salaryBottom, job.fields.salaryTop, 5000)).flat(1);
  console.log('salaries: ', salaries);

  if (salaries.length >0 ) {
    return (
      <ResponsiveHistogram
        ariaLabel="Salary histogram"
        orientation="vertical"
        cumulative={false}
        normalized={true}
        binCount={10}
        valueAccessor={datum => datum}
        binType="numeric"
        renderTooltip={({event, datum, data, color}) => (
          <div>
            <strong style={{color}}>{datum.bin0} to {datum.bin1}</strong>
            <div><strong>count </strong>{datum.count}</div>
          </div>
        )}
      >
        <BarSeries
          animated
          rawData={salaries}
        />
        <XAxis/>
        <YAxis/>
      </ResponsiveHistogram>
    );
  } else {
    return (
      <LoadingGif />
    )
  }
}

export default SalaryHistogram;