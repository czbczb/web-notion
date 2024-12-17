<template>
  <HierarchicalTimeline :events="events"></HierarchicalTimeline>
</template>

<script setup>
import { ref } from "vue";
import HierarchicalTimeline from "./HierarchicalTimeline.vue";

const eventsMockData = [
  {
    id: "1",
    content: "Project Kickoff",
    start: "2023-03-01T08:00:00",
    end: "2023-03-01T09:00:00",
    children: [
      {
        id: "1-1",
        content: "Introduction",
        start: "2023-03-01T08:05:00",
        end: "2023-03-01T08:15:00",
      },
      {
        id: "1-2",
        content: "Team Presentation",
        start: "2023-03-01T08:20:00",
        end: "2023-03-01T08:30:00",
        children: [
          {
            id: "1-2-1",
            content: "Member A",
            start: "2023-03-01T08:20:00",
            end: "2023-03-01T08:25:00",
          },
          {
            id: "1-2-2",
            content: "Member B",
            start: "2023-03-01T08:25:00",
            end: "2023-03-01T08:30:00",
          },
        ],
      },
    ],
  },
  {
    id: "2",
    content: "Strategy Session",
    start: "2023-03-01T09:15:00",
    end: "2023-03-01T10:15:00",
    children: [
      {
        id: "2-1",
        content: "Market Analysis",
        start: "2023-03-01T09:20:00",
        end: "2023-03-01T09:40:00",
      },
      {
        id: "2-2",
        content: "Competitor Review",
        start: "2023-03-01T09:45:00",
        end: "2023-03-01T10:00:00",
      },
    ],
  },
  {
    id: "3",
    content: "Product Demonstration",
    start: "2023-03-01T10:30:00",
    end: "2023-03-01T11:30:00",
    children: [
      {
        id: "3-1",
        content: "Feature 1",
        start: "2023-03-01T10:30:00",
        end: "2023-03-01T10:45:00",
      },
      {
        id: "3-2",
        content: "Feature 2",
        start: "2023-03-01T10:50:00",
        end: "2023-03-01T11:10:00",
      },
      {
        id: "3-3",
        content: "Q&A",
        start: "2023-03-01T11:15:00",
        end: "2023-03-01T11:30:00",
      },
    ],
  },
];
const events = ref(eventsMockData);
</script>

<style scoped>
/* 添加一些基本的样式以确保时间线图的可读性。 */
</style>
