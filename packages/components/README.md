<h1 align="center">
    lanven-ui
</h1>

- 💪 Vue 3 Composition API
- 🔥 Written in TypeScript

<p align="center">lanven-ui UI - A Vue.js 3 UI library</p>

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
