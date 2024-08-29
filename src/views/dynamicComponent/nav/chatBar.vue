<template>
  <div class="nav-list">
    <a-list item-layout="horizontal">
      <a-list-item class="nav-item logo"> Ge </a-list-item>
      <a-list-item class="nav-item is-active" @click="newSession">
        message
      </a-list-item>
      <a-list-item class="nav-item" @click="historyStore.toggleShowHistory">
        history
      </a-list-item>
      <a-list-item class="nav-item"> favorites </a-list-item>
      <a-list-item class="nav-item" @click="showMarket"> market </a-list-item>
    </a-list>
    <div class="login-layout">
      <login></login>
    </div>
  </div>
</template>

<script setup>
import { watchEffect } from "vue";
import useSession from "../useHook/useSession";
import login from "../login/loginModal.vue";
import { useHistoryStore } from "@/store/history.js";

const props = defineProps({
  sessions: Array,
});

const { sessions: sessionsStore, addSession } = useSession();

const historyStore = useHistoryStore();

watchEffect(() => {
  // 确保 sessionsStore 与父组件传递的 sessions 保持同步
  sessionsStore.value = props.sessions;
});

function showMarket() {
  console.log("showmarket");
}

function newSession() {
  addSession({
    id: new Date().getTime(),
    history: [],
    title: "NONE",
  });
}
</script>

<style lang="less" scoped>
.nav-list {
  position: fixed;
  z-index: 10000;
  padding: 10px 0;

  width: 70px;
  height: 60vh;
  top: calc(50% - 30vh);
  left: 5px;
  background: #fafbff;
  border-radius: 4px;
  box-shadow: 0 0 5px #afafaf;
  text-align: center;
}

.nav-item {
  width: 50px;
  height: 50px;
  line-height: 50px;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.1s linear;
  color: #6f6f6f;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 10px;
  &.is-active,
  &:hover:not(:first-child) {
    background: #e0ecff;
    color: #333333;
  }
  &.logo {
    background: #000;
    color: #fff;
    font-size: 24px;
    font-weight: weight;
  }
}
.login-layout {
  position: absolute;
  bottom: 15px;
}
</style>
./usehook/useSession