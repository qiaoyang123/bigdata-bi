import axios from 'axios'
let _fetchConf = {}
let CancelToken = axios.CancelToken

let romoveFetch = (config,fn)=>{
  let _url = config.url
  if(_fetchConf[_url]){
    if(fn) fn()
    else delete _fetchConf[_url]
  } else {
    if(fn) _fetchConf[_url] = true
  }
}
axios.interceptors.request.use( config =>{
    config.cancelToken = new CancelToken((c)=>{
      romoveFetch(config,c)
    })
    return config;
  },
  error => Promise.reject(error)
);

axios.interceptors.response.use( response => {
    romoveFetch(response.config)
    return response;
  },
  error=>Promise.reject(error)
);
