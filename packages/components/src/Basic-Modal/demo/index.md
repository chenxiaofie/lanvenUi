# 介绍

对 [Antdv 3.x](https://3x.antdv.com/components/modal-cn)的 modal 组件进行封装，扩展拖拽，全屏，自适应高度等功能

## 使用

<BasicModal title='欢迎使用' @register="registerModal" @ok='onOk' > </BasicModal> <Button @click='openModal'>展开</Button>

```vue
<template>
  <BasicModal title="欢迎使用" @register="registerModal" /> <Button @click="openModal">展开</Button>
</template>
<script lang="ts" setup>
  import { BasicModal, useModal, useModalInner } from 'lanvenUi';
  import { Button } from 'ant-design-vue';
  const [registerModal, { openModal, closeModal }] = useModal();
</script>
```

## methods

| 方法名称 | 示例 | 参数 | 说明 |
| --- | --- | --- | --- |
| useModal | `const [register, { openModal, setModalProps }] = useModal()` | - | 创建 Modal 实例方法 |
| useModalInner | `const [register, { closeModal, setModalProps }] = useModalInner(callback);` | `callBack` | 组件内部使用 |
| register | - | - | 把 Modal 实例绑定到组件上 |
| openModal | ` openModal(true, data);` | `boolean,any` | 用于打开/关闭弹窗 |
| closeModal | ` closeModal();` | `-` | 用于关闭弹窗 |
| setModalProps | `setModalProps(props);` | `ModalProps` | 设置 Modal 内参数 |
| changeOkLoading | `changeOkLoading(true); //只支持useModalInner` | `boolean` | 用于修改确认按钮的 loading 状态 |
| changeLoading | `changeLoading(true); //只支持useModalInner` | `boolean` | 用于修改确认按钮的 loading 状态 |

## 属性 ModalProps

除以下参数外，组件库文档内的 props 也都支持，具体可以参考 [antv modal](https://3x.antdv.com/components/modal-cn)

| 方法名称 | 类型 | 默认值 | 可选值 | 说明 |
| --- | --- | --- | --- | --- |
| title | `string` | - | - | modal 标题 |
| height | `number` | - | - | modal 内容区域的固定高度 minHineght 优先 |
| minHeight | `number` | - | - | modal 最小高度 |
| draggable | `boolean` | `true` | `true\|false` | 是否开启拖拽 |
| useWrapper | `boolean` | `true` | `true\|false` | 是否开启自适应高度，开启后会跟随屏幕变化自适应内容，并出现滚动条 |
| wrapperFooterOffset | `number` | `0` | `true\|false` | 启用 wrapper 后 底部可以适当增加高度 |
| canFullscreen | `boolean` | `true` | `true\|false` | 是否可以进行全屏 |
| defaultFullscreen | `boolean` | `false` | `true\|false` | 默认全屏 |
| loading | `boolean` | `false` | `true\|false` | loading 状态 |
| loadingTip | `string` | - | - | loading 文本 |
| showCancelBtn | `boolean` | `true` | `true\|false` | 显示关闭按钮 |
| showOkBtn | `boolean` | `true` | `true\|false` | 显示确认按钮 |
| helpMessage | `string , string[]` | - | - | 标题右侧提示文本 |
| centered | `boolean` | `false` | `true\|false` | 是否居中弹窗 |
| cancelText | `string` | `关闭` | - | 关闭按钮文本 |
| okText | `string` | `确认` | `true\|false` | 确认按钮文本 |
| closeFunc | `() => Promise` | `关闭函数` | - | 关闭前执行，返回 true 则关闭，否则不关闭 |

## Events

| 事件           | 回调参数                | 说明               |
| -------------- | ----------------------- | ------------------ |
| ok             | `function(e)`           | `点击确定回调`     |
| cancel         | `function(e)`           | `点击取消回调`     |
| visible-change | `(visible:boolean)=>{}` | `打开或者关闭触发` |

## slots

| 名称           | 说明                                               |
| -------------- | -------------------------------------------------- |
| `default`      | 默认区域                                           |
| `closeIcon`    | 右上角关闭按钮                                     |
| `title`        | 标题                                               |
| `footer`       | 底部区域                                           |
| `insertFooter` | 关闭按钮的左边(不使用 footer 插槽时有效)           |
| `centerFooter` | 关闭按钮和确认按钮的中间(不使用 footer 插槽时有效) |
| `appendFooter` | 确认按钮的右边(不使用 footer 插槽时有效)           |

<script lang="ts" setup>
import { BasicModal,useModal,useModalInner } from 'lanvenUi'; 
import {Button} from 'ant-design-vue'
const [registerModal, { openModal, closeModal }] = useModal();

function onOk(){
  closeModal()
}
</script>
