import { combineReducers } from "redux";
import Reducer from './store/Reducer';
import Reducer2 from './store/Reducer2';
import Reducer3 from './store/Reducer3';

export default combineReducers({
    name: Reducer,
    wish:Reducer2,
    color:Reducer3
})





  
