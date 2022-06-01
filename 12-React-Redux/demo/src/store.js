import { createStore, applyMiddleware } from 'redux'; 
import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk' // para tareas asincronas, es un intermediario 
                                          // por ejemplo, si hago una llamada a la api y tengo que esperar la rta, detiene el reducer hasta que tenga la rta

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunkMiddleware), // aplicamos el middleware
);

export default store;
