import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <App clientId={AUTH0_CLIENT_ID} domain={AUTH0_DOMAIN} />,
  document.getElementById('login-page')
);
