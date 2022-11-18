import React, {
  createContext,
  useReducer,
  useEffect,
} from 'react';
import AppReducer from '../reducers/AppReducer';
import { log } from '../utils/logger'

const { env: { NODE_ENV }} = process

const initialState = {
  NODE_ENV,
  modal: {},
  toast: null,
  GROUPS: null,
  COUNTRIES: null,
  entries: null,
  responses: null,
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({
  children
}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions for changing state
  function setModal(data) {
    dispatch({
      type: 'UPDATE_MODAL',
      payload: data
    });
  }

  function setToast(data) {
    dispatch({
      type: 'UPDATE_TOAST',
      payload: data
    });
  }

  function setGroups(data) {
    dispatch({
      type: 'UPDATE_GROUPS',
      payload: data
    });
  }

  function setCountries(data) {
    dispatch({
      type: 'UPDATE_COUNTRIES',
      payload: data
    });
  }

  function setEntries(data) {
    dispatch({
      type: 'UPDATE_ENTRIES',
      payload: data
    });
  }

  function setResponses(data) {
    dispatch({
      type: 'UPDATE_RESPONSES',
      payload: data
    });
  }

  useEffect(() => {
    log('state', 'rgb(217, 38, 169)', state);
  }, [state])

  return ( <GlobalContext.Provider value = {
      {
        ...state,
        setModal,
        setToast,
        setGroups,
        setCountries,
        setEntries,
        setResponses,
      }
    } > {
      children
    } </GlobalContext.Provider>
  )
}