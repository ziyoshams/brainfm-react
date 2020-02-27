export const LOAD_BOARDS = "LOAD_BOARDS";
export const UPDATE_CARD = "UPDATE_CARD";

/**
 * Action to set all fetched boards.
 * @param {Object} value
 */
export const fetchBoards = value => {
  return {
    type: LOAD_BOARDS,
    value
  };
};

/**
 * Action to update a single card locally.
 * @param {Object} value { board: string, title:string, text: String, id: number|string, date: number }
 */
export const updateSingleCard = value => {
  return {
    type: UPDATE_CARD,
    value
  };
};

/**
 * Fetches initial data from the API and
 * dispatches an acrion to store them in redux.
 */
export const loadData = () => async dispatch => {
  try {
    const data = await (await fetch("http://localhost:3003/boards")).json();
    dispatch(fetchBoards(data));
  } catch (error) {
    console.log("loadData", error);
  }
};
