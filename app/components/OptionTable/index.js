import React, { Component } from 'react';
import { Column, Table, AutoSizer } from 'react-virtualized';
import cx from 'classnames';
import 'react-virtualized/styles.css';

import OptionColumn from '../OptionColumn/index';
import styles from './OptionTable.scss';

function columnRenderer({ columnData, cellData }) {
  return <OptionColumn data={cellData} />;
}

class OptionTable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedRow: null
    };
    this.onRowClick = this.onRowClick.bind(this);
  }

  onRowClick({ index }) {
    this.setState({
      selectedRow: index
    });
  }

  renderColumn(label, key, extra = {}) {
    const { columnData, className, ...others } = extra;
    return (
      <Column
        width={100}
        key={key}
        columnData={columnData}
        className={cx(styles.column, extra.className)}
        label={label}
        dataKey={key}
        cellDataGetter={({ dataKey, rowData, columnData }) => (rowData[dataKey] || (columnData || {})[dataKey] || '---')}
        cellRenderer={columnRenderer}
        {...others}
      />
    );
  }

  renderTable(height, width) {
    const { options } = this.props;
    const columns = [
      {
        label: '真实杠杆率',
        dataKey: 'zhenshigangganlv'
      }, {
        label: '隐含波动率',
        dataKey: 'yinhanbodonglv'
      }, {
        label: '溢价率',
        dataKey: 'yijialv'
      }, {
        label: '杠杆比率',
        dataKey: 'gangganbilv'
      }, {
        label: '内在价值',
        dataKey: 'neizaijiazhi'
      }, {
        label: '时间价值',
        dataKey: 'shijianjiazhi'
      }, {
        label: '持仓量',
        dataKey: 'chicangliang'
      }, {
        label: '卖价',
        dataKey: 'sellPrice'
      }, {
        label: '买价',
        dataKey: 'buyPrice'
      }, {
        label: '涨跌',
        dataKey: 'zhangdie'
      }, {
        label: '最新',
        dataKey: 'zuixin'
      }
    ];

    return (
      <Table
        gridClassName={styles.table}
        headerClassName={styles.headerColumn}
        headerHeight={30}
        height={height}
        width={width}
        rowCount={options.length}
        rowGetter={({ index }) => options[index]}
        rowHeight={30}
        rowClassName={({ index }) => {
          if (index === -1) {
            return styles.header;
          }
          if (index === this.state.selectedRow) {
            return styles.rowSelected;
          }
          return styles.row;
        }}
        onRowClick={this.onRowClick}
      >
        {
          columns.map(column => this.renderColumn(column.label, column.dataKey))
        }
        {
          this.renderColumn('看涨', 'kanzhang', {
            columnData: { kanzhang: 'C' },
            className: cx(styles.blue, styles.alignCenter),
            headerClassName: styles.headerCenter
          })
        }
        {
          this.renderColumn('行权价', 'strike', { className: cx(styles.blue, styles.alignCenter), headerClassName: styles.headerCenter })
        }
        {
          this.renderColumn('看跌', 'kandie', {
            columnData: { kandie: 'P' },
            className: cx(styles.blue, styles.alignCenter),
            headerClassName: styles.headerCenter
          })
        }
        {
          columns.reverse().map(column => this.renderColumn(column.label, column.dataKey))
        }
      </Table>
    );
  }

  render() {
    return (
      <AutoSizer>
        {
          ({ height, width }) => this.renderTable(height, width)
        }
      </AutoSizer>
    );
  }
}

export default OptionTable;
