<template>
  <div style="height: 800px" ref="mapContainer"></div>
</template>

<script setup>
import { Scene, LineLayer, PointLayer } from "@antv/l7";
import { GaodeMap } from "@antv/l7-maps";
import { onMounted, ref } from "vue";

const mapContainer = ref(null);

const data = [
  {
    node: "xx1",
    region: "cn-beijing",
    provider: "aws",
    "Latitude": 28.391139,
    "Longitude": -80.588343,
    target: [
      {
        node: "xx2",
        provider: "aliyun",
        region: "cn-shanghai",
        "Latitude": 27.931944,
        "Longitude": -15.386667,
        packageLossRate: 5,
      },
    ],
  },
  {
    node: "xx2",
    region: "cn-shanghai",
    "Latitude": 27.931944,
    "Longitude": -15.386667,
    provider: "aliyun",
    target: [
      {
        node: "xx1",
        provider: "aws",
        region: "cn-beijing",
        "Latitude": 28.391139,
        "Longitude": -80.588343,
        packageLossRate: 0,
      },
    ],
  },
];

function lineColorByPackageLossRate(packageLossRate) {
  if (packageLossRate >= 10) return "#FF0000"; // 红色
  if (packageLossRate > 0 && packageLossRate < 10) return "#FFA500"; // 橙色
  return "#008000"; // 绿色
}

onMounted(() => {
  const scene = new Scene({
    id: mapContainer.value,
    map: new GaodeMap({
      pitch: 0,
      style: "dark",
      center: [120.19382669582967, 30.258134],
      zoom: -1,
      projection: "equirectangular",
    }),
    viewMode: "3d",
    enableScroll: false,
  });

  scene.on("loaded", () => {
    // 添加连线
    const lineLayer = new LineLayer()
      .source(
        data.flatMap((d) =>
          d.target.map((t) => ({
            coord: [
              t.Longitude,
              t.Latitude,
            ],
            color: lineColorByPackageLossRate(t.packageLossRate),
          }))
        ),
        {
          parser: {
            type: "json",
            coordinates: "coord",
          },
        }
      )
      .color("color")
      .size(2)
      .linecap("round")
      .linejoin("miter")
      .dasharray([5, 10])
      .style({
        opacity: 0.6,
      });

    scene.addLayer(lineLayer);

    // 添加点
    const pointLayer = new PointLayer()
      .source(
        data.map((d) => ({
          name: d.node,
          provider: d.provider,
          coordinate: [d.Longitude, d.Latitude],
        }))
      )
      .size(5)
      .shape("circle")
      .style({
        opacity: 0.8,
      });

    scene.addLayer(pointLayer);

    // 点击事件
    pointLayer.on("click", (event) => {
      const item = event.data;
      // 显示点的详细信息
      console.log(item);
    });

    // 连线事件
    lineLayer.on("click", (event) => {
      const item = event.data;
      // 显示连线的详细信息
      console.log(item);
    });
  });
});
</script>
