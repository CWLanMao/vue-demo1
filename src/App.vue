<template>
  <div id="app">
    <!-- 整个系统的头部 -->
    <mt-header fixed title="vue全家桶实战">
      <router-link to="/" @click.native="flushCom" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    
    <div id="con">
      <router-view></router-view>
    </div>

    <!-- 整个系统的尾部 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item mui-active" to="/">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/member">
        <span class="mui-icon mui-icon-email"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" to="/shopcar">
        <span class="mui-icon mui-icon-contact"><span class="mui-badge">9</span></span>
        <span class="mui-tab-label">购物</span>
      </router-link>
      <router-link class="mui-tab-item" to="/search">
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      selected: ''
    }
  },
  methods: {
    flushCom () {
      console.log(this.$router)
      this.$router.go(-1)
    }
  }
}
</script>

<style>
#con{
  margin-top:40px;
  margin-bottom:50px;
}
</style>
