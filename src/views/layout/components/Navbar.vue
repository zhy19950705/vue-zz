<template>
    <el-menu class="navbar" mode="horizontal">
       <hamburger class="hamburger-container"></hamburger>
       <breadcrumb class="breadcrumb-container"></breadcrumb>
      <div class="right-menu">
          <el-tooltip effect="dark" placement="bottom">

          </el-tooltip>
      </div>
    </el-menu>
</template>

<script>
  import Hamburger from '@/components/Hamburger'
  import Breadcrumb from '@/components/Breadcrumb'

  export default {
    components: {
      Hamburger,
      Breadcrumb
    }
  }
</script>


<style lang="scss" scoped>
   .navbar{
     height: 50px;
     line-height: 50px;
     .hamburger-container{
       line-height: 58px;
       height: 50px;
       float:left;
       padding: 0px 10px;
     }
     .breadcrumb-container{
       float:left;
     }
   }
</style>
