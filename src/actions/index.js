// Action creator
export const playerMovement = movement => {
  // Return an action
  return {
    type: 'MOVEMENT_TAKEN',
    payload: movement
  };
};
