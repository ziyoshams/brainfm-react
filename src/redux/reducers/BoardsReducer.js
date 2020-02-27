import { LOAD_BOARDS, UPDATE_CARD } from "../actions/BoardActions";

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
    case UPDATE_CARD: {
      const singleBoard = state.boards[action.value.board].map(card => {
        if (card.id === action.value.id) {
          return action.value;
        }
        return card;
      });

      return {
        ...state,
        boards: {
          ...state.boards,
          [action.value.board]: singleBoard
        }
      };
    }

    default:
      return state;
  }
}
