import { SET_SELECTED_CARD } from "../actions/CardActions";

const initialState = {
  selectedCard: {
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
