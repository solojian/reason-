<template>
    <el-aside>
         <el-tabs tab-position="left" style="height: 200px;">
          <el-tab-pane label="用户管理">
            <h2>用户管理</h2>
            <el-steps  :active="1" finish-status="success" direction="vertical">
              <el-step title="已完成"></el-step>
              <el-step title="进行中"></el-step>
              <el-step title="步骤 3"></el-step>
            </el-steps>
          </el-tab-pane>
          <el-tab-pane label="配置管理">配置管理</el-tab-pane>
          <el-tab-pane label="角色管理">角色管理</el-tab-pane>
          <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
        </el-tabs>
    </el-aside>
</template>
<script>
export default {
  name: "SiderNav",
  data () {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
</style>