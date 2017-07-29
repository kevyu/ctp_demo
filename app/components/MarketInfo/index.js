import React, { Component } from 'react';
import cx from 'classnames';

import styles from './MarketInfo.scss';

class MarketInfo extends Component {

  render() {
    const { marketInfo } = this.props;
    let color = styles.green;
    if (marketInfo.zhangfu > 0) {
      color = styles.red;
    }
    return (
      <div className={styles.container}>
        <div className={styles.item}>
          <span className={cx(styles.title, styles.alignLeft)}>标的</span>
          <div className={cx(styles.value, styles.yellow)}>
            <select>
              <option>豆粕</option>
              <option>白糖</option>
              <option>50ETF</option>
              <option>沪深300坊</option>
              <option>上海50坊</option>
            </select>
            <select>
              <option>IO1708</option>
              <option>IO1709</option>
              <option>IO1712</option>
              <option>IO1803</option>
              <option>IO1806</option>
            </select>
          </div>
        </div>
        <div className={styles.item}>
          <span className={cx(styles.title, styles.alignLeft)}>到期日</span>
          <span className={cx(styles.value, styles.yellow)}>2017-07-28</span>
        </div>
        <div className={styles.divider} />
        <div className={styles.item}>
          <span className={styles.title}>最新</span>
          <span className={cx(styles.value, color)}>{marketInfo.zuixin}</span>
        </div>
        <div className={styles.item}>
          <span className={styles.title}>涨跌</span>
          <span className={cx(styles.value, color)}>{marketInfo.zhangdie}</span>
        </div>
        <div className={styles.item}>
          <span className={styles.title}>涨幅%</span>
          <span className={cx(styles.value, color)}>{marketInfo.zhangfu}</span>
        </div>
        <div className={styles.item}>
          <span className={styles.title}>成交量</span>
          <span className={cx(styles.value, styles.yellow)}>{marketInfo.chengjiaoliang}</span>
        </div>
        <div className={styles.item}>
          <span className={styles.title}>持仓量</span>
          <span className={cx(styles.value, styles.yellow)}>{marketInfo.chicangliang}</span>
        </div>
        <div className={styles.item}>
          <span className={styles.title}>日增仓</span>
          <span className={cx(styles.value, styles.yellow)}>{marketInfo.rizengchang || '---'}</span>
        </div>
        <div className={styles.item}>
          <span className={styles.title}>开盘</span>
          <span className={cx(styles.value, color)}>{marketInfo.kaipan}</span>
        </div>
        <div className={styles.item}>
          <span className={styles.title}>最高</span>
          <span className={cx(styles.value, color)}>{marketInfo.high}</span>
        </div>
        <div className={styles.item}>
          <span className={styles.title}>最低</span>
          <span className={cx(styles.value, color)}>{marketInfo.low}</span>
        </div>
        <div className={styles.item}>
          <span className={styles.title}>昨收</span>
          <span className={cx(styles.value)}>{marketInfo.last}</span>
        </div>
        <div className={styles.item}>
          <span className={styles.title}>昨结算</span>
          <span className={cx(styles.value)}>{marketInfo.jiesuan}</span>
        </div>
      </div>
    );
  }
}

export default MarketInfo;
