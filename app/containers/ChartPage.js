import React, { Component } from 'react';
import Chart from '../components/Chart';
import Header from '../components/Header';

class ChartPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Chart {...this.props} />
      </div>
    );
  }
}

export default ChartPage;
