<template>
  <div ref="timelineContainer" style="width: 100%; height: 600px"></div>
</template>

<script setup>
import { ref, onMounted, defineProps } from "vue";
import * as d3 from "d3";

const props = defineProps({
  events: Array,
});

const timelineContainer = ref(null);

onMounted(() => {
  initTimeline();
});

function initTimeline() {
  const container = timelineContainer.value;
  const width = container.clientWidth;
  const height = container.clientHeight;

  const svg = d3
    .select(container)
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  const xScale = d3
    .scaleTime()
    .domain([new Date("2023-03-01T08:00:00"), new Date("2023-03-01T09:00:00")])
    .range([0, width]);

  const yScale = d3
    .scaleBand()
    .domain(props.events.map((event) => event.id))
    .range([0, height])
    .padding(0.1);

  svg.append("g").call(d3.axisLeft(yScale));

  props.events.forEach((event) => {
    const eventStart = new Date(event.start);
    const eventEnd = new Date(event.end);

    svg
      .append("rect")
      .attr("x", xScale(eventStart))
      .attr("y", yScale(event.id))
      .attr("width", xScale(eventEnd) - xScale(eventStart))
      .attr("height", yScale.bandwidth())
      .attr("fill", "steelblue")
      .on("mouseover", () => {
        console.log(
          `Event: ${event.content}, Start: ${event.start}, End: ${event.end}`
        );
      });

    if (event.children) {
      event.children.forEach((child) => {
        const childStart = new Date(child.start);
        const childEnd = new Date(child.end);

        svg
          .append("rect")
          .attr("x", xScale(childStart))
          .attr("y", yScale(child.id))
          .attr("width", xScale(childEnd) - xScale(childStart))
          .attr("height", yScale.bandwidth())
          .attr("fill", "limegreen")
          .on("mouseover", () => {
            console.log(
              `Event: ${child.content}, Start: ${child.start}, End: ${child.end}`
            );
          });
      });
    }
  });
}
</script>

<style scoped>
/* 添加一些基本的样式以确保时间线图的可读性。 */
</style>
