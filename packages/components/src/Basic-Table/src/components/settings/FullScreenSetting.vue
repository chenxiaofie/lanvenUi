<template>
  <Tooltip placement="top">
    <template #title>
      <span>全屏</span>
    </template>
    <FullscreenOutlined @click="toggle" v-if="!isFullscreen" />
    <FullscreenExitOutlined @click="toggle" v-else />
  </Tooltip>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { Tooltip } from 'ant-design-vue';
  import { FullscreenOutlined, FullscreenExitOutlined } from '@ant-design/icons-vue';
  import { useFullscreen } from '@vueuse/core';

  import { useTableContext } from '../../hooks/useTableContext';

  export default defineComponent({
    name: 'FullScreenSetting',
    components: {
      FullscreenExitOutlined,
      FullscreenOutlined,
      Tooltip,
    },

    setup() {
      const table = useTableContext();

      const { toggle, isFullscreen } = useFullscreen(table.wrapRef);

      return {
        toggle,
        isFullscreen,
      };
    },
  });
</script>
