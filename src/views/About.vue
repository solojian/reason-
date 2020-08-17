<template>
  <div class="about">
    <h3 style="line-height: 50px;text-align: center">vue文字滚动</h3>
    <div class="vueBox">
      <div class="marquee">
      <div class="marquee_title">
        <span>最新公告</span>
      </div>
      <div class="marquee_box">
        <ul class="marquee_list" :class="{marquee_top:animate}">
          <li v-for="(item, index) in marqueeList" :key="index">
            <span>{{item.name}}</span>
            <span>-</span>
            <span class="red"> {{item.city}}</span>
            <span>销售</span>
            <span class="red"> {{item.amount}}</span>
            <span>万</span>
          </li>
        </ul>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
import {reqList} from '../http/request.js'
    export default{
        data() {
          return {
            animate: false,
            marqueeList: [
               
            ]
          }
        },
        created: function () {
            reqList().then(res => {
              console.log(res.data.data)
              const result = res.data
              this.marqueeList = result.data
            })
        },
        mounted() {
            setInterval(this.showMarquee, 2000)
        },
        methods: {
            showMarquee: function () {
                this.animate = true;
                setTimeout(()=>{
                    this.marqueeList.push(this.marqueeList[0]);
                this.marqueeList.shift();
                this.animate = false;
            },500)},
        }
    }
</script>
<style lang='css' scoped>
div, ul, li, span, img {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
.marquee {
	width: 100%;
	height: 50px;
	align-items: center;
	color: #3A3A3A;
	background-color: #ffe4ca;
	display: flex;
	box-sizing: border-box;
}

.marquee_title {
	padding: 0 20px;
	height: 30px;
	font-size: 14px;
	border-right: 1px solid #fff;
	align-items: center;
}

.marquee_box {
	display: block;
	position: relative;
	width: 60%;
	height: 30px;
	overflow: hidden;
}

.marquee_list {
	display: block;
	position: absolute;
	top: 0;
	left: 0;
}
.marquee_top {
	transition: all 0.5s;
	margin-top: -30px
}

.marquee_list li {
	height: 30px;
	line-height: 30px;
	font-size: 14px;
	padding-left: 20px;
}

.marquee_list li span {
	padding: 0 2px;
}

.red {
	color: #FF0101;
}

</style>