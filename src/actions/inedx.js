export const selectTab = itemName => {
  return {
    type: "SELECT_MENU_TAB",
    payload: {
      title: itemName
    }
  };
};
export const selectCards = itemName => {
  return {
    type: "SELECT_ACTIVE_CARDS",
    payload: {
      name: itemName
    }
  }
}