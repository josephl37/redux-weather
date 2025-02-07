import { combineReducers } from "redux";
import WeatherReducer from "./reducer-weather"

const rootReducer = combineReducers({
  weather: WeatherReducer,
});

export default rootReducer;
