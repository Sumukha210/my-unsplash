import {
  ISAUTHENTICATED,
  ISERROR,
  ISLOADING,
  USERINFO,
} from "../Actions/AuthAction";

const initialState = {
  userInfo: [],
  isAuth: true,
  isLoading: false,
  isError: [],
};

export const AuthReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USERINFO:
      return {
        ...state,
        userInfo: [...payload],
        isLoading: false,
        isError: [],
      };

    case ISAUTHENTICATED:
      return {
        isAuth: payload,
        userInfo: [],
        isLoading: false,
        isError: [],
      };

    case ISLOADING:
      return {
        isLoading: true,
        userInfo: [],
        isAuth: false,
        isError: [],
      };

    case ISERROR:
      return {
        isError: [...payload],
        userInfo: [],
        isAuth: false,
        isLoading: false,
      };

    default:
      return state;
  }
};
