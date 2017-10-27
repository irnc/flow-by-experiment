// @flow

type Record = { name: string };
type State = {
  byId_straight: { [id: string]: Record },
  byId_maybe: { [id: string]: ?Record }, // could be null or undefined
  byId_void: { [id: string]: Record | void } // cound by undefined
}

const state: State = {
  byId_straight: {},
  byId_maybe: {},
  byId_void: {},
}

const s = state.byId_straight['a'];
const m = state.byId_maybe['a'];
const v = state.byId_void['a'];

s.name;
m.name;
v.name;
