import React, { PureComponent } from 'react';
import cx from 'classnames';

import styles from './OptionColumn.scss';

class OptionColumn extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      valueChanged: false
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ valueChanged: this.props.data !== nextProps.data });
  }

  render() {
    const { data } = this.props;
    return (
      <div className={cx(styles.column, this.state.valueChanged && styles.columnChanged)}>{data}</div>
    );
  }
}

export default OptionColumn;
