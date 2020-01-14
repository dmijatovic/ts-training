import {createStore, applyMiddleware} from 'redux'

import {rootReducer} from "./reducers"

import {midFetch} from "./middleware/midFetch"

const middleware = applyMiddleware(midFetch)

export const store = createStore(rootReducer, middleware)