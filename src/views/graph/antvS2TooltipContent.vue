<template>
  <div>
    <p>当前值：{{ meta?.label ?? meta?.fieldValue}} </p>
    <div>我是自定义 tooltip 内容</div>
  </div>
</template>

<script setup>
defineProps(['meta'])

</script>