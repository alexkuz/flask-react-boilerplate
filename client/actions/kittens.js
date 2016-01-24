import * as actionTypes from '../actionTypes/kittens';
import { get, post, del } from '../utils/api';

export function addKitten() {
  return async dispatch => {
    dispatch({
      type: actionTypes.ADD_KITTEN
    });

    try {
      const result = await post('/api/kittens');

      dispatch({
        type: actionTypes.ADD_KITTEN_SUCCESS,
        kitten: result
      });
    } catch(e) {
      dispatch({
        type: actionTypes.ADD_KITTEN_ERROR
      });
    }
  }
}

export function requestKittens() {
  return async dispatch => {
    dispatch({
      type: actionTypes.REQUEST_KITTENS
    });

    try {
      const result = await get('/api/kittens');

      dispatch({
        type: actionTypes.REQUEST_KITTENS_SUCCESS,
        kittens: result
      });
    } catch(e) {
      dispatch({
        type: actionTypes.REQUEST_KITTENS_ERROR
      });
    }
  }
}

export function deleteKitten(kittenId) {
  return async dispatch => {
    dispatch({
      type: actionTypes.DELETE_KITTEN,
      kittenId
    });

    try {
      await del(`/api/kittens/${kittenId}`);

      dispatch({
        type: actionTypes.DELETE_KITTEN_SUCCESS,
        kittenId
      });
    } catch(e) {
      dispatch({
        type: actionTypes.DELETE_KITTEN_ERROR,
        kittenId
      });
    }
  }
}
