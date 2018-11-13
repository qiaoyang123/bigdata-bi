import Vue from 'vue'
import Vuex from 'vuex'
import state from './states'
import mutations from './mutations'
import actions from './actions'
import product from './product'

Vue.use(Vuex)
const option = {
  state,
  mutations,
  actions,
  modules: {
    product
  }

}
export default new Vuex.Store(option)
