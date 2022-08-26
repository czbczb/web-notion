<script setup>
import ArticleContent from "../components/designer/ArticleContent.vue";
import ArticleNav from "../components/designer/ArticleNav.vue";
import LayoutContainer from "../components/designer/layoutContainer.vue";
</script>
<template>
  <LayoutContainer>
    <template #nav>
      <ArticleNav />
    </template>
    <template #content>
      <ArticleContent />
    </template>
  </LayoutContainer>
</template>
