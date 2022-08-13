import {combineReducers} from 'redux';
import BaiTapGioHangReducer from './BaiTapGioHangReducer';

const rootReducer = combineReducers({
    // store tong cua ung dung
    stateGioHang: BaiTapGioHangReducer
})

export default rootReducer;