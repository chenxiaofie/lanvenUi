<h1 align="center">
    vbenJs-lanvenUi
</h1>

- 💪 基于 vue3 和 ant design vue 的组件库
- 🔥 Written in TypeScript

[![github](https://img.shields.io/badge/github-lanvenUi-red.svg)](https://www.npmjs.com/package/lanven-ui)

<p align="center">组件拆分中....</p>

## Install

```
npm i lanvenUi
```

## 快速开始

```html
<template>
  <button type="primary">按钮</button>
</template>
<script lang="ts" setup>
  import { Button } from 'lanvenUi';
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
