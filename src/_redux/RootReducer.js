import { combineReducers } from "redux";
import LunchReducer from "../components/LaunchRocket/_redux/reducer/LaunchRocketReducer";

const RootReducer = combineReducers({
    LunchReducer  : LunchReducer,
})

export default RootReducer;