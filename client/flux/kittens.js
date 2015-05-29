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
    this.register(fundActions.requestKittens, this.handleRequestKittens);
    this.register(fundActions.addKitten, this.handleAddKitten);
    this.register(fundActions.deleteKitten, this.handleDeleteKitten);

    this.state = {
      kittens: []
    };
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
