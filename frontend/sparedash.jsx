import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import injectTapEventPlugin from 'react-tap-event-plugin';


document.addEventListener('DOMContentLoaded', () => {

	let store = configureStore();

  const root = document.getElementById('root');
  ReactDOM.render(<Root/>, root);
});