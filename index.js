'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _virtualDom = require('virtual-dom');

var _virtualDom2 = _interopRequireDefault(_virtualDom);

var _mainLoop = require('main-loop');

var _mainLoop2 = _interopRequireDefault(_mainLoop);

var _ramda = require('ramda');

var _redux = require('redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var buildStore = (0, _ramda.compose)(_redux.createStore, _redux.combineReducers);

var createApp = function createApp(_ref) {
  var reducers = _ref.reducers;
  var render = _ref.render;
  var target = _ref.target;

  // create store
  var store = buildStore(reducers);
  //start main loop
  var loop = (0, _mainLoop2.default)(store.getState(), render, _virtualDom2.default);
  // getState then update loop
  var updateState = (0, _ramda.compose)(loop.update, store.getState);
  // handle state changes
  store.subscribe(updateState);
  // apply app to dom
  target.appendChild(loop.target);
  // return store
  return store;
};

exports.default = createApp;