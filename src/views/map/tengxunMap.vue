<template>
  <div class="mapContainer">
    <a-row>
      <a-form-item label="起点"
        ><a-input v-model:value="startName" type="text" id="start"></a-input
      ></a-form-item>
      <a-form-item label="终点"
        ><a-input v-model:value="endName" type="text" id="end"></a-input
      ></a-form-item>
      <a-button type="primary" @click="searchRoute">搜索</a-button>
    </a-row>

    <div ref="mapContainer" class="mapItem"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import labels from "./label.js";
const startName = ref("");
const endName = ref("");
const mapContainer = ref(null);
const map = ref(null);

onMounted(() => {
  map.value = new qq.maps.Map(mapContainer.value, {
    center: new qq.maps.LatLng(39.916527, 116.397128),
    zoom: 13,
  });

  setMaker();
});

const setMaker = () => {
  for (let i = 0; i < labels.length; i++) {
    const label = labels[i];
    const [lat, lng] = label.position;
    const icon = new qq.maps.MarkerImage(
      label.icon.image, // 图片路径
      new qq.maps.Size(label.icon.size), // 显示尺寸
      null, // 偏移量
      null, // 锚点位置
      new qq.maps.Size(label.icon.size) // 实际尺寸
    );

    const marker = new qq.maps.Marker({
      position: new qq.maps.LatLng(lat, lng),
      map: map.value,
      icon,
    });

    marker.setTitle(label.name);
    // marker.setContent('这是标记的内容');

    const info = new qq.maps.InfoWindow({
      map: map.value,
    });
    info.setContent("详情");
    qq.maps.event.addListener(marker, "click", () => {
      info.open();
      info.setPosition(lat);
    });
  }
};

const searchPath = (start, end) => {
  var drivingService = new qq.maps.DrivingService({
    complete: (result) => {
      var path = result.detail.polylinePath;
      // 绘制路径
      new qq.maps.Polyline({
        map: map.value,
        path: path,
        strokeColor: "#FF0000",
        strokeWeight: 3,
      });
    },
  });
  drivingService.search(start, end);
};

const searchRoute = () => {
  var startAddress = document.getElementById("start").value;
  var endAddress = document.getElementById("end").value;
  var start = "";
  // 使用腾讯地图API进行地址转坐标
  var geocoder = new qq.maps.Geocoder({
    complete: function (result) {
      if (result.detail && result.detail.location) {
        start = result.detail.location;
        // 继续搜索终点坐标
        geocoder.getLocation(endAddress);
      }
    },
  });
  geocoder.getLocation(startAddress);

  // 获取终点坐标并搜索路径
  geocoder = new qq.maps.Geocoder({
    complete: (result) => {
      if (result.detail && result.detail.location) {
        var end = result.detail.location;
        searchPath(start, end);
      }
    },
  });
};
</script>

<style lang="less" scoped>
.mapContainer {
  padding: 80px;
}
.mapItem {
  width: 100%;
  height: 800px;
}
</style>
