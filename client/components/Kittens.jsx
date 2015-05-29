import React, { Component } from 'react';
import Kitten from './Kitten';
import useSheet from 'react-jss';

const STYLES = {
  credits: {
    'font-size': '10px'
  },

  'link': {
    'text-decoration': 'none'
  },

  'basket': {
    'display': 'flex',
    'flex-direction': 'row',
    'align-self': 'stretch',
    'flex-wrap': 'wrap'
  },

  'kittens': {
    'display': 'flex',
    'flex-direction': 'column',
    'align-items': 'center',
    'width': '60%'
  },

  'button': {
    'padding': '1rem 1.5rem',
    'background': '#FFAAAA',
    'border': '0',
    'border-radius': '0.5rem',
    'cursor': 'pointer',
    'margin': '2rem',
    'text-align': 'center',
    'user-select': 'none'
  }
};

@useSheet(STYLES)
export default class Kittens extends Component {
  render() {
    const { sheet: { classes } } = this.props;

    return (
      <div className={classes.kittens}>
        {!!this.props.kittens.length &&
          <h1>Look, there are kittens in this basket:</h1>
        }
        {!!this.props.kittens.length &&
          <div className={classes.basket}>
            {this.props.kittens.map(kitten => (
              <Kitten key={`kitten-${kitten.id}`} kitten={kitten} />
            ))}
          </div>
        }
        {!this.props.kittens.length &&
          <h1>This backet has no kittens in it :(</h1>
        }
        <a className={classes.button} onClick={this.handleAddClick.bind(this)}>Put another kitten into basket</a>
        <div className={classes.credits}>
          Icons made by <a className={classes.link} href='http://www.flaticon.com/authors/freepik' title='Freepik'>Freepik</a> from <a className={classes.link} href='http://www.flaticon.com' title='Flaticon'>www.flaticon.com</a> is licensed by <a className={classes.link} href='http://creativecommons.org/licenses/by/3.0/' title='Creative Commons BY 3.0'>CC BY 3.0</a>
        </div>
      </div>
    );
  }

  handleAddClick() {
    const { flux } = this.props;

    flux.getActions('kittens').addKitten();
  }
}
