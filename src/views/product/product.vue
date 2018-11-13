<template>
  <div>
    <div class="title-box">
      销售单元纬度数据统计表
    </div>

    <div class="section-box">
      <div class="block-box">
        <div class="inline-box mg-r">
          <span class="label-sign">订单类型</span>
          <el-select size="small" v-model="orderTypeValue" placeholder="请选择" class="input-item-middle">
            <el-option
              v-for="item in orderTypes"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="inline-box mg-r">
          <span class="label-sign">历史付款时间</span>
          <el-date-picker align="right" class="input-item-middle"
                          type="date"
                          size="small"
                          format="yyyy-MM-dd"
                          value-format="yyyy-MM-dd"
                          v-model="chartsTime"
                          :default-value="chartsTime"
          ></el-date-picker>
        </div>
        <div class="inline-box mg-r">
          <span class="label-sign">今日累计gmv</span>
          <div style="color: red">{{todayTotalGmv}}</div>
        </div>
        <div class="inline-box mg-r">
          <span class="label-sign">历史累计gmv</span>
          <div style="color: red">{{historyTotalGmv}}</div>
        </div>
      </div>
      <div class="block-box inline-r">
        <el-button @click="initProductVchats" size="small" type="primary">查询</el-button>
      </div>
    </div>
     <div>
        <ve-line :data="chartData" :settings="chartSettings"></ve-line>
     </div>

    <div class="section-box">
      <v-search >
        <el-button size="small" @click="exportProductSale" slot="isExport">导出</el-button>
      </v-search>
      <v-result />
    </div>
  </div>
