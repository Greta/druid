// Action creator
export const playerMovement = movement => {
  // Return an action
  return {
    type: 'PLAYER_MOVE',
    payload: movement
  };
};
