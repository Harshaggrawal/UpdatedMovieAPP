// import { exp } from "react-native-reanimated";
import { combineReducers } from "redux";
import MovieReducer from "./MovieReducer";


const rootReducer= combineReducers({
    MovieReducer,
})

export default rootReducer;