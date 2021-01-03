export const USERINFO = "USERINFO";
export const ISAUTHENTICATED = "ISAUTHENTICATED";
export const ISLOADING = "ISLOADING";
export const ISERROR = "ISERROR";

export const userInfoFun = payload => ({ type: USERINFO, payload });
export const isAuthenticatedFun = payload => ({
  type: ISAUTHENTICATED,
  payload,
});
export const isLoadingFun = () => ({ type: ISLOADING });
export const isErrorFun = payload => ({ type: ISERROR, payload });
