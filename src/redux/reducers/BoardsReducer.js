import { LOAD_BOARDS } from "../actions/BoardActions";

const initialState = {
  boards: []
};

export function BoardReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_BOARDS:
      return {
        ...state,
        boards: action.value
      };

    default:
      return state;
  }
}
