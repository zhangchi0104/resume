import   { createStore } from 'redux'
import { AppActions, AppState, UPDATE_MENU_ITEM } from './typings'

const appState : AppState = {
  activeMenuTab: "Education",
  sections: ["Education", "Projects", "Skills"]
}

export function appReducer (state=appState, action: AppActions) : AppState {
  switch (action.type) {
    case UPDATE_MENU_ITEM:
      return {
        ...state,
        activeMenuTab: action.payload
      }
    default:
      return {
        ...state
      }
  }
}

const store = createStore(appReducer)
export type AppDispatch = typeof store.dispatch 
export default store