import {
  FILTEREDDATA,
  ISERROR,
  ISLOADING,
} from "../Actions/FilteredApiActions";

const initalState = {
  allData: [],
  isLoading: false,
  isError: [],
};

export const FilteredApiReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case FILTEREDDATA:
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
