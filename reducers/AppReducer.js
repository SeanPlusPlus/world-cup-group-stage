import { log } from '../utils/logger'

export default (state, action) => {

  const d = new Date();
  log('→', 'rgb(229, 231, 235)', d.toLocaleTimeString());
  log('action', 'rgb(251, 189, 35)', action);

  switch (action.type) {
    case 'UPDATE_MODAL':
      return {
        ...state,
        modal: action.payload,
      }
    case 'UPDATE_GROUPS':
      return {
        ...state,
        GROUPS: action.payload,
      }
    case 'UPDATE_COUNTRIES':
      return {
        ...state,
        COUNTRIES: action.payload,
      }
    case 'UPDATE_ENTRIES':
      return {
        ...state,
        entries: action.payload,
      }
    default:
      return state;
  }
}