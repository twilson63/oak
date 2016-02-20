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
npm i oak -S
touch src/app.js
```

### app.js

``` js
import createApp from 'oak'
import { effects, reducers, render, target } from './components'

createApp({ effects, reducers, render, target })
```

## Helper Methods

### hh

hh can be used in your component to use hyperscript helpers in your view or render
functions.

#### Example

``` js
import hh from 'oak/hh'

const { div, h1 } = hh

const effects = store => {

}

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
