import axios from "axios";

//related to  all the images(when page loads)
export const ALLAPIDATA = "ALLAPIDATA";
export const ISLOADING = "ISLOADING";
export const ISERROR = "ISERROR";

export const isLoadingFun = payload => ({ type: ISLOADING, payload });
export const isErrorFun = payload => ({ type: ISERROR, payload });

//fetch all the images from API
export const allDataFun = payload => ({ type: ALLAPIDATA, payload });

//fetching all the images from API(when the page loads)
export const fetchAllDataFun = () => async dispatch => {
  dispatch(isLoadingFun(true));
  const { data } = await axios.get(`/all`);
  console.log("fetch all the api data", data);
};
