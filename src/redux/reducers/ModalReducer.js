import { MODAL_VISIBILITY } from "../actions/ModalActions";

const initialState = {
  isVisible: false
};

export function ModalReducer(state = initialState, action) {
  switch (action.type) {
    case MODAL_VISIBILITY:
      return {
        ...state,
        isVisible: action.value
      };

    default:
      return state;
  }
}
