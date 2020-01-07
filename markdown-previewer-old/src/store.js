import { createStore } from 'redux';
import reducer from './reducers/reducer';

export default (initialState) => createStore(reducer, initialState);