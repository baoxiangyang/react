import { combineReducers } from 'redux';
import counter from './actions-index.js';
//使用redux的combineReducers方法将所有reducer打包起来
const rootReducer = combineReducers({
  counter
})

export default rootReducer