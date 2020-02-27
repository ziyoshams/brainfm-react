export const MODAL_VISIBILITY = "MODAL_VISIBILITY";

/**
 * Sets modal visibility
 * @param {boolean} value
 */
export const setModalVisibility = value => {
  return {
    type: MODAL_VISIBILITY,
    value
  };
};
