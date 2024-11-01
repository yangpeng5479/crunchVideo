import axios from "axios";
import router from '@/router'
import {
  Loading,
  Message
} from 'element-ui';
const axiosService = axios.create({
  // baseURL: '/api',
  timeout: 60000,
});
const urladd = 'https://crunch-api.dev.catgpt.chat'
export const get = function (urls,method) {
  let loaddingSevice;
  return (params) => {
    // loaddingSevice = Loading.service();
    return new Promise(function (resolve, reject) {
      // let Authorization =   '768c274b-8250-4038-ab6b-b4feb9821dd6'
      let Authorization = localStorage.getItem('token')
      console.log(params);
      axiosService({
          url:urladd + urls,
          method: 'get',
          params: params,
          
          headers: {
            "Content-Type": "application/json",
            "Authorization":Authorization,
          },
        })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
       
        });
    });
  };
};
export const getsend = function (urls,method) {
  let loaddingSevice;
  return (params) => {
    // loaddingSevice = Loading.service();
    return new Promise(function (resolve, reject) {
      // let Authorization =   '768c274b-8250-4038-ab6b-b4feb9821dd6'
      let Authorization = localStorage.getItem('token')
      console.log(params);
      axiosService({
          url:urladd + urls +`/${params.id}`+`/1`,
          method: 'get',
          params: params,
          
          headers: {
            "Content-Type": "application/json",
            "Authorization":Authorization,
          },
        })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
       
        });
    });
  };
};
// 发送 POST 请求
export const post = function (urls,method) {
  let loaddingSevice;
  
  return (params) => {
    loaddingSevice = Loading.service();
    return new Promise(function (resolve, reject) {
      // let Authorization =   '768c274b-8250-4038-ab6b-b4feb9821dd6'
      let Authorization = localStorage.getItem('token')

      axiosService({
          url:urladd + urls,
          method: 'post',
          data: params,
          headers: {
            "Content-Type": "application/json",
            "Authorization":Authorization,
          },
        })
        .then((res) => {
          if (res.data.code == 401) {
            console.log("token过期");
              loaddingSevice.close();
            Message({
              message: '登录状态过期，请重新登录',
              type: 'warning'
            });
            localStorage.removeItem('token');
            router.push('login')
            // store.dispatch('user/logout').then(() => {
            //   router.push('login')
            // });
            // loaddingSevice.close();
            // localStorage.removeItem('token')
          
            // router.push('/login')
              // router.push(`/login?redirect=${route.fullPath}`)
            // store.dispatch('user/logout').then(() => {
            //   router.push('login')
            // });
          } else {
            console.log(res.data)
            loaddingSevice.close();
            resolve(res.data);
           
          }
        })
        .catch((err) => {
          loaddingSevice.close();
          reject(err);
       
        });
    });
  };
};
// 发送 upload 请求
// 发送 POST 请求
export const Delete = function (urls,method) {
  let loaddingSevice;
  return (params) => {
    loaddingSevice = Loading.service();
    return new Promise(function (resolve, reject) {
      // let Authorization =   '768c274b-8250-4038-ab6b-b4feb9821dd6'
      let Authorization = localStorage.getItem('token')
      axiosService({
          url:urladd + urls,
          method: 'delete',
          params:params, //delete
          headers: {
            "Content-Type": "application/json",
            "Authorization":Authorization,
          },
        }
      )
        .then((res) => {
          if (res.data.code == 401) {
            console.log("token过期");
              loaddingSevice.close();
            Message({
              message: '登录状态过期，请重新登录',
              type: 'warning'
            });
            // store.dispatch('user/logout').then(() => {
            //   router.push('login')
            // });
          } else {
            console.log(res.data)
            loaddingSevice.close();
            resolve(res.data);
           
          }
        })
        .catch((err) => {
          loaddingSevice.close();
          reject(err);
       
        });
    });
  };
};

// 发送 put 请求
export const put = function (urls,method) {
  let loaddingSevice;
  return (params) => {
    loaddingSevice = Loading.service();
    return new Promise(function (resolve, reject) {
      // let Authorization =   '768c274b-8250-4038-ab6b-b4feb9821dd6'
      let Authorization = localStorage.getItem('token')
    
      axiosService({
          url:urladd + urls,
          method: 'put',
          data: params,  //put
          headers: {
            "Content-Type": "application/json",
            "Authorization":Authorization,
          },
        }
      )
        .then((res) => {
          if (res.data.code == 401) {
            console.log("token过期");
              loaddingSevice.close();
            Message({
              message: '登录状态过期，请重新登录',
              type: 'warning'
            });
            // store.dispatch('user/logout').then(() => {
            //   router.push('login')
            // });
          } else {
            console.log(res.data)
            loaddingSevice.close();
            resolve(res.data);
          }
        })
        .catch((err) => {
          loaddingSevice.close();
          reject(err);
        });
    });
  };
};








// 发送 POST 请求
export const postIO = function (url) {
  // let loaddingSevice;
  
  return (params) => {
    // loaddingSevice = Loading.service();
    return new Promise(function (resolve, reject) {
      // let Authorization =   '768c274b-8250-4038-ab6b-b4feb9821dd6'
      let Authorization = localStorage.getItem('token')
      console.log(token);
      axiosService({
          url,
          method: "post",
          data: params,
          headers: {
            "Content-Type": "application/json",
            "Access-Token": Authorization,
          },
        })
        .then((res) => {
          if (res.data.status == 401) {
            console.log("token过期");
            Message({
              message: '登录状态过期，请重新登录',
              type: 'warning'
            });
            // loaddingSevice.close();
            // store.dispatch('user/logout').then(() => {
            //   router.push('login')
            // });
          } else {
            console.log(res.data)
            // loaddingSevice.close();
            resolve(res.data);
           
          }
        })
        .catch((err) => {
          // loaddingSevice.close();
          reject(err);
       
        });
    });
  };
};
export const postDown = function (url) {
  // let loaddingSevice;
  
  return (params) => {
    // loaddingSevice = Loading.service();
    return new Promise(function (resolve, reject) {
  
      // let Authorization =   '768c274b-8250-4038-ab6b-b4feb9821dd6'
      let Authorization = sessionStorage.getItem('YO_TOKEN')
      axiosService({
          url:urla + url,
          method: "post",
          data: params,
          headers: {
            "Content-Type": "application/json",
            "Access-Token": Authorization,
          },
        })
        .then((res) => {
          if (res.data.status == 401) {
            console.log("token过期");
            Message({
              message: '登录状态过期，请重新登录',
              type: 'warning'
            });
            // loaddingSevice.close();
            // store.dispatch('user/logout').then(() => {
            //   router.push('login')
            // });
          } else {
            console.log(res.data)
            // loaddingSevice.close();
            resolve(res.data);
           
          }
        })
        .catch((err) => {
          // loaddingSevice.close();
          reject(err);
       
        });
    });
  };
};
export const getsour = function (url,a,b) {

  return (params) => {
    const  url = `http://upload.uvfuns.com/api/upload/complete?fragment_count=${a}&upload_token=${b}}`
    return new Promise(function (resolve, reject) {
      axiosService({
          url,
          method: "POST",
          // data: params,
          // headers: {
          //   "Content-Type": "application/json",
          // },
        })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
};
export const get1 = function (url) {
  return (params) => {
    return new Promise(function (resolve, reject) {
      axiosService({
          url,
          method: "get",
          data: params,
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
};

export default axiosService;
