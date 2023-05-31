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
import { ico } from "./img.js";

const startName = ref("天通苑西三区");
const endName = ref("凤凰岭");
const mapContainer = ref(null);
const map = ref(null);

const center = [116.397128, 39.916527];
onMounted(() => {
  map.value = new AMap.Map(mapContainer.value, {
    zoom: 12,
    center,
    showIndoorMap: false,
    viewMode: "2D",
    expandZoomRange: true,
  });
  delayRenderMarker();
});

const delayRenderMarker = () => {
  map.value.on("complete", function () {
    // 创建 AMap.LabelsLayer 图层
    var layer = new AMap.LabelsLayer({
      zooms: [3, 20],
      zIndex: 100,
      // 关闭标注避让，默认为开启，v1.4.15 新增属性
      animation: false,
      // 关闭标注淡入动画，默认为开启，v1.4.15 新增属性
      collision: false,
    });

    // 将图层添加到地图
    map.value.add(layer);

    const markers = getMarker();
    // 批量渲染
    layer.add(markers);

    // 设置marker的偏移量
    new AMap.Marker({
      offset: new AMap.Pixel(-75, -40),
    });

    // 添加控件
    map.value.plugin(["AMap.ControlBar"], function () {
      var controlBar = new AMap.ControlBar({
        position: {
          right: "10px",
          top: "10px",
        },
      });
      map.value.addControl(controlBar);
    });
  });
};

const getMarker = () => {
  const markers = [];
  var infoWindow = new AMap.InfoWindow({ offset: new AMap.Pixel(0, -8) });
  for (var i = 0; i <= labels.length - 1; i++) {
    const label = labels[i];
    const d = label.time;
    const resultDate =
      (new Date().getTime() - new Date(d.replace(/-/g, "/")).getTime()) /
      (1000 * 3600);
    if (resultDate <= 24 * 3 - 1) {
      label.icon = ico[3];
    } else label.icon = ico[label.type];

    var labelMarker = new AMap.LabelMarker(label);
    // 事件
    labelMarker.on("click", (e) => {
      var position = e.data.data && e.data.data.position;
      if (position) {
        infoWindow.setContent(e.target.content);
        infoWindow.open(map.value, e.target.getPosition());
      }
    });

    labelMarker.content = "<div class ='area'>" + label.name + "</div>";

    labelMarker.on("mouseout", function () {
      map.value.remove(labelMarker);
    });

    markers.push(labelMarker);
  }
  return markers;
};

const searchRoute = () => {
  var geocoder = new AMap.Geocoder({
  city: '北京'
});

// 调用 getLocation 方法获取地址的经纬度坐标
geocoder.getLocation('北京市朝阳区建国路93号', function(status, result) {
  if (status === 'complete' && result.geocodes.length) {
    var position = result.geocodes[0].location;
    console.log(position);
  } else {
    console.error(result.info);
  }
});
  const avoidmarkers = [];
  for (var i = 0; i <= labels.length - 1; i++) {
    const label = labels[i];
    const [lng, lat] = label.position;
    avoidmarkers.push(
      new AMap.Marker({
        position: new AMap.LngLat(lng, lat),
      })
    );
  }
  // 搜索POI
  AMap.service("AMap.PlaceSearch", function () {
    var placeSearch = new AMap.PlaceSearch({
      pageSize: 5,
      pageIndex: 1,
      city: "010",
      map: map.value,
      panel: "panel",
    });
    placeSearch.search("北京大学东门");
  });
  driving.search([{ keyword: "北京大学东门" }], (res) => {
    console.log(res);
  });
  console.log(avoidmarkers);
  // 绘制路线
  var driving = new AMap.Driving({
    policy: AMap.DrivingPolicy.LEAST_TIME,
    map: map.value,
    avoidmarkers,
  });

  const path = driving.search([
    { keyword: "北京大学东门" },
    { keyword: "北京邮电大学" },
  ]);
  console.log(path);
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
