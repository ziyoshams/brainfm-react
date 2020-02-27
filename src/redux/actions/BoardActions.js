export const LOAD_BOARDS = "LOAD_BOARDS";

export const loadData = () => async dispatch => {
  try {
    const data = await (await fetch("http://localhost:3003/boards")).json();
    dispatch(fetchBoards(data));
  } catch (error) {
    console.log("loadData", error);
  }
};

const fetchBoards = value => {
  return {
    type: LOAD_BOARDS,
    value
  };
};
