<template>
  <div ref="editItem" :contenteditable="readOnly" v-menu="" v-bind="data.value"></div>
</template>

<script>
import { reactive, toRefs, onBeforeMount, onMounted, onBeforeUpdate } from "vue";
export default {
  name: "EditContentItem",

  props: {
    config: Object,
    readOnly: {
      type: Boolean,
      default: true,
    },
  },
  setup() {
    const data = reactive({
      value: "",
    });
    onBeforeMount(() => {
      console.log("2.组件挂载页面之前执行----onBeforeMount");
    });
    onMounted(() => {
      console.log("3.-组件挂载到页面之后执行-------onMounted");
    });
    onBeforeUpdate(()=> {
        console.log(this.$refs.editItem);
    })
    return {
      ...toRefs(data),
    };
  },
  methods: {},
};
</script>
<style scoped lang="scss"></style>
