import types from './types'

export default {
  /*
   * 加载配置
   * */
  [types.SET_LOADING]:(state,rs)=>{
    if(rs){
      state.loadingConfig.loadList.push('1')
    } else {
      state.loadingConfig.loadList.pop()
    }
  },
  /*
   * 提醒配置
   * */
  [types.SET_TOAST]:(state,rs)=>{
    state.toastConfig = rs
  },
  /*
   * 当前搜索值
   * */
  [types.SET_SEARCH_PARAMS]:(state,rs)=>{
    state.searchParams = rs
  },
  /*
   * 当前搜索配置
   * */
  [types.SET_SEARCH_CONFIG]:(state,rs)=>{
    state.searchConfig = rs
  },
  /*
   * 图片预览
   * */
  [types.SET_VIEW_IMAGE]:(state,rs) => {
    state.viewImageConfig = rs
  },
}
