<template>
  <div style="height: 100%;">
    <div class="head-banner">
      <div>
        <span style="font-size: 24px;">桌面端</span>
      </div>
      <div>
        <Button type="default" @click="logout">注销</Button>
      </div>
    </div>
    <div class="page-body">
      <Menu mode="horizontal" theme="light" :active-name="path" @on-select="navigate">
        <MenuItem name="/home">
        <Icon type="ios-home" />首页
        </MenuItem>
      </Menu>
      <router-view class="page-body-content"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Master',
  data() {
    return {
      path: '/home'
    };
  },
  methods: {
    logout() {
      this.$router.push('/');
    },
    navigate() { }
  }
};
</script>

<style>
.head-banner {
  height: 40px;
  background-color: #4b505d;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
}
.page-body {
  width: 1200px;
  height: calc(100% - 40px);
  margin: 0px auto;
}
.page-body-content {
  height: calc(100% - 60px);
}
</style>