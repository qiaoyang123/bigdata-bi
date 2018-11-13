import vPagination from '@/components/tools/Pagination'
import {mapActions,mapState} from 'vuex'

export default {
  computed:{
    ...mapState(['searchConfig','searchParams'])
  },
  data:()=>({
    loading:false,
    paging:{
      currentPage:1,
      pageSizes:[20,30,50,100],
      pageSize:0,
      total:0
    },
    pagingShow:false,
    searchResult:{}
  }),
  methods:{
    ...mapActions(['setSearchParams','setStartToast']),
    initView(){
      const query = UtilTool.parseQuery(this.$route.query)
      const params = UtilTool.paramsAssign(query,this.searchParams)
      this.setSearchParams(params)
      this.searchList(params)
    },
    setPage(){
      this.paging.pageSize = Number(this.searchParams.rows)
      this.paging.currentPage = Number(this.searchParams.page)
      this.paging.total = this.searchResult.total
      this.pagingShow = true
    },
    getToast(msg){
      this.setStartToast({
        isShow:true,
        msg:msg,
        type:'warning'
      })
    },
  },
  components:{
    vPagination,
  },
  watch: {
    '$route' (to, from) {
      if (to.fullPath !== from.fullPath) {
        this.initView();
      }
    }
  },
}
