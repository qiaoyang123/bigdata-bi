import productService from '@/service/product/product'
export default {
  getProductList({commit},rs){
    return productService.getProductList(commit,rs)
  },
  changeState({commit},rs) {
    return productService.changeState(commit,rs)
  },
  changeSaleProductVcharts({commit},rs) {
    return productService.changeSaleProductVcharts(commit,rs)
  }
}
