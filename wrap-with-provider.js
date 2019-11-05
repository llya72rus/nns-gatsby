import React from 'react'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import * as reducers from './src/redux/reducers'

const initialState = {
  lang: 'ru',
}

const combinedReducers = combineReducers({ ...reducers })
export default ({ element }) => {
  const store = createStore(
    combinedReducers,
    initialState
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  return <Provider store={store}>{element}</Provider>
}
