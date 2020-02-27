import { updateSingleCard } from "./BoardActions";

export const SET_SELECTED_CARD = "SET_SELECTED_CARD";

/**
 * Action to point out selected card.
 * @param {Object} value { board: string, title:string, text: String, id: number|string, date: number }
 */
export const setSelectedCard = value => {
  return {
    type: SET_SELECTED_CARD,
    value
  };
};

/**
 * Updates single card info
 * dispatches an action to update the card locaally after successful POST request.
 * @param {Object} value { board: string, title:string, text: String, id: number|string }
 */
export const updateSelectedCard = value => async dispatch => {
  try {
    await fetch(`http://localhost:3003/boards/cards/${value.id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(value)
    });

    dispatch(updateSingleCard(value));
  } catch (error) {
    console.log(error);
  }
};
