import React, { Component } from 'react';
import useSheet from 'react-jss';
import Kittens from '../components/Kittens';
import { connect } from 'react-redux';
import { requestKittens } from '../actions/kittens';

export default class Index extends Component {
  componentDidMount() {
    this.props.requestKittens();
  }

  render() {
    const { sheet } = this.props;

    return (
      <div className={sheet.classes.index}>
        <Kittens />
      </div>
    );
  }
}

const STYLES = {
  index: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFDDDD',
    color: '#660000'
  }
};

export default connect(
  () => ({}),
  { requestKittens }
)(
  useSheet(Index, STYLES)
);
