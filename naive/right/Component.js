// @flow

import { getPrograms } from './reducers'

const mapStateToProps = (state, ownProps) => {
  programs: getPrograms(state, ownProps)
}
