import virtualDOM from 'virtual-dom'
import main from 'main-loop'
import { map } from 'ramda'
import { createStore, combineReducers } from 'redux'

const createApp = ({ effects, reducers, render, target }) => {
  // create store
  const store = createStore(combineReducers(reducers))

  // initialize component effects
  map(effect => effect(store), effects)

  //start main loop
  const loop = main(store.getState(), render, virtualDOM)

  // handle state changes
  store.subscribe(_ => loop.update(store.getState()))

  // apply app to dom
  target.appendChild(loop.target)

}

export default createApp
