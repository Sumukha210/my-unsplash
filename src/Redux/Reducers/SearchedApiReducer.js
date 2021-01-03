import {
  SEARCHEDDATA,
  ISERROR,
  ISLOADING,
} from "../Actions/SearchedApiActions";

const initalState = {
  allData: [],
  isLoading: false,
  isError: [],
};

export const SearchedApiReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case SEARCHEDDATA:
      return {
        ...state,
        isLoading: false,
        isError: [],
        allData: [...payload],
      };

    case ISERROR:
      return {
        userData: [],
        isLoading: false,
        isError: payload,
      };

    case ISLOADING:
      return {
        userData: [],
        isLoading: payload,
        isError: "",
      };

    default:
      return state;
  }
};
