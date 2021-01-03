import axios from "axios";

//here data=image
//related to save,remove,retrive images to/from database
export const FETCHDATA = "FETCHDATA";
export const SAVEDATA = "SAVEDATA";
export const REMOVEDATA = "REMOVEDATA";
export const ISLOADING = "ISLOADING";
export const ISERROR = "ISERROR";

//related to saving images to database
export const saveDataFun = payload => ({ type: SAVEDATA, payload });
export const removeDataFun = payload => ({ type: REMOVEDATA, payload });
export const isLoadingFun = payload => ({ type: ISLOADING, payload });
export const isErrorFun = payload => ({ type: ISERROR, payload });

//fetching all the saved images from the database
export const fetchUserDataFun = () => async dispatch => {
  dispatch(isLoadingFun(true));
  const { data } = await axios.get(`/retriveImages`);
  console.log("retrived images", data);
};

//saving images
export const fetchSaveDataFun = data => async dispatch => {
  dispatch(isLoadingFun(true));
  const { data } = await axios.post("/saveImage", data);
  console.log("saving images", data);
};

//removing images from database
export const fetchRemoveDataFun = id => async dispatch => {
  dispatch(isLoadingFun(true));
  const { data } = await axios.delete(`/removeImage/${id}`);
  console.log("removing images", data);
};
