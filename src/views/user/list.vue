<template>
  <div class="app-container">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="日期">
        <el-input v-model="formInline.date" placeholder="日期"></el-input>
      </el-form-item>
      <el-form-item label="姓名">
        <el-input v-model="formInline.user" placeholder="姓名"></el-input>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="formInline.phone" placeholder="手机号"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="formInline.region" placeholder="活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" border style="width: 100%;">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="phone" label="手机" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
    <el-pagination :small="device==='mobile'" background :layout="layout" :pager-count="5" :total="1000" @current-change="handleCurrentChange">
    </el-pagination>
  </div>
</template>

<script>
  export default {
    data() {
      let item = {
        date: '2016-05-03',
        name: '王小虎',
        phone: '19912345678',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        formInline: {
          date: '',
          user: '',
          phone: '',
          region: ''
        },
        tableData: Array(15).fill(item)
      }
    },
    computed: {
      device() {
        return this.$store.state.app.device
      },
      layout() {
        if (this.device !== 'mobile') {
          return 'total, prev, pager, next, jumper';
        } else {
          return 'prev, pager, next';
        }
      }
    },
    methods: {
      onSubmit() {
        console.log(this.formInline);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      add() {
        router.push('/test/add')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .demo-form-inline {
    text-align: left;
    margin: 20px auto;
  }
  .el-pagination {
    margin: 20px auto;
  }
</style>
