import React from 'react';
import ReactDOM from 'react-dom';
import 'lib-flexible';

import App from './pages/app'

require('./mock/api') 

ReactDOM.render(
  <App />,
  document.getElementById('root')
);