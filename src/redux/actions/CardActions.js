export const SET_SELECTED_CARD = "SET_SELECTED_CARD";

export const setSelectedCard = value => {
  return {
    type: SET_SELECTED_CARD,
    value
  };
};

export const updateSelectedCard = value => async dispatch => {
  try {
    const card = await (
      await fetch(`http://localhost:3003/boards/cards/${value.id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(value)
      })
    ).json();
  } catch (error) {
    console.log(error);
  }
};
