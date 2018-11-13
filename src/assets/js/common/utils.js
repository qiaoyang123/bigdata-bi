const UtilTool = {
  deepCopy: (pre) => {
    let ch = pre.constructor === Array ? [] : {};
    if(typeof pre !== 'object'){
      ch = pre;
    }
    else if(window.JSON){
      ch = JSON.parse(JSON.stringify(pre))
    }
    else{
      for(var i in pre){
        ch[i] = typeof pre[i] === 'object' ?
          (pre[i].constructor === Array ? pre[i].slice() : deepCopy(pre[i]))
          : pre[i]
      }
    }
    return ch;
  },
  stringifyQuery:(query)=>{
    let opts = {}
    for(let i in query){
      let _opt = query[i]
      if(Object.prototype.toString.call(_opt) === '[object Array]'){
        if(_opt.length){
          opts[i] =  _opt.length == 1 ? _opt.join('Asp,Asp')+'Asp,Asp' : _opt.join('Asp,Asp')
        }
      } else if(_opt){
        opts[i] =  _opt
      }
    }
    return opts
  },
  parseQuery:(query)=>{
    let queryParams = {}
    for(let i in query){
      let _opt = query[i]
      if(_opt){
        queryParams[i] = (_opt+'').indexOf('Asp,Asp') > -1 ? (_opt+'').split('Asp,Asp').filter((item)=>item) : _opt
      }
    }
    return queryParams
  },
  parseCheck:(query)=>{
    let queryParams = {}
    for(let i in query){
      if(query[i].regType){
        queryParams[query[i].key] = query[i].regType
      }
    }
    return queryParams
  },
  paramsAssign:(query,params,defParams)=>{
    let _params = Object.assign({},params)
    const _paramsKey = Object.keys(_params)
    for(let i in query){
      if(_paramsKey.indexOf(i) > -1){
        _params[i] = query[i]
      }
    }
    if(defParams){
      _params = Object.assign({},_params,defParams)
    }
    return _params
  },
  formatDate:(date,fmt)=>{
    if(/(y+)/.test(fmt)){
      fmt = fmt.replace(RegExp.$1, (date.getFullYear()+'').substr(4-RegExp.$1.length))
    }
    let o = {
      'M+': date.getMonth()+1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds()
    }
    for(let k in o){
      let str = o[k]+''
      if(new RegExp(`(${k})`).test(fmt)){
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length===1)?str:UtilTool.padLeftZero(str))
      }
    }
    return fmt
  },
  padLeftZero: (str) => {
    return ('00' + str).substr(str.length)
  },
}
const RegExpType = {
  Num: /^[1-9]{1}[0-9]*$/g,
  Price: /^[0-9]{1}[0-9]*(\.[0-9]{1,2})?$/g,
  Qq: /^\d{6,}$/g,
  Tel:/^1(3|4|5|7|8)\d{9}$/g,
  Email:/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/g
}
let isDev = () => {
  if (location.href.indexOf('data-center.test.gegejia.com') > -1) {
    console.log('hello world')
    return ''
    // return 'http://118.178.33.6/api'
  } else if (location.href.indexOf('120.55.23.233') > -1) {
    return ''
  } else {
    return ''
    // return 'http://192.168.1.190:8081/api'
  }
}
window.REQUEST_URL = isDev()

window.UtilTool = UtilTool
window.RegExpType = RegExpType
