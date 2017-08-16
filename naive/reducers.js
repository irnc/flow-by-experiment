// @flow

import { createSelector } from 'reselect';

type Program = {}

type State = {
  programs: {
    [id: string]: {
      items: Array<Program>
    }
  }
}

type TimelineOwnProps = {
  channel: { id: string },
  startTime: string,
  endTime: string,
}

export const getPrograms = createSelector(
    (state: State, ownProps: TimelineOwnProps): Array<Program> => {
      if (state.programs[ownProps.channel.id]) {
        return state.programs[ownProps.channel.id].items;
      }
      return [];
    },
    (state: State, ownProps: TimelineOwnProps):string => ownProps.startTime,
    (state: State, ownProps: TimelineOwnProps):string => ownProps.endTime,
    (programs: Array<Program>, startTime:string, endTime: string) =>
      programs.filter((program: Program): boolean => { return true; /* some logic here */ }),
);
