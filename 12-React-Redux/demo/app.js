// ESTE ARCHIVO ES EL ENTRY POINT
import React from 'react'; // para poder crear componentes y trabajar con ellos
import { render } from 'react-dom'; // para enbebernos en el HTML
import Counter from './src/components/Counter.jsx';
import Post from './src/components/Post.jsx';
import  { Provider } from 'react-redux'; // para poder trabajar con el store
import store from './src/store.js';

render(
    <Provider store={store}>
      <div>
        <Counter />
        <Post />
      </div>
    </Provider>,
  document.getElementById('app')
);
