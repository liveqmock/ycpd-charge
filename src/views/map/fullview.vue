<!-- 
  - 全景地图 
  -->
<template>
    <div class="panoramic-map">
        <mt-header :title="stationName">
            <div @click="goBack" slot="left">
                <span class="mint-button-icon"><i class="mintui mintui-back"></i></span>
            </div>
        </mt-header>
        <div class="panoramic-map-content"
            :style="'height: ' + (clientHeight - 40) + 'px;'"
        >
            <div id="panorama"></div>
        </div>
    </div>
</template>

<script>

import Vue from 'vue';
import { Header } from 'mint-ui';

Vue.component(Header.name, Header);

export default {
    name: 'fullview-map',

    data () {
        return {
            clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备的宽度
            
            stationName: '充电桩名称',
        }
    },

    mounted() {
        this.stationName = this.$route.query.stationName; // 初始化车商名称
        this.initBaiduPanorama();
    },

    methods: {
        /**
         * 初始化百度全景地图
         * 文档: http://lbsyun.baidu.com/jsdemo.htm#j1_0
         */
        initBaiduPanorama: function () {
            let longitude = this.$route.query.longitude; // 经度
            let latitude = this.$route.query.latitude; // 纬度

            let panorama = new BMap.Panorama('panorama'); 
            panorama.setPov({heading: -40, pitch: 6});
            panorama.setPosition(new BMap.Point(longitude, latitude)); // 根据经纬度坐标展示全景图
        },

        goBack: function () {
            this.$router.back(-1);
        }
    },
}

</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #C0C4CC;

.panoramic-map {
    width: 100%;
    height: 100%;
    background: #f5f5f5;
}

.mint-header {
    height: 40px;
}

.panoramic-map-content {
    width: 100%;

    > div {
        width: 100%;
        height: 100%;
    }
}

</style>
