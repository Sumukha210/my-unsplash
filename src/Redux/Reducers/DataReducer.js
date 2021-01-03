import {
  ISERROR,
  ISLOADING,
  FETCHDATA,
  REMOVEDATA,
  SAVEDATA,
} from "../Actions/DataActions";

//here userdata=all the saved images in database
const intialState = {
  userData: [],
  isLoading: false,
  isError: [],
};

export const ImageDataReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case FETCHDATA:
      return {
        ...state,
        isLoading: false,
        isError: [],
        userData: [...state.userData],
      };

    case SAVEDATA:
      return {
        ...state,
        isLoading: false,
        isError: [],
        userData: [...state.userData, ...payload],
      };

    case REMOVEDATA:
      const result = state.userData.filter(item => item._id != payload);
      return {
        ...state,
        isLoading: false,
        isError: [],
        userData: [...result],
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
