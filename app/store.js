
import { createStore } from 'redux';
import reducers from './reducers/index';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();

const store = createStore(reducers, persistedState);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
