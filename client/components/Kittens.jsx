import React, { Component } from 'react';
import Kitten from './Kitten';
import useSheet from 'react-jss';

const STYLES = {
  index: {
    'display': 'flex',
    'align-items': 'center',
    'justify-content': 'center'
  }
};

@useSheet(STYLES)
export default class Kittens extends Component {
  render() {
    const { sheet: { classes } } = this.props;

    return (
      <div className={classes.kittens}>
        <h1>Look, there are kittens in this basket:</h1>
        {this.props.kittens.map(kitten => (
          <Kitten key={`kitten-${kitten.id}`} kitten={kitten} />
        ))}
        <button onClick={this.handleAddClick.bind(this)}>Put another kitten into basket</button>
      </div>
    );
  }

  handleAddClick() {
    const { flux } = this.props;

    flux.getActions('kittens').addKitten();
  }
}
