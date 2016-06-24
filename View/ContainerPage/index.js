import React from 'react'

import {
  connect
} from 'react-redux';
import {
  bindActionCreators
} from 'redux';
import * as CounterActions from '../Action';
import {
  Link,
  IndexLink
} from 'react-router'



class Index extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div>
            {React.cloneElement(this.props.children,{store:this.props})}
      </div>
    )
  }
}


const mapStateToProps = state => ({
  data: state
});
const mapDispatchToProps = dispatch => bindActionCreators(CounterActions, dispatch)

module.exports = connect(mapStateToProps, mapDispatchToProps)(Index);