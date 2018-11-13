import service from '@/service/index'
// let url = 'http://118.178.33.6/api'
// let url = process.env.API_ROOT
export default {
  getProductList (commit, rs) {
    const opts = {
      method: 'post',
      url: '/api/order/getGross',
      data: rs
    }
    return service.fetch(commit, opts)
  },
  changeState (commit, rs) {
    const opts = {
      method: 'post',
      url: '/api/order/getGroups',
      data: rs
    }
    return service.fetch(commit, opts)
  },
  changeSaleProductVcharts (commit, rs) {
    const opts = {
      method: 'post',
      type: 'json',
      url: '/api/order/getSaleProductVcharts',
      data: rs
    }
    return service.fetch(commit, opts)
  },
  exportSaleProduct (commit, rs) {
    const opts = {
      method: 'post',
      type: 'json',
      url: '/api/order/exportSaleProduct',
      data: rs
    }
    return service.fetch(commit, opts)
  }
}
