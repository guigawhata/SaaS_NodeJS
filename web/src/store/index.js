import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '@/store/ducks';
import rootSaga from '@/store/sagas';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const reactotron =
  process.env.NODE_ENV === 'development'
    ? console.tron.createEnhancer()
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middlewares), reactotron);

const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

export default store;
