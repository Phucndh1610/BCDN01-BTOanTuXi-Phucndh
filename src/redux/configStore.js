import { combineReducers, createStore } from "redux"
import BaiTapOanTuXiReducer from './BaiTapOanTuXiReducer'
// reducer: khai báo state, gán lại giá trị cho state và render lại UI
const rootReducer = combineReducers({
//chứa các reducer
    //chứa các state của ứng dụng
    BaiTapOanTuXiReducer
    // reducerA
    // reducerB
})

export const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

