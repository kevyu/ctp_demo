// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { List } from 'react-virtualized';
import styles from './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <List width={600} />
        </div>
      </div>
    );
  }
}
