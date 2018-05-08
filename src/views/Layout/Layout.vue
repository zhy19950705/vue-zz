<template>
    <div class="app-wrapper">
        <div class="main-container">
           <navbar></navbar>
        </div>
        <div>
          <el-button @click="debugger1"></el-button>
         </div> 
    </div>
</template>

<script>
    import Navbar from './components/Navbar'

    export default {
      name: 'layout',
      components: {
        Navbar
      },
      methods:{
        debugger1(){
          debugger
          
        }
      }
    }
</script>

<style lang="scss" scoped>
   .app-wrapper{
     position:relative;
     height: 100%;
     width: 100%;
   }
</style>
