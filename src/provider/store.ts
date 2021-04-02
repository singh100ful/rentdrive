import {applyMiddleware, compose, createStore, combineReducers} from 'redux';
import DateReducer from 'src/provider/reducers/date';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  date: DateReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

let composeEnhancers = compose;

const store = () => {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)),
  );

  return store;
};

export default store;
