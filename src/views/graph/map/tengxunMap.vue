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
import { ref, onMounted, reactive, nextTick } from "vue";
import labels from "./label.js";

const startName = ref("天通苑西三区");
const endName = ref("凤凰岭");
const mapContainer = ref(null);
const map = ref(null);
const markers = reactive([]);

const center = new qq.maps.LatLng(39.916527, 116.397128);
onMounted(() => {
  map.value = new qq.maps.Map(mapContainer.value, {
    center: center,
    zoom: 13,
  });
  setMaker();
  nextTick(() => {
    delayRenderMarker();
  });
});

// 设置maker
const setMaker = () => {
  for (let i = 0; i < labels.length; i++) {
    const label = labels[i];
    const [lng, lat] = label.position;

    const size = new qq.maps.Size(label.icon.size[0], label.icon.size[1]);
    const icon = new qq.maps.MarkerImage(
      label.icon.image, // 图片路径
      size, // 显示尺寸
      null, // 偏移量
      null, // 锚点位置
      size // 实际尺寸
    );

    const position = new qq.maps.LatLng(lat, lng);
    const marker = new qq.maps.Marker({
      position,
      icon,
      // map: map.value,
      map: null,
    });

    marker.setTitle(label.name);
    markers.push(marker);
  }
};

const delayRenderMarker = () => {
  let count = 0;

  // 监听地图的 bounds_changed 事件
  qq.maps.event.addListener(map.value, "bounds_changed", () => {
    renderMarker(count);
  });

  qq.maps.event.addListener(map.value, "click", (event) => {
    console.log(666);
    for (let i = 0; i < markers.length; i++) {
      const marker = markers[i];
      if (event.latLng.equals(new qq.maps.LatLng(marker.lat, marker.lng))) {
        const label = labels[i];

        // 在这里编写点击事件的处理逻辑
        const [lng, lat] = label.position;
        const position = new qq.maps.LatLng(lat, lng);

        const info = new qq.maps.InfoWindow({
          map: map.value,
        });
        info.setContent(label.name);
        qq.maps.event.addListener(marker, "click", () => {
          info.open();
          info.setPosition(position);
        });
        break;
      }
    }
  });

  // 监听地图的 idle 事件
  // qq.maps.event.addListener(map.value, "idle", () => {
  //   renderMarker(count);
  // });
};

// 渲染视口的marker
const renderMarker = (count) => {
  let currentIndex = 0;
  if (count >= markers.length) {
    return;
  }
  while (currentIndex <= markers.length) {
    if (currentIndex > markers.length) {
      break;
    }
    const bounds = map.value.getBounds();
    const label = labels[currentIndex];
    const marker = markers[currentIndex];
    if (
      marker &&
      bounds.contains(markers[currentIndex].getPosition()) &&
      !label.isRender
    ) {
      labels[currentIndex].isRender = true;
      marker.setMap(map.value);
      currentIndex++;
      count++;
    }
    currentIndex++;
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
