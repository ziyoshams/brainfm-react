import { SET_SELECTED_CARD } from "../actions/CardActions";

const initialState = {
  selectedCard: {
    board: undefined,
    title: "",
    text: ""
  }
};

export function CardReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SELECTED_CARD:
      return {
        ...state,
        selectedCard: { ...action.value }
      };

    default:
      return state;
  }
}
