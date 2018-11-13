<template>
  <div class="item-box">
    <div class="item-table">
      <div class="item-table">
        <el-table v-loading="loading" element-loading-text="拼命加载中" :data="searchResult.rows" style="width: 100%;" >
          <template v-for="(item,index) in searchConfig.searchResult">
            <el-table-column v-if="item.type=='image'" :label="item.label" :width="item.width" :align="item.align">
              <template scope="scope">
                <div class="table-image">
                  <img :src="scope.row[item.key]" style="width: 80px;height: 80px" alt="">
                </div>
              </template>
            </el-table-column>
            <el-table-column v-else-if="item.type=='detail'" :label="item.label" :width="item.width" :align="item.align">
              <template scope="scope">
                <div class="table-detail">
                  <p v-for="detail in item.items">
                    <span class="name">{{detail.label}}</span>
                    <span>{{scope.row[item.key][detail.key]}}</span>
                  </p>
                </div>
              </template>
            </el-table-column>

            <el-table-column v-else :prop="item.key" :label="item.label" :width="item.width" :align="item.align"></el-table-column>
          </template>
        </el-table>
      </div>
      <v-pagination v-if="pagingShow" :paging="paging" />
    </div>
  </div>
</template>
<script>
  import vPagination from '@/components/tools/Pagination'
  import fetchUrl from '@/assets/js/common/fetch-url'
  import {mapActions,mapState} from 'vuex'
  export default{
    computed:{
      ...mapState(['searchConfig','searchParams','handleEvent'])
    },
    props:['API'],
    created(){
      this.initView()
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
      ...mapActions(['setSearchParams','pageList',
        'setStartToast','setHandleEvent']),
      initView(){
        const query = UtilTool.parseQuery(this.$route.query)
        const params = UtilTool.paramsAssign(query,this.searchParams)
        const _API = fetchUrl[this.API]
        this.setSearchParams(params)
        this.searchList(params,_API)
      },
      searchList(params,API){
        this.loading = true
        this.pageList({params,API})
          .then((item)=>{

            this.searchResult = item
            this.setPage()
          })
      },
      setPage(){
        this.paging.pageSize = Number(this.searchParams.rows)
        this.paging.currentPage = Number(this.searchParams.page)
        this.paging.total = this.searchResult.total
        this.pagingShow = true
        this.loading = false
      },
      setPageEvent(name,rs){
        const _opt = {
          currentEvent:name,
          eventRs:rs,
          time:new Date().getTime(),
        }
        let _params = Object.assign({},this.handleEvent,_opt)
        this.setHandleEvent(_params)
      },
      getToast(msg){
        this.setStartToast({
          isShow:true,
          msg:msg,
          type:'warning'
        })
      },
    },
    watch: {
      '$route' (to, from) {
        if (to.fullPath !== from.fullPath) {
          this.initView();
        }
      },
      'handleEvent.refreshTime' () {
          if(this.handleEvent.currentEvent){
            this.initView()
          }

      }
    },
    components: {
      vPagination,
    },

  }
</script>

