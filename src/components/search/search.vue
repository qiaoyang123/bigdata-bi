<template>
  <div class="item-box">
    <div class="block-box">
      <template v-for="item in searchConfig.searchItem.filter((item)=>!item.isSearchHide)">
        <div v-if="item.type" class="inline-box mg-r">
          <span v-if="!item.isSlot && item.label && item.label != '-'" class="label-sign">{{item.label}}</span>
          <span style="margin-left: -15px" v-if="item.label == '-'">-</span>
          <el-input v-if="item.type == 'input'" v-model.trim="searchParams[item.key]" :style="item.width ? 'width:'+item.width : ''" class="input-item-middle" size="small" :placeholder="item.placeholder"></el-input>
          <el-select  v-else-if="item.type =='select'" :filterable="item.filterable" v-model="searchParams[item.key]" :style="item.width ? 'width:'+item.width : ''" class="input-item-middle" size="small"  :placeholder="item.placeholder">
            <template v-for="subItem in item.options">
              <el-option :label="subItem.label" :value="subItem.value"></el-option>
            </template>
          </el-select>
          <el-date-picker v-if="item.type == 'date'"
            v-model.trim="searchParams[item.key]"
            align="right" size="small" class="input-item-middle"
            type="date"
            format="yyyy-MM-dd"
            value-format="yyyy-MM-dd"
            :placeholder="item.placeholder"
            >
          </el-date-picker>
          <template v-else-if="item.items && item.type == 'check-group'">
            <template v-for="subItem in item.items">
              <el-checkbox v-model="searchParams[subItem.key]">{{subItem.label}}</el-checkbox>
            </template>
          </template>
          <template v-if="item.isSlot">
            <slot :name="item.slotName"></slot>
          </template>
        </div>
      </template>
    </div>
    <div class="block-box inline-r">
      <template v-for="item in searchConfig.searchMenu">
        <el-button v-if="item.type == 'search'" :type="item.style" size="small"
                   @click="searchSubmit">{{item.label}}</el-button>
        <template v-if="item.isSlot">
          <slot :name="item.slotName"></slot>
        </template>
      </template>
      <el-button size="small" @click="resetSearch">重 置</el-button>
    </div>
  </div>

</template>
<script>
  import {mapActions,mapState} from 'vuex'
  export default{
    data() {
      return {
        pickerOptions1: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          }
        },
        value1: '',
        value2: '',
      };
    },
    computed:{
      ...mapState(['searchConfig','searchParams'])
    },
    created(){
      this.initView()
    },
    data:()=>({
      initSearch:{
        page:1,
        rows:20
      }
    }),
    methods:{
      ...mapActions(['setSearchParams','setToast']),
      initView(){

      },

      searchSubmit(){
        const regType = UtilTool.parseCheck(this.searchConfig.searchItem)
        for(let i in this.searchParams){
          if(regType[i]){
            for(let j in regType[i]){
              let reg = regType[i][j]
              if(this.searchParams[i] && !this.searchParams[i].match(RegExpType[reg.type])){
                this.setToast({
                  isShow:true,
                  msg:reg.msg,
                  type:'warning'
                })
                return false
              }
            }
          }
        }
        this.$router.push({
          path: this.$route.path,
          query: Object.assign({},UtilTool.stringifyQuery(this.searchParams),this.initSearch,{t:new Date().getTime()})
        })
      },
      toBoolean(val){
        return (/^true$/g).test(val)
      },
      resetSearch(){
        let params = {}
        this.searchConfig.searchItem.map((item)=>{
          if(item.items){
            item.items.map((subItem)=>{
              params[subItem.key] = subItem.isClear ?  '' : subItem.intKey
            })
          } else {
            params[item.key] = item.isClear ? '' : item.intKey
          }
        })
        this.setSearchParams(params)
      },

    },
    watch:{
      '$route.name':function(){
        this.initView()
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  .input-item-middle{
    width: 180px;
  }
</style>
