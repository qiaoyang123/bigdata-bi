import vSearch from '@/components/search/search'
import {mapActions} from 'vuex'

export default {
  methods:{
    ...mapActions(['setSearchConfig','setSearchParams']),
    paramsInit(){
      let params = {}
      this.searchPage.searchItem.map((item)=>{
        if(item.items){
          item.items.map((subItem)=>{
            params[subItem.key] = subItem.intKey
          })
        } else {
          params[item.key] = item.intKey
        }
      })
      this.setSearchConfig(this.searchPage)
      this.setSearchParams(params)
    }
  },
  components:{
    vSearch
  }
}
