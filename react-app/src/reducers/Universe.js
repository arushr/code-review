import * as CollapseActionTypes from "../actiontypes/Universe";

const initialState = {
  showA: true,
  showB: true,
  clicked: false
};

export default function Universe(state = initialState, action) {
  switch (action.type) {
    case CollapseActionTypes.COLLAPSE_UNIVERSE_A:
      return {
        ...state,
        showA: false,
        clicked: true
      };
    case CollapseActionTypes.COLLAPSE_UNIVERSE_B:
      return {
        ...state,
        showB: false,
        clicked: true
      };
    default:
      return state;
  }
}
