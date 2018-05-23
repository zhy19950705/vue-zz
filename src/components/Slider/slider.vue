<template>
    <div class='slider' >
    
      <div class='slider_under-line' @click='jumpAhead'>
        <div class='slider_cover-line' :style="{width: coverPercent}"></div>
      </div>
    
      <div class='slider_trigger'  :style="{left: coverPercent}" @mousedown='startMoving'></div>
    </div>
</template>

<script>
    export default {
        props:{
            width:String,
            fillColor:String,
            underColor:String,
            min:{
                type:Number,
                default:0
            },
            max:{
                type:Number,
                default:100
            },
            unit:{
                type:Number,
                default:1
            },
            value:{
                type:Number,
                default:0
            }
        },
        computed:{
            coverPercent(){
                return `${100*(this.value-this.min)/(this.max-this.min)}%`
            }
        },
        methods:{
            setValue(val){
                if(val>this.max){
                    this.$emit('input',this.max)
                }else if(val<this.min){
                    this.$emit('input',this.min)
                }else{
                    this.$emit('input',val)
                }
            },
            jumpAhead(e){
                console.log(e)
               this.endX=e.x;
               console.log(this.$el)
               let percentage=(this.endX-this.$el.getBoundingClientRect().left)/this.$el.offsetWidth;
               let val = Math.floor((percentage + (this.min + this.unit / 2) / (this.max - this.min)) * (this.max - this.min) / this.unit) * this.unit
               this.setValue(val)
            },
            startMoving(){
                this.addMovingListener()
            },
            stopMoving(){
                this.removeMovingListener()
            },
            addMovingListener(){
                window.addEventListener('mousemove',this.jumpAhead)
                window.addEventListener('mouseup',this.stopMoving)
            },
            removeMovingListener(){
                 window.removeEventListener('mousemove',this.jumpAhead)
                window.removeEventListener('mouseup',this.stopMoving)
            }
        }
    }
</script>

<style>
.slider {
    display: inline-block;
    width: 100%;
    height: 40px;
    position: relative;
  }
  .slider_under-line {
    position: absolute;
    display: inline-block;
    width: 100%;
    height: 6px;
    background-color: #eee;
    border-radius: 20px;
    overflow: hidden;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
  .slider_cover-line {
    height: 100%;
    display: inline-block;
    background-color: #4285f4;
    float: left;
  }
  .slider_trigger {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: 0;
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-left: -8px;
    background-color: #d9e7fd;
    border-radius: 50%;
  }
</style>