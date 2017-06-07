<template>
  <div class="tmpl">
   <!-- swipe轮播图 -->
   <mt-swipe :auto="2000">
	  <mt-swipe-item v-for="(item,index) in list" :key="index">
		<a :href="item.url"><img class="img" :src="item.img"  /></a>
	  </mt-swipe-item>
	</mt-swipe>
	<ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-home"></span>
                <div class="mui-media-body">新闻资讯</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                <div class="mui-media-body">图片分享</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-chatbubble"></span>
                <div class="mui-media-body">商品购买</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-location"></span>
                <div class="mui-media-body">留言反馈</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-search"></span>
                <div class="mui-media-body">视频专区</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-phone"></span>
                <div class="mui-media-body">联系我们</div></a></li>
    </ul> 
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {
          url: 'http://baidu.com',
          img: 'https://salttrace.cn/templates/xdg/ow/images/ban_m1.jpg'
        },
        {
          url: 'http://jd.com',
          img: 'https://salttrace.cn/templates/xdg/ow/images/ban_m2.jpg'
        },
        {
          url: 'http://taobao.com',
          img: 'https://salttrace.cn/templates/xdg/ow/images/ban_m3.jpg'
        }
      ]
    }
  },
  created () {
    this.getlunbo()
  },
  methods: {
    getlunbo () {
      let url = 'http://182.92.157.145:9667/api/scan/GetYMScanCompanyData'
      let option = {
        com_identity: '',
        sn: '60102111110086722998',
        lng: '116.2988',
        lat: '40.0906',
        scanProv: '北京市',
        scanCity: '',
        scanArea: '昌平区',
        scanAddress: '北京市昌平区回龙观街道速8酒店(北京龙城店)园墅',
        userType: '1',
        ScanModel: '1',
        TargetType: '2',
        Type: '1'
      }
      //GET请求方法（api暂不支持）this.$http.get(url, {params: option}).then(res => {
      this.$http.post(url, option, {emulateJSON: true}).then(res => {
        this.list[1].img = 'http://zj.xindeguo.net.cn' + res.body.data.companyMainImg
      }, res => {
        console.log('失败' + res.body)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .img{
  	width:100%;
  }
  .mui-grid-view.mui-grid-9{
  	background:#fff;
  }
  .mui-grid-view.mui-grid-9 .mui-table-view-cell{
  	border-right:none;
  	border-bottom:none;
  }
  .mint-swipe {
    overflow: hidden;
    position: relative;
    height: 100px;
  }
  .mint-swipe-items-wrap {
    position: relative;
    overflow: hidden;
    height: 100%;
    -webkit-transform: translateZ(0);
    transform: translateZ(0)
  }
  .mint-swipe-items-wrap > div {
    position: absolute;
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
    width: 100%;
    height: 100%;
    display: none
  }
  .mint-swipe-items-wrap > div.is-active {
    display: block;
    -webkit-transform: none;
    transform: none;
  }
  .mint-swipe-indicators {
    position: absolute;
    bottom: 10px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }
  .mint-swipe-indicator {
    width: 8px;
    height: 8px;
    display: inline-block;
    border-radius: 100%;
    background: #000;
    opacity: 0.2;
    margin: 0 3px;
  }
  .mint-swipe-indicator.is-active {
    background: #fff;
  }
</style>
