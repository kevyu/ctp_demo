// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { getMarketInfo, getMyOptions, fetchMyOptions } from '../../actions/options';
import MarketInfo from '../MarketInfo';
import OptionTable from '../OptionTable';

import styles from './Home.css';

class Home extends Component {

  constructor(props) {
    super(props);
    this.onRowDoubleClick = this.onRowDoubleClick.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(getMarketInfo());
    this.props.dispatch(getMyOptions());
    this.timer = setInterval(() => {
      this.props.dispatch(fetchMyOptions());
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  onRowDoubleClick() {
    console.log(this.props);
    this.props.dispatch(push('/chart'));
  }

  render() {
    const { marketInfo, options } = this.props;
    return (
      <div className={styles.container} data-tid="container">
        <MarketInfo marketInfo={marketInfo} />
        <div className={styles.main}>
          <OptionTable options={options} onRowDoubleClick={this.onRowDoubleClick} />
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
