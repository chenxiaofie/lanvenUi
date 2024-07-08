# 介绍

用于项目内图标的展示，基本支持所有图标库（支持按需加载，只打包所用到的图标）

## 加载图标库

<Icon icon="ant-design:file-markdown-twotone"  color='red' size='24' />

```vue
<template>
  <Icon icon="ant-design:file-markdown-twotone" color="red" size="24" />
</template>
<script lang="ts" setup>
  import 'iconify-icon';
  import { Icon } from 'lanven-ui';
</script>
```

## 属性

| 方法名称 | 类型             | 默认值 | 说明     |
| -------- | ---------------- | ------ | -------- |
| icon     | `string`         | -      | 图标名   |
| color    | `string`         | -      | 图标颜色 |
| size     | `number\|string` | -      | 图标大小 |

## 在 vite 使用本地 svg

<SvgIcon name='copy'  />
```ts
npm install vite-plugin-svg-icons
```

```ts
// vite.config.ts;
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

plugins: [
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [(resolve(__dirname), './assets/icons')], // 与本地储存地址一致
      // 指定symbolId格式
      symbolId: 'icon-[name]',
    }),
  ],
```

```ts
// 入口ts文件 比如main.ts
import 'virtual:svg-icons-register';
```

```vue
// 组件中使用
<template>
  <SvgIcon name="copy" copy />
</template>
<script lang="ts" setup>
  import { SvgIcon } from 'lanven-ui';
</script>
```

## IconPicker 图标选择器

<IconPicker />

```vue
<template>
  <IconPicker />
</template>
<script lang="ts" setup>
  import { IconPicker } from 'lanven-ui';
</script>
```

<script lang="ts" setup>
import 'iconify-icon';
import { Icon,SvgIcon,IconPicker } from 'lanven-ui';
</script>
