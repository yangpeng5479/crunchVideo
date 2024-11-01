import { post,get,getsend,set ,Delete,put} from "./newAxios.js";
//all
export const getvideos = get("/v2/videos",'post');
//登陆
export const getbanner = get("/v2/banners",'post');
//detail
export const  getdetail = getsend("/v2/videos",'post');
//
// export const  = post("",'post',);
//
// export const  = post("",'post',);
//
// export const  = post("",'post',);
//
// export const  = post("",'post',);
//
// export const  = post("",'post',);
//
// export const  = post("",'post',);
//
// export const  = post("",'post',);