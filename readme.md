<h1 align="center">
    vbenJs-lanven-ui
</h1>

- 💪 基于 vue3 和 ant design vue 的组件库
- 🔥 Written in TypeScript

[![npm](https://img.shields.io/badge/npm-lanvenUi-red.svg)](https://www.npmjs.com/package/lanven-ui)

<p align="center">组件拆分中....</p>

## Install

```
npm i lanven-ui
```

## 快速开始

```vue
<template>
  <BasicForm @register="register" />
</template>
<script lang="ts" setup>
  import { BasicForm, useForm } from 'lanven-ui';

  const [register] = useForm({
    labelWidth: 0,
    schemas: [
      {
        field: 'field1',
        component: 'Input',
        defaultValue: '123',
        label: '字段1',
      },
    ],
  });
</script>
```

## 在线文档

[lanven-ui](https://chenxiaofie.github.io/lanvenUi/)

因为 vben 的公共组件没有组件库 这里面用到的组件是从 vben 框架抽离出来的同时新增和优化了部分 功能更加强大!

## 使用相关命令

### 安装 pnpm

```ts
npm i pnpm -g
```

### 安装所有依赖

```ts
pnpm install
```

### 启动开发环境和文档

```ts
cd site
```

```ts
 pnpm run docs:dev
```

### 打包组件库

```ts
cd packages\components
pnpm run build
```

### 打包文档

```ts
pnpm run docs:build
```
