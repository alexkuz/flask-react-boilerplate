import React, { Component } from 'react';
import Kitten from './Kitten';
import useSheet from 'react-jss';

const STYLES = {
  credits: {
    fontSize: 10
  },

  link: {
    textDecoration: 'none'
  },

  basket: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'stretch',
    flexWrap: 'wrap'
  },

  kittens: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '60%'
  },

  button: {
    padding: '1rem 1.5rem',
    background: '#FFAAAA',
    '&:hover': {
      background: '#FFBBBB'
    },
    border: 0,
    borderRadius: '0.5rem',
    cursor: 'pointer',
    margin: '2rem',
    textAlign: 'center',
    userSelect: 'none'
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
