// @flow

type Channel = {
  id: string,
  title: string,
  number: number,
  scheduleId?: string,
};

const channels: Array<?Channel> = [];

// https://github.com/facebook/flow/issues/1414
// $FlowFixMe no type refinement from .filter application
const scheduleIds1: Array<string> = channels.filter(c => c && c.scheduleId).map(c => c.scheduleId);

// Dirty workaround.
const scheduleIds2: Array<string> = channels.filter(Boolean).map(с => с.scheduleId).filter(Boolean);

const scheduleIds3: Array<string> = channels
  .filter(Boolean)
  .filter(c => c.number > 20)
  .map(с => с.scheduleId)
  .filter(Boolean);
