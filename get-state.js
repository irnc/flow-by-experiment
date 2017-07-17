// @flow

function getSpeed(store) {
  const state = store.getState();

  return state.object.speed;
}

function logPower() {
  console.log(getSpeed({}) + getSpeed({}));
}

// exports.getSpeed = getSpeed;
