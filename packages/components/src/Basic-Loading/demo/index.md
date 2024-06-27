# 介绍

Loading 组件 可以配合生成 vue 指令

## 使用

<div class="p-5" ref="wrapEl"  loading-tip="加载中...">
    <Button style='margin-right:10px' type="primary" @click="openCompFullLoading">全屏 Loading</Button>
    <Button class="my-4" type="primary" @click="openCompAbsolute">容器内 Loading</Button>
    <Loading :loading="loading" :absolute="absolutes" :tip="tip" />
</div>

<script lang="ts" setup>
  import { defineComponent, reactive, toRefs, ref } from 'vue';
  import { Loading } from 'lanvenUi';
  import {Button} from 'ant-design-vue'
  const loading=ref(false)
  const absolutes=ref(false)
  const tip=ref('等待中')
  function openLoading(absolute: boolean) {
        absolutes.value = absolute;
        loading.value = true;
        setTimeout(() => {
        loading.value = false;
        }, 2000);
      }

  function openCompFullLoading() {
        openLoading(false);
      }

  function openCompAbsolute() {
        openLoading(true);
      }
</script>

```vue
<template>
  <div class="p-5" ref="wrapEl" loading-tip="加载中...">
    <Button style="margin-right:10px" type="primary" @click="openCompFullLoading"
      >全屏 Loading</Button
    >
    <Button class="my-4" type="primary" @click="openCompAbsolute">容器内 Loading</Button>
    <Loading :loading="loading" :absolute="absolutes" :tip="tip" />
  </div>
</template>
<script lang="ts" setup>
  import { defineComponent, reactive, toRefs, ref } from 'vue';
  import { Loading } from 'lanvenUi';
  import { Button } from 'ant-design-vue';
  const loading = ref(false);
  const absolutes = ref(false);
  const tip = ref('等待中');
  function openLoading(absolute: boolean) {
    absolutes.value = absolute;
    loading.value = true;
    setTimeout(() => {
      loading.value = false;
    }, 2000);
  }

  function openCompFullLoading() {
    openLoading(false);
  }

  function openCompAbsolute() {
    openLoading(true);
  }
</script>
```

# Props

| 属性       | 类型                  | 默认值    | 可选值 | 说明                                   |
| ---------- | --------------------- | --------- | ------ | -------------------------------------- |
| tip        | `string`              | -         | -      | 加载文本                               |
| size       | `default small large` | `default` | -      | 大小                                   |
| absolute   | `boolean`             | `false`   | -      | 绝对定位，为 false 时可以全屏          |
| loading    | `boolean`             | -         | -      | 当前加载状态                           |
| background | `string`              | -         | -      | 背景色                                 |
| theme      | `dark light`          | `light`   | -      | 背景色主题，当背景色不为空时使用背景色 |
