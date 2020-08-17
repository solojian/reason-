<template>
  <div id="app">
    <Github/>
    <div class="allwrap">
      <header-guider/>
      <div class="content-wrap">
        <el-container>
          <sider-nav/>
          <el-main>
            <router-view/>
          </el-main>
        </el-container>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderGuider from './components/common/HeaderGuider'
import Github from './components/common/Github'
import SiderNav from './components/content/SiderNav'

export default {
  data() {
    return {

    }
  },
  components: {
    HeaderGuider,
    Github,
    SiderNav

  }
}
</script>
<style lang="scss">
@import './assets/normalize.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .allwrap {
    width: 1100px;
    min-width: 960px;
    margin: 0 auto;
    background-color: #fff;
    .content-wrap {
      margin-top: 38px;
      height: 100%;
    }
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
