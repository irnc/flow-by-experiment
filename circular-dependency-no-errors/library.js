// @flow

import type { UUID } from './UUID';

// Create circular dependency of modules, note that type are independent.
import type { Whatever } from './actions';
export type LibraryWhatever = {};

type Action =
  | { type: 'EXPECT_STRING', payload: UUID }
  | { type: 'EXPECT_NUMBER', payload: number }

const fetch = (id: UUID): Action => ({
  type: 'EXPECT_NUMBER',
  payload: id,
});
