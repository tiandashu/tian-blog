<template>
  <span>
    <span ref="btn" class="v-copy-code-btn" @click="copyClick">{{
      copyText
    }}</span>
  </span>
</template>

<script>
import clipboard from "./clipboard";
export default {
  props: {
    copyText: {
      type: String,
      default: "复制代码"
    },
    code: String
  },
  methods: {
    copyClick() {
      clipboard(this.code);
      // 执行复制具体实现省略
    }
  }
};
</script>

<style>
</style>