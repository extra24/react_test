import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './Component/App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );

// var element = React.createElement('h1', {className: 'greeting'}, 'Hello, world!')
// ReactDOM.render(element, document.getElementById('root'))

serviceWorker.unregister();
