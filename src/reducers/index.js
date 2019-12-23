import { combineReducers } from 'redux';

const mapReducer = () => {
  return [
    ['','','',''],
    ['','','',''],
    ['','','',''],
    ['','','','']
  ];
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
