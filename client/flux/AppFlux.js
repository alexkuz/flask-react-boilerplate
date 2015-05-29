import { Flummox } from 'flummox';
import { KittenActions, KittenStore } from './kittens';

export default class AppFlux extends Flummox {
  constructor() {
    super();

    this.createActions('kittens', KittenActions);
    this.createStore('kittens', KittenStore, this);
  }
}
