import React, { Component } from 'react';
import { connect } from 'react-redux';

class Spellbook extends Component {
  render() {
    return <div>Spellbook</div>
  }
}

const mapStateToProps = state => {
  return {
    map: state.map
  }
}

export default connect(mapStateToProps)(Spellbook);
