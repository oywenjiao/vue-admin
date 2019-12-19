<template>
  <el-container class="main">
    <el-header>
      <el-row>
        <el-col :span="2"><div class="title">总管理后台</div></el-col>
        <el-col :span="2">
          <el-button type="danger" size="mini" icon="el-icon-s-operation" style="font-size: 16px;" @click="handleMenu()"></el-button>
        </el-col>
      </el-row>
    </el-header>
    <el-container class="main-content">
      <LeftMenu :isCollapse="isCollapse"/>
      <el-main>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item>首页</el-breadcrumb-item>
          <el-breadcrumb-item>活动管理</el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        </el-breadcrumb>
        <Lists />
      </el-main>
    </el-container>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
  import LeftMenu from './Menu.vue';
  import Lists from './Lists.vue';
  export default {
    components: {
      LeftMenu,
      Lists
    },
    data() {
      return {
        isCollapse: false
      }
    },
    methods: {
      handleMenu() {
        this.isCollapse = !this.isCollapse;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .title {
    text-align: center;
  }
  .main {
    width: 100%;
    height: 100%;
    position: absolute;
  }
  .el-header {
    background-color: #409EFF;
    color: #fff;
    line-height: 50px;
    height: 50px !important;
    width: 100%;
    z-index: 99;
    position: fixed;
    top: 0;
  }
  .main-content {
    margin: 50px 0;
  }
  .el-footer {
    width: 100%;
    background-color: #409EFF;
    color: #fff;
    line-height: 50px;
    height: 50px !important;
    position: fixed;
    bottom: 0;
    z-index: 99;
  }
  .el-main {
    background-color: #fff;
    color: #333;
    text-align: center;
  }
</style>
