# 介绍

对 [Antdv 3.x](https://3x.antdv.com/components/drawer-cn)的 drawer 组件进行封装，扩展拖拽，全屏，自适应高度等功能。

## 使用

<BasicDrawer @register='register' title="Drawer Title" width="50%" showFooter> Drawer Info. </BasicDrawer>

<Button @click='openModal'>展开</Button>

```vue
<template>
  <BasicDrawer @register="register" title="Drawer Title" width="50%" showFooter>
    Drawer Info.
  </BasicDrawer>

  <Button @click="openModal">展开</Button>
</template>
<script lang="ts" setup>
  import { BasicDrawer, useDrawerInner, useDrawer } from 'lanvenUi';
  import { Button } from 'ant-design-vue';
  const [register, { openDrawer }] = useDrawer();
  function openModal() {
    openDrawer();
  }
</script>
```

## methods

| 方法名称 | 示例 | 参数 | 说明 |
| --- | --- | --- | --- |
| useDrawer | `const [register, drawerMethods] = useDrawer()` | `DrawerProps` | 创建 Drawer 实例方法 |
| register | - | - | 绑定实例 |
| openDrawer | `openDrawer(true, data);` | `boolean,any` | 打开或者关闭弹窗 |
| closeDrawer | `closeDrawer()` | - | 关闭弹窗 |
| setDrawerProps | `setDrawerProps(props);` | `props` | 设置 modalProps |
| useDrawerInner | `const [register, { closeModal, setModalProps }] = useDrawerInner(callback);` | `callBack` | 组件内部使用 |
| changeOkLoading | `changeOkLoading(true);` | `boolean` | 用于修改确认按钮的 loading 状态只支持 useDrawerInner |
| changeLoading | `changeLoading(true);` | `boolean` | 用于修改 modal 的 loading 状态只支持 useDrawerInner |

## props

| 属性           | 类型                       | 默认值  | 说明                                 |
| -------------- | -------------------------- | ------- | ------------------------------------ |
| isDetail       | `boolean`                  | `false` | 是否为详情模式                       |
| loading        | `boolean`                  | `false` | loading 状态                         |
| loadingText    | `string`                   |         | loading 文本                         |
| showDetailBack | `boolean`                  | `true`  | isDetail=true 状态下是否显示返回按钮 |
| closeFunc      | `() => Promise<boolean> -` | -       | 自定义关闭函数，返回 true 关闭       |
| showFooter     | `boolean`                  | `false` | 是否显示底部                         |
| footerHeight   | `number`                   | `60`    | 底部区域高度                         |

## Events

| 事件           | 回调参数                | 说明               |
| -------------- | ----------------------- | ------------------ |
| close          | (e)=>void               | 点击关闭回调       |
| visible-change | (visible:boolean)=>void | 弹窗打开关闭时触发 |
| ok             | (e)=>void               | 点击确定回调       |

<script lang="ts" setup>
 import { BasicDrawer, useDrawerInner,useDrawer } from 'lanvenUi';
 import { Button } from 'ant-design-vue';
 const [register,{openDrawer}]=useDrawer()
 function openModal(){
    openDrawer()
 }
</script>
