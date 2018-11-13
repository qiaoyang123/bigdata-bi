<template>
  <div></div>
</template>
<script>
  import {mapActions,mapState} from 'vuex'
  export default{
    computed: {
      ...mapState(['toastConfig'])
    },
    methods: {
      ...mapActions(['setToast'])
    },
    watch: {
      'toastConfig.isShow': function(newVal,oldVal){
        const _self = this
        if (newVal) {
          _self.$message({
            message: _self.toastConfig.msg,
            type: _self.toastConfig.type
          })
          const notice = {
            isShow:false,
            msg:'',
            type:''
          }
          this.setToast(notice)
        }
      }
    }
  }
</script>
