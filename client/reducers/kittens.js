import * as actionTypes from '../actionTypes/kittens';

const DEFAULT_STATE = [];

const addKitten = (state, action) => ([
  ...state,
  action.kitten
]);

const requestKittens = (state, action) => ([
  ...state,
  ...action.kittens
]);

const deleteKitten = (state, action) => (
  state.filter(kitten => kitten.id !== action.kittenId)
);


export default function kittens(state = DEFAULT_STATE, action) {
  return ({
    [actionTypes.ADD_KITTEN_SUCCESS]: addKitten,
    [actionTypes.REQUEST_KITTENS_SUCCESS]: requestKittens,
    [actionTypes.DELETE_KITTEN_SUCCESS]: deleteKitten
  }[action.type] || (s => s))(state, action);
}
