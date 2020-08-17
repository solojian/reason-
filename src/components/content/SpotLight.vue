<template>
    <div class="wrap">
        <div class="spotlight" v-show="isEnter"
        :style="`background:radial-gradient(50px 50px at ${moveX}px ${moveY}px, transparent, transparent 100px, rgba(0,0,0,0.6) 150px)`"></div>
        <div class="container" @mousemove="spotMove" @mouseenter="isEnter=true" @mouseleave="isEnter=false">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
  name: "SpotLight",
  data () {
    return {
        moveX: 0,
        moveY: 0,
        isEnter:false
    }
  },
  methods: {
      spotMove(e) {
          this.moveX = e.clientX
          this.moveY = e.clientY
      }
  }
}
//移动图层的话，步骤会比较大
//移动渐变中心
// $(document).mousemove(function(e){
//   $('.spotlight').attr({  'style':'background:radial-gradient(50px 50px at '+ e.clientX +'px '+ e.clientY +'px, transparent, transparent 100px, rgba(0,0,0,0.6) 150px)'
//   });
// });
</script>
<style lang="scss" scoped>
.spotlight {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background: radial-gradient(50px 50px at center center, transparent, transparent 100px, rgba(0, 0, 0, 0.6) 150px);
  opacity: 0;
  animation: fadein 2s 1s 1 both;
  @keyframes fadein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
}
 

</style>