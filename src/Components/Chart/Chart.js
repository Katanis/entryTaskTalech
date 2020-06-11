import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

const Chart = (props) => (
  <div>
    <HighchartsReact
      highcharts={Highcharts}
      constructorType={'stockChart'}
      options={props.options}
    />
  </div>
);

export default Chart;