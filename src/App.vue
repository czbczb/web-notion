<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="wrapper">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/describe">Describe</RouterLink>
      <RouterLink to="/tts">TTS</RouterLink>
      <RouterLink to="/ttv">TTV</RouterLink>
      <RouterLink to="/textEffectioncy">打字效果</RouterLink>
      <RouterLink to="/d3Tree">d3Tree</RouterLink>
      <RouterLink to="/quillEditor">quillEditor</RouterLink>
      <RouterLink to="/jinjing360">jinjing360</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<style scoped>
header {
  height: 60px;
  background: #eee;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
  }

  header.wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
  }

  nav {
    text-align: left;
    font-size: 1rem;
    padding: 1rem 0;
  }
}
</style>
