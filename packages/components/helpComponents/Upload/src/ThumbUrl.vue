<template>
  <span class="thumb">
    <Image v-if="fileUrl" :src="fileUrl" :width="104" />
  </span>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { propTypes } from '@/utils/propTypes';
  import { Image } from 'ant-design-vue';

  export default defineComponent({
    components: { Image },
    props: {
      fileUrl: propTypes.string.def(''),
      fileName: propTypes.string.def(''),
    },
  });
</script>
<style lang="less">
  .thumb {
    img {
      position: static;
      display: block;
      cursor: zoom-in;
      border-radius: 4px;
      object-fit: cover;
    }
  }
</style>

<style lang="less">
  .file-table {
    width: 100%;
    border-collapse: collapse;

    .center {
      text-align: center;
    }

    .left {
      text-align: left;
    }

    .right {
      text-align: right;
    }

    &-th,
    &-td {
      padding: 12px 8px;
    }

    thead {
      background-color: @background-color-light;
    }

    table,
    td,
    th {
      border: 1px solid @border-color-base;
    }
  }
</style>
