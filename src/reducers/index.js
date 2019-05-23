import { combineReducers } from "redux";
import Data from "../data.json";

export const menuTabs = () => {
  return [
    { title: "Education" },
    { title: "Award" },
    { title: "Projects" },
    { title: "Skills" }
  ];
};

export const updateActiveTab = (
  activeItem = { title: "Education" },
  action
) => {
  if (action.type === "SELECT_MENU_TAB") {
    return { title: action.payload.title };
  }
  return activeItem;
};

export const activeCards = (activeCards = Data.education, action) => {
  if (action.type === "SELECT_ACTIVE_CARDS") {
    const cardsName = action.payload.name.toLowerCase();
    return Data[cardsName];
  }
  return activeCards;
};

const reducers = combineReducers({
  menuTabs: menuTabs,
  activeTab: updateActiveTab,
  activeCards: activeCards
});

export default reducers;
