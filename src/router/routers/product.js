const ProductList = resolve => require(['@/views/product/product'], resolve)

export default [
  {
    path: '/product/list',
    name: 'ProductList',
    component: ProductList
  }
]
