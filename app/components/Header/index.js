import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.scss';

class Header extends PureComponent {
  render() {
    return (
      <div className={styles.header}>
        <Link to="/">返回</Link>
      </div>
    );
  }
}

export default Header;
