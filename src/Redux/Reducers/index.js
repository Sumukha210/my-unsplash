import { combineReducers } from "redux";
import { AuthReducer } from "./AuthReducer";
import { ImageDataReducer } from "./DataReducer";
import { SearchedApiReducer } from "./SearchedApiReducer";
import { FilteredApiReducer } from "./FilteredApiReducer";
import { AllApiDataReducer } from "./AllApiReducer";

export const RootReducer = combineReducers({
  AuthReducer,
  ImageDataReducer,
  SearchedApiReducer,
  FilteredApiReducer,
  AllApiDataReducer,
});
