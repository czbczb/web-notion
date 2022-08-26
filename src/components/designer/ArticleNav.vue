<script setup></script>
<template>
  <a-row justify="center" align="center" class="navWrapper">
    <a class="h1" href="#h1">h1</a>
    <a class="h2" href="#h2">h2</a>
    <a class="h3" href="#h3">h3</a>
    <a class="h4" href="#h4">h4</a>
    <a class="h5" href="#h5">h5</a>
    <a class="h6" href="#h6">h6</a>
    <a-list>
      <a-list-item></a-list-item>
    </a-list>
  </a-row>
</template>
<style scoped>
.navWrapper {
  flex-direction: column;
  height: 100%;
}
.h1 {
  font-size: 35px;
}
.h2 {
  text-indent: 1rem;
  font-size: 32px;
}
.h3 {
  text-indent: 2rem;
  font-size: 30px;
}
.h4 {
  text-indent: 2rem;
  font-size: 28px;
}
.h5 {
  text-indent: 2rem;
  font-size: 25px;
}
.h6 {
  text-indent: 2rem;
  font-size: 20px;
}
</style>