</template>
<script>
import pageMix from '@/components/Mixin/searchPage'
import vResult from '@/views/product/components/result'
import {mapActions, mapState} from 'vuex'
export default{
  mixins: [pageMix],
  created () {
    this.initView(),
    this.initSelectGroupName(),
    this.initProductVchats()
  },
  data: () => ({
    todayTotalGmv: 0.00,
    historyTotalGmv: 0.00,
    orderTypeValue: '4',
    orderTypes: [
      {
        label: '环球捕手',
        value: '4'
      },
      {
        label: '美食买手',
        value: '10'
      }
    ],
    chartsTime: new Date(new Date().getTime() - 24 * 60 * 60 * 1000),
    searchPage: {
      searchItem: [
        {
          type: '',
          key: 'page',
          intKey: 1
        },
        {
          type: '',
          key: 'rows',
          intKey: 20
        },
        {
          type: 'date',
          label: '付款时间',
          placeholder: '选择日期',
          key: 'payTime',
          intKey: UtilTool.formatDate(new Date(), 'yyyy-MM-dd'), // 初始值
          isClear: false // 重置是否清空
          /* regType:[
              {
                type:'Num',
                msg:'ID请输入数字'
              }
            ] */
        },
        {
          type: 'input',
          label: '销售单元码',
          placeholder: '',
          key: 'saleUnitCode',
          intKey: '', // 初始值
          isClear: true // 重置是否清空
        },
        {
          type: 'input',
          label: '销售商品码',
          placeholder: '',
          key: 'saleGoodsCode',
          intKey: '', // 初始值
          isClear: true // 重置是否清空
        },
        {
          type: 'input',
          label: '销售单元名称',
          filterable: false, // 是否可模糊匹配
          placeholder: '',
          key: 'saleUnitName',
          intKey: ''
        },
        {
          type: 'select',
          label: '经理分组名称',
          filterable: true, // 是否可模糊匹配
          placeholder: '请选择',
          key: 'groupName',
          intKey: '',
          options: [
          ]
        },
        {
          type: 'select',
          label: '订单类型',
          filterable: true, // 是否可模糊匹配
          placeholder: '请选择',
          key: 'type',
          intKey: '4',
          isClear: true, // 重置是否清空
          options: [
            {
              'label': '请选择',
              'value': ''
            },
            {
              'label': '环球捕手',
              'value': '4'
            },
            {
              'label': '美食买手',
              'value': '10'
            }
          ]
        }
      ],
      searchMenu: [
        {
          label: '查询',
          type: 'search',
          style: 'primary'
        },
        {
          isSlot: true,
          slotName: 'private-menu'
        },
        {
          isSlot: true,
          slotName: 'isExport'
        }
      ],
      searchResult: [
        {
          label: '销售单元码',
          key: 'saleUnitCode',
          width: '150',
          align: 'center'
        },
        {
          label: '销售商品码',
          key: 'saleGoodsCode',
          width: '180',
          align: 'center'
        },
        {
          label: '销售单元名称',
          key: 'saleUnitName',
          width: '250',
          align: 'center'
        },
        {
          label: '经理分组名称',
          key: 'groupName',
          width: '140',
          align: 'center'
        },
        {
          label: '经理分组经理名称',
          key: 'managerName',
          width: '140',
          align: 'center'
        },
        {
          label: 'gmv',
          key: 'gmvStr',
          width: '80',
          align: 'center'
        },
        {
          label: '实付',
          key: 'realPriceStr',
          width: '100',
          align: 'center'
        },
        {
          label: '成本不含运费',
          key: 'costStr',
          width: '80',
          align: 'center'
        },
        {
          label: '销售数量',
          key: 'productCount',
          width: '70',
          align: 'center'
        },
        {
          label: '库存',
          key: 'saleUnitCount',
          width: '80',
          align: 'center'
        }/*,
          {
            label:'操作',
            key:'operate',
            width:'',
            type:'operate',
            align:'center',
            items:[
              {
                label:'编辑',
                type:'primary'
              },
              {
                label:'下架'
              }
            ]
          } */
      ]
    },
    chartSettings: {
      labelMap: {
        'historyGmv': '历史每小时gmv累计',
        'currentGmv': '今日每小时gmv累计',
        'historyCost': '历史每小时实付累计',
        'currentCost': '今日每小时实付累计'
      }
    },
    chartData: {
      columns: ['date', 'historyGmv', 'currentGmv', 'historyCost', 'currentCost'],
      rows: [
      ]
    }
  }),
  computed: {
    ...mapState(['searchParams'])
  },
  methods: {
    ...mapActions(['changeState', 'changeSaleProductVcharts', 'exportSaleProduct']),
    initView () {
      this.paramsInit()
    },
    initSelectGroupName () {
      this.changeState().then((res) => {
        let items = this.searchPage.searchItem
        for (let i in items) {
          if (items[i].key === 'groupName') {
            items[i].options = res
          }
        }
      }, (err) => {
      })
      // alert(111)
      // //  请求数据
      //   this.$ajax({
      //     type: "post",
      //     url: "localhost:8081/order/getSaleUnitNameList",
      //     data:{},
      //     success:function (data) {
      //         var itemlist = this.searchPage.searchItem;
      //         for(let i in itemlist){
      //             console.log(i)
      //         }
      //     }
      //   })

      //   let url = 'http://localhost:8081/order/getSaleUnitNameList'
      //   let data = {}
      //   axios.post(url, qs.stringify(data)).then((res) => {
      //     console.log(res)
      //   }).catch((err) => {
      //     console.log(err)
      //   })
    },
    initProductVchats () {
      let queryTime = UtilTool.formatDate(new Date(this.chartsTime), 'yyyy-MM-dd')
      let nowTime = UtilTool.formatDate(new Date(), 'yyyy-MM-dd')
      if (queryTime >= nowTime) {
        this.$alert('付款日期不能大于等于当前日期', '提示')
        return
      }
      var params = {
        payTime: queryTime,
        orderType: this.orderTypeValue
      }
      // params.payTime=this.orderTypeValue
      // params.orderType=this.orderTypeValue

      this.changeSaleProductVcharts(params).then((res) => {
        this.chartData.rows = res.list
        this.todayTotalGmv = res.todayTotalGmv
        this.historyTotalGmv = res.historyTotalGmv
      })
    },
    exportProductSale () {
      let params = UtilTool.deepCopy(this.searchParams)
      delete params.rows
      delete params.page
      window.location.href = REQUEST_URL + '/api/order/exportSaleProduct?' + qs.stringify(params)
    }
  },
  components: {
    vResult
  }
}
</script>
