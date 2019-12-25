import React from 'react';

import Compass from './Compass';
import World from './World';
import Party from './Party';
import Inventory from './Inventory';
import Map from './Map';
import EnemyList from './EnemyList';
import Spellbook from './Spellbook';

const App = () => {
  return (
    <div id="game">
      <div id="left">
        <Compass />
        <World />
        <Party />
        <Inventory />
      </div>
      <div id="right">
        <Map />
        <EnemyList />
        <Spellbook />
      </div>
    </div>
  );
};

export default App;
