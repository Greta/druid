import { combineReducers } from 'redux';

const mapReducer = () => {
  const mapWidth = 8,
        mapHeight = 8,
        terrains = ['G', 'P', 'W', 'S', 'F'];

  // Build default test map
  let map = [], i;
  for (i = 0; i < mapHeight; i++) {
    let mapRow = [], j;
    for (j = 0; j < mapWidth; j++) {
      mapRow.push(terrains[Math.floor(Math.random() * terrains.length)])
    }
    map.push(mapRow);
  }

  return map;
};

const playerLocationReducer = (playerLocation = [1, 1], action) => {
  if (action.type === 'MOVEMENT_TAKEN') {
    return action.payload;
  }
  return playerLocation;
};

export default combineReducers({
  map: mapReducer,
  playerLocation: playerLocationReducer
})
