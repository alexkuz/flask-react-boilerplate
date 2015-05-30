import React, { Component } from 'react';
import useSheet from 'react-jss';
import FluxComponent from 'flummox/component';
import AppFlux from '../flux/AppFlux';
import Kittens from '../components/Kittens';

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

const flux = new AppFlux();

@useSheet(STYLES)
export default class Index extends Component {
  componentDidMount() {
    const actions = flux.getActions('kittens');
    actions.requestKittens();
  }

  render() {
    const { sheet: { classes } } = this.props;

    return (
      <div className={classes.index}>
        <FluxComponent flux={flux} connectToStores={['kittens']}>
          <Kittens />
        </FluxComponent>
      </div>
    );
  }
}
