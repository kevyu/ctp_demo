import React from 'react';
import { TypeChooser } from 'react-stockcharts/lib/helper'

import Chart from './Chart'
import { getData } from './util';

class ChartComponent extends React.Component {
  componentDidMount () {
    getData().then(data => {
      this.setState({ data})
    })
  }
  render () {
    if (this.state == null) {
      return <div>
               Loading...
             </div>
    }
    return (
      <Chart type='hybrid' data={this.state.data} />
    )
  }
}

export default ChartComponent;
