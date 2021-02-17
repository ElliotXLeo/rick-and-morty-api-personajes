import React, { Fragment } from 'react';
import Characters from './components/Characters';
import Header from './components/Header';

const App = () => {
  return (
    <Fragment>
      <Header
        title="Rick and Morty API"
      />
      <Characters />
    </Fragment>
  )
};

export default App;
