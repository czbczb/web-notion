<template>
  <div class="articleHeader h4">test</div>
  <main class="designWrapper">
    <div class="navWrapper">
      <slot name="nav"></slot>
    </div>
    <div class="contentWrapper">
      <slot name="content"></slot>
    </div>
    <div class="property">
      <slot name="property"></slot>
    </div>
  </main>
</template>
<style scoped>
.articleHeader {
  width: calc(100vw - 500px);
  padding-top: 80px;
  margin: 0 auto;
}
.designWrapper {
  display: flex;
  padding-left: 250px;
}
.navWrapper {
  width: 250px;
  height: calc(100vh - 80px);
  flex: 0 0 250px;
  position: fixed;
  left: 0;
  padding: 0 20px;
  overflow-y: scroll;
}
.contentWrapper {
  width: calc(100vw - 500px);
  height: calc(100vh - 80px);
  /* border: 1px dashed #ccc; */
  margin: 5px;
  margin-bottom: 300px;
  /* overflow-y: auto; */
}
.property {
  flex: 0 0 250px;
  padding: 5px;
  justify-self: flex-end;
  height: calc(100vh - 60px);
}
</style>
