<template>
    <el-breadcrumb class="app-breadcrumb" separator="/">
      <!--<transition-group name="breadcrumb">-->
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
         <!--<el-breadcrumb-item >-->
           <!--<span></span>-->
           <!--<router-link>1</router-link>-->
         <!--</el-breadcrumb-item>-->
      <!--</transition-group>-->
    </el-breadcrumb>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
  .app-breadcrumb.el-breadcrumb{
    display:inline-block;
    font-size:14px;
    line-height: 50px;

  }
</style>
