<h1 align="center">
    lanven-ui
</h1>

- 💪 Vue 3 Composition API
- 🔥 Written in TypeScript

<p align="center">lanven-ui - A Vue.js@3.x UI library</p>

## Install

```cmd
npm i lanven-ui
```

## 引入 css

```ts
import 'lanven-ui/es/lanvenUi.css';
```

## 按需加载

lanven-ui 默认支持基于 ES modules 的 tree shaking。

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

## 全局引用

```ts
//main.ts
import lanven from 'lanven-ui';
import 'lanven-ui/es/lanvenUi.css';
async function bootstrap() {
  const app = createApp(App);
  app.use(lanven);
}
bootstrap();
```

## 提示

使用组件暴漏出来的方法执行的生命周期最好在 onmounted 之后,不然有可能出现 dom 还没挂载 导致方法加载不成功
