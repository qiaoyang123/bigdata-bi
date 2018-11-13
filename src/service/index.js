import axios from 'axios'
import types from '@/store/types'
// import './interceptors/pageParams' //分页数据过滤
import './interceptors/cancelFetch'
// import Vue from 'vue' // 重复请求拦截
const fetch = (commit, opts, fn) => {
  return new Promise((resolve) => {
    axios.post(REQUEST_URL + opts.url, opts.data).then((response) => {
      if (Object.prototype.toString.call(response.data) == '[object String]' && response.data.indexOf('window.location.href') != -1) {
        eval(response.data.replace('<script>', '').replace('</script>', ''))
      } else {
        if (response.data.code == 0) {
          fn && commit(fn, response.data)
          resolve && resolve(response.data.data)
        } else {
          errCatch(commit, resolve, response.data.message)
        }
      }
    }).catch((err) => {
      errCatch(commit, resolve, '服务器异常请稍后重试')
    })
  })
}
const errCatch = (commit, resolve, msg) => {
  commit(types.SET_TOAST, {
    isShow: true,
    msg: msg,
    type: 'error'
  })
  resolve && resolve()
}

const environmentPath = () => {
  if (location.href.indexOf('data-center.test.gegejia.com') > -1) {
    return 'http://118.178.33.6'
    // return 'http://118.178.33.6/api'
  } else if (location.href.indexOf('120.55.23.233') > -1) {
    return 'http://120.55.23.233:8080'
  } else {
    return ''
    // return 'http://192.168.1.190:8081/api'
  }
}

export default {
  fetch: fetch,
  method: {
    environmentPath() {
      if (location.href.indexOf('data-center.test.gegejia.com') > -1) {
        return 'http://118.178.33.6'
        // return 'http://118.178.33.6/api'
      } else if (location.href.indexOf('120.55.23.233') > -1) {
        return 'http://120.55.23.233:8080'
      } else {
        return ''
        // return 'http://192.168.1.190:8081/api'
      }
    }
  }
}
