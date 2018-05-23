<template>
    <div class="app-wrapper">
        <div class="main-container">
           <navbar></navbar>
        </div>
        <div>
           <slider v-model='userInput' :max='50' :min='-10'/>
          <el-button @click="debugger1"></el-button>
         </div> 
    </div>
</template>

<script>
    import Navbar from './components/Navbar'
    import Slider from '@/components/Slider/slider'
    export default {
      name: 'layout',
      data(){
        return{
          userInput:10
        }
      },
      components: {
        Navbar,
        Slider
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
