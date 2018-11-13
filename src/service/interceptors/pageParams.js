import axios from 'axios'

axios.interceptors.request.use( config =>{
    config.data = parsePageParams(config.data)
    return config;
  },
  error => Promise.reject(error)
);
const parsePageParams = (opts) => {
  let _opts = {},
    p_opts = Object.assign({},opts)
  if(p_opts.page || p_opts.rows){
    _opts.page = p_opts.page
    _opts.rows = p_opts.rows
    _opts.params = Object.assign({},p_opts)
    delete _opts.params.page
    delete _opts.params.rows
    for(let i in _opts.params){
      _opts.params[i] = _opts.params[i] ? _opts.params[i] :
        ({}.toString.call(_opts.params[i]) == '[object Number]' ? _opts.params[i] : null )
    }
  }
  else {
    _opts = Object.assign({},p_opts)
  }
  return _opts
}
