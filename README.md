# Oak

A solid community managed front-end focused composition of libraries.

Oak takes reliable community managed libraries and composes them together to simply
make it easier to get started with build your component architected application.

## libraries

* virtual-dom
* redux
* hyperscript (helpers)
* main-loop

## Getting Started

The purpose of this module is to make it very easy to get started building component
architected front-end applications.

```
npm i @twilson63/oak -S
touch src/app.js
```

### app.js

``` js
import createApp from '@twilson63/oak'
import { reducers, render, target } from './components'

const store = createApp({ reducers, render, target })
```

## Component Structure

A component simply consists of two functions:

* reducer
* render

The reducer function takes two parameters and should return the new state.

* state
* action

The state argument will contain the previous state for this component and the
action will contain an object with a type attribute and another attributes to
help.

The render function, is responsible for returning vDOM nodes to be rendered in
the virtual-dom library.

## Helper Methods

### hh

hh can be used in your component to use hyperscript helpers in your view or render
functions.

#### Example

``` js
import hh from 'oak/hh'

const { div, h1 } = hh

const reducer = (state = {}, action) => state

const render = state =>
  div([
    h1('Hello World')
  ])

export { effects, reducer, render }
```

## Recommended Effects Helpers

Using `most`, `linchpin`, and `page` work will with this collection of libraries.

* `most` for dom event streams
* `linchpin` for single event emitter
* `page` for router

This libraries bring in effects from the outside either via route management,
server events, or dom events, using these in your effects section can simplify
your process.

## Thank you

* virtual-dom
* hyperscript
* hyperscript-helpers
* main-loop
* redux 
