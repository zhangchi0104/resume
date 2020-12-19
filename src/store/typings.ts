export const UPDATE_MENU_ITEM = 'app/updateMenuItem'
// Actions
export interface UpdateMenuAction {
  type: typeof UPDATE_MENU_ITEM,
  payload: string
}

export interface AppState {
  activeMenuTab: string,
  sections: string[]
}

export type AppActions = UpdateMenuAction