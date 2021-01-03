import axios from "axios";

//related to  all the images(when page loads)
export const FILTEREDDATA = "FILTEREDDATA";
export const ISLOADING = "ISLOADING";
export const ISERROR = "ISERROR";

export const isLoadingFun = payload => ({ type: ISLOADING, payload });
export const isErrorFun = payload => ({ type: ISERROR, payload });

//filter images by category
export const filteredDataFun = payload => ({ type: FILTEREDDATA, payload });

//fetching images by category
export const fetchDataByCategoryFun = category => async dispatch => {
  dispatch(isLoadingFun(true));
  const { data } = await axios.get(`/category/?c=${category}`);
  console.log("fetching images by category", data);
};
