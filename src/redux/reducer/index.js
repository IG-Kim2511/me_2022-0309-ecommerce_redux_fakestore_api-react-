
// 🥒js0310-0440.
import { combineReducers } from "redux";

import reducer_handleCart from './reducer_handleCart'

const rootReducers = combineReducers(
    {
        reducer_handleCart,
    }
);

export default rootReducers;