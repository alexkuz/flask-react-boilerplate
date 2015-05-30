import { Actions, Store } from 'flummox';
import { get, post, del } from '../utils/api';

export class KittenActions extends Actions {
  async requestKittens() {
    return await get('/api/kittens');
  }

  async addKitten() {
    return await post('/api/kittens');
  }

  async deleteKitten(kittenId) {
    return await del(`/api/kittens/${kittenId}`);
  }
}

export class KittenStore extends Store {
  constructor(flux) {
    super();

    const fundActions = flux.getActions('kittens');
    this.registerAsync(fundActions.requestKittens, null, this.handleRequestKittens, this.handleError);
    this.registerAsync(fundActions.addKitten, null, this.handleAddKitten, this.handleError);
    this.registerAsync(fundActions.deleteKitten, null, this.handleDeleteKitten, this.handleError);

    this.state = {
      kittens: []
    };
  }

  handleError(err) {
    console.error(err);
    /* eslint-disable no-alert */
    window.alert(`
      status: ${err.response.statusText}

      message: ${err.response.body}
    `);
    /* eslint-enable no-alert */
  }

  handleRequestKittens(kittens) {
    this.setState({
      kittens: kittens
    });
  }

  handleAddKitten(kittens) {
    this.setState({
      kittens: kittens
    });
  }

  handleDeleteKitten(kittens) {
    this.setState({
      kittens: kittens
    });
  }
}
