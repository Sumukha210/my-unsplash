import { ALLAPIDATA, ISERROR, ISLOADING } from "../Actions/AllApiActions";

const initalState = {
  allData: [],
  isLoading: false,
  isError: [],
};

export const AllApiDataReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case ALLAPIDATA:
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
