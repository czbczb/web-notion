<template>
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
.designWrapper {
  display: flex;
  padding-left: 250px;
}
.navWrapper {
  position: fixed;
  left: 0;
  flex: 0 0 250px;
  height: calc(100vh - 60px);
  padding: 0 20px;
  overflow-y: scroll;
}
.contentWrapper {
  width: 100%;
  height: calc(100vh - 60px);
  /* border: 1px dashed #ccc; */
  margin: 5px;
  overflow-y: auto;
}
.property {
  flex: 0 0 250px;
  padding: 5px;
  justify-self: flex-end;
  height: calc(100vh - 60px);
}
</style>
