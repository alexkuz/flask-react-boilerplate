import React, { Component } from 'react';
import useSheet from 'react-jss';

const STYLES = {
  button: {
    'background-color': 'yellow'
  },
  label: {
    'font-weight': 'bold'
  }
};

@useSheet(STYLES)
export default class Index extends Component {
  render() {
    const { sheet: classes } = this.props;

    return (
      <div className={classes.button}>
        <span className={classes.label}>
          Hello there!
        </span>
      </div>
    );
  }
}
