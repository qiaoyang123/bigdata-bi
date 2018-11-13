<template>
  <div class="menu-box over-height">

    <el-menu :default-active="onRoutes" class="el-menu-vertical" :unique-opened="true"  router>
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>菜单管理</template>
        <el-menu-item-group>
          <el-menu-item index="/product/list"><i class="el-icon-message"></i>数据魔方</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>

  </div>
</template>
<script>
  import {mapActions,mapState} from 'vuex'
  export default{
    computed:{
      onRoutes(){
        return this.$route.path;
      },
      ...mapState(['searchParams'])
    },
    methods:{
      ...mapActions(['setSearchParams']),
    }

  }
</script>
