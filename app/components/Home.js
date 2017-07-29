// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMarketInfo, getMyOptions } from '../actions/options';
import MarketInfo from './MarketInfo';
import OptionTable from './OptionTable';

import styles from './Home.css';

class Home extends Component {

  componentDidMount() {
    this.props.dispatch(getMarketInfo());
    this.props.dispatch(getMyOptions());
  }

  render() {
    const { marketInfo, options } = this.props;
    return (
      <div className={styles.container} data-tid="container">
        <MarketInfo marketInfo={marketInfo} />
        <div className={styles.main}>
          <OptionTable options={options} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    marketInfo: state.marketInfo,
    options: state.options
  };
}

export default connect(mapStateToProps)(Home);
