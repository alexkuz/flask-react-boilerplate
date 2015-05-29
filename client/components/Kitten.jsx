import React, { Component, PropTypes } from 'react';

export default class Kitten extends Component {
  static propTypes = {
    kitten: PropTypes.shape({
      id: PropTypes.number.isRequired,
      created: PropTypes.string.isRequired
    }).isRequired
  }

  static contextTypes = {
    flux: PropTypes.object
  }

  render() {
    return (
      <div className=''>
        Kitten #{this.props.kitten.id}
        <button onClick={this.handleDeleteClick.bind(this)}>Remove kitten</button>
      </div>
    );
  }

  handleDeleteClick() {
    const { flux } = this.context;

    flux.getActions('kittens').deleteKitten(this.props.kitten.id);
  }
}
