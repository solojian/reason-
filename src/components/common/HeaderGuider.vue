<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" active-text-color='#1989fa'
    text-color='rgb(179, 216, 255)' router>
        <el-menu-item index="home" route>处理中心</el-menu-item>
        <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
        </el-submenu>
        <el-menu-item index="about" route>about</el-menu-item>
        <el-menu-item index="4"><a href="#" target="_blank">订单管理</a></el-menu-item>
    </el-menu>
</template>
<script>
export default {
  name: "HeaderGuider",
   data() {
      return {
        activeIndex: 'home',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    },
   watch: {
     $route(val) {
       console.log(val)
       this.activeIndex = this.$route.name.toLowerCase()
     }
   }
}
</script>
<style lang="scss" scoped>
</style>