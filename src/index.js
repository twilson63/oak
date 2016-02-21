import virtualDOM from 'virtual-dom'
import main from 'main-loop'
import { map, compose } from 'ramda'
import { createStore, combineReducers } from 'redux'

const buildStore = compose(createStore, combineReducers)

const createApp = ({ reducers, render, target }) => {
  // create store
  const store = buildStore(reducers)
  //start main loop
  const loop = main(store.getState(), render, virtualDOM)
  // getState then update loop
  const updateState = compose(loop.update, store.getState)
  // handle state changes
  store.subscribe(updateState)
  // apply app to dom
  target.appendChild(loop.target)
  // return store
  return store
}

export default createApp
