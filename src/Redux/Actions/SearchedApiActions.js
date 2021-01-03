import axios from "axios";

//related to  all the images(when page loads)
export const SEARCHEDDATA = "SEARCHEDDATA";
export const ISLOADING = "ISLOADING";
export const ISERROR = "ISERROR";

export const isLoadingFun = payload => ({ type: ISLOADING, payload });
export const isErrorFun = payload => ({ type: ISERROR, payload });

//related to API calls=search images
export const searchedDataFun = payload => ({ type: SEARCHEDDATA, payload });

//fetching images by searchTerm
export const fetchDataBySearchTerm = searchTerm => async dispatch => {
  dispatch(isLoadingFun(true));
  const { data } = await axios.get(`/searchTerm/?s=${searchTerm}`);
  console.log("fetching images by search term", data);
};
