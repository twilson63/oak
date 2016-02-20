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

var createApp = function createApp(_ref) {
  var effects = _ref.effects;
  var reducers = _ref.reducers;
  var render = _ref.render;
  var target = _ref.target;

  // create store
  var store = (0, _redux.createStore)((0, _redux.combineReducers)(reducers));

  // initialize component effects
  (0, _ramda.map)(function (effect) {
    return effect(store);
  }, effects);

  //start main loop
  var loop = (0, _mainLoop2.default)(store.getState(), render, _virtualDom2.default);

  // handle state changes
  store.subscribe(loop.update);

  // apply app to dom
  target.appendChild(loop.target);
};

exports.default = createApp;