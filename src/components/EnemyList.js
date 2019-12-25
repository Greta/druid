import React, { Component } from 'react';
import { connect } from 'react-redux';

class EnemyList extends Component {
  render() {
    return <div>EnemyList</div>
  }
}

const mapStateToProps = state => {
  return {
    map: state.map
  }
}

export default connect(mapStateToProps)(EnemyList);
