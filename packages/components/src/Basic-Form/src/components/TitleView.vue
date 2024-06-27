<template>
  <a-tag color="processing" class="title">{{ title }}</a-tag>
  <!-- <a-divider style="width: 100%; margin: 0; padding: 0">{{ title }}</a-divider> -->
</template>

<script lang="ts">
  export default {
    props: ['title'],
  };
</script>
<style lang="less" scoped>
  .title {
    font-size: 16px;
  }
</style>
