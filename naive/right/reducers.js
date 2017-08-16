// @flow

import { createSelector } from 'reselect';
import type { Selector } from 'reselect';

type Program = {
  title: string
}

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

type ProgramsRangeT = Array<Program>

export const getPrograms: Selector<State, TimelineOwnProps, ProgramsRangeT> = createSelector(
    (state, ownProps) => {
      if (state.programs[ownProps.channel.id]) {
        return state.programs[ownProps.channel.id].items;
      }
      return [];
    },
    (state, ownProps) => ownProps.startTime,
    (state, ownProps) => ownProps.endTime,
    (programs, startTime, endTime) =>
      programs.filter(program => { return true; /* some logic here */ }),
);
