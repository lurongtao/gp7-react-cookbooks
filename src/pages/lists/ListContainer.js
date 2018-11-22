import React from 'react'
import { connect } from 'react-redux'
import ReactDOM from 'react-dom'
import { PullToRefresh, ListView, NavBar, Icon } from 'antd-mobile';

import { ListWrapper } from './styledComponent.js'

const mapState = (state) => {
  return {
    list: state.cookbook.list
  }
}

class List extends React.Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.pageNo = -1
    this.state = {
      dataSource,
      refreshing: true,
      isLoading: true,
      height: document.documentElement.clientHeight,
      useBodyScroll: false,
      hasMore: true
    }
  }

  componentDidUpdate() {
    if (this.state.useBodyScroll) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }

  componentDidMount() {
    const hei = this.state.height - ReactDOM.findDOMNode(this.lv).offsetTop;

    this.rData = this.genData()
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this.rData),
      height: hei,
      refreshing: false,
      isLoading: false,
    });
  }

  genData () {
    this.pageNo++
    // return fetch('/mock/cookbook-list.json')
    //   .then(response => response.json())
    //   .then(result => {
    //     let start = this.pageNo * 10
    //     let ret = result.data.slice(start, start + 10)
    //     if (ret.length > 0) {
    //       return ret
    //     } else {
    //       this.setState({
    //         hasMore: false
    //       })
    //     }
    //   })
    let start = this.pageNo * 10
    return this.props.list.slice(start, start + 10)
    
  }

  onRefresh = () => {
    // this.setState({ refreshing: true, isLoading: true });
    // // simulate initial Ajax
    // this.rData = genData();
    // this.setState({
    //   dataSource: this.state.dataSource.cloneWithRows(this.rData),
    //   refreshing: false,
    //   isLoading: false,
    // });
  };

  onEndReached = async (event) => {
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
    if (this.state.isLoading && !this.state.hasMore) {
      return;
    }
    this.setState({ isLoading: true })

    this.rData = [...this.rData, ...await(this.genData())]
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this.rData),
      isLoading: false,
    });
  };

  render() {
    const separator = (sectionID, rowID) => (
      <div
        key={`${sectionID}-${rowID}`}
        style={{
          backgroundColor: '#F5F5F9',
          height: 8,
          borderTop: '1px solid #ECECED',
          borderBottom: '1px solid #ECECED',
        }}
      />
    );

    const row = (rowData, sectionID, rowID) => {
      return (
        <div key={rowID} style={{height: '100px'}}>{rowData.name}</div>
      );
    };
    return (
    
      <ListWrapper>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
            <Icon key="1" type="ellipsis" />,
          ]}
        >主食</NavBar>

        <ListView
          key={this.state.useBodyScroll ? '0' : '1'}
          ref={el => this.lv = el}
          dataSource={this.state.dataSource}
          renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
            {this.state.isLoading ? 'Loading...' : 'Loaded'}
          </div>)}
          renderRow={row}
          renderSeparator={separator}
          useBodyScroll={this.state.useBodyScroll}
          style={this.state.useBodyScroll ? {} : {
            height: this.state.height,
            border: '1px solid #ddd',
            margin: '5px 0',
          }}
          pullToRefresh={<PullToRefresh
            refreshing={this.state.refreshing}
            onRefresh={this.onRefresh}
          />}
          onEndReached={this.onEndReached}
          pageSize={5}
        />
      </ListWrapper>
    )
  }
}

export default connect(mapState)(List)