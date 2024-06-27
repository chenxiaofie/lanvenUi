# 介绍

对 [Antdv 3.x](https://3x.antdv.com/components/select-cn)的 Form 表单组件进行封装，通过非常便捷的配置完成表单渲染和表单验证。对开发效率提升具有非常大的帮助

## 使用

展示一个最简单表单的示例，只有一个输入框

<BasicForm :labelWidth="100" :schemas="schemas" :showActionButtonGroup="true" :submitButtonOptions="{ text: '提交' }" :actionColOptions="{ span: 5 }" @submit="handleSubmit" />

```ts

<template>
  <BasicForm
    :labelWidth="100"
    :schemas="schemas"
    :showActionButtonGroup="true"
    :submitButtonOptions="{ text: '提交' }"
    :actionColOptions="{ span: 5 }"
    @submit="handleSubmit"
  />
</template>

<script lang="ts" setup>
import { BasicForm, FormSchema } from 'lanvenUi';
const schemas: FormSchema[] = [
  {
    field: 'field',
    component: 'Input',
    label: '字段标签',
    colProps: { span: 8 },
    defaultValue: '123',
    componentProps: {
      placeholder: '这是一个输入框',
      onChange: (e: ChangeEvent) => {
        console.log('change', e);
      },
    },
  },
];
const handleSubmit = (values: any) => alert('hellow world');
</script>
```

## useForm 示例

页面表单推荐使用方法，方便传值和调用内部方法。

<BasicForm @register="register" @submit="handleSubmitUseForm" />

```ts
<template>
  <BasicForm @register="register" @submit="handleSubmitUseForm" />
</template>
<script lang="ts" setup>
import { BasicForm, FormSchema,useForm  } from 'lanvenUi';
const schemas: FormSchema[] = [
  {
    field: 'field',
    component: 'Input',
    label: '字段标签',
    colProps: { span: 8 },
    defaultValue: '123',
    componentProps: {
      placeholder: '这是一个输入框',
      onChange: (e: ChangeEvent) => {
        console.log('change', e);
      },
    },
  },
];

const [register, methods] = useForm({
  labelWidth: 0,
  schemas,
  showActionButtonGroup: true,
  submitButtonOptions: {
    text: '提交',
  },
  actionColOptions: {
    span: 5,
  },
  // 是否禁用表单所有控件
  disabled: false,
});

const handleSubmitUseForm=(values: any) => {
  // 更新字段值
  values.field = '456';
  methods.setFieldsValue(values);
  // 获取字段值
  const vals = methods.getFieldsValue();
}

</script>
```

### register

`register` 用于注册 `useForm` 如果需要使用 `useForm` 提供的 api <br> 必须将 `register` 传入组件的 `@register`

```ts
<template>
  <BasicForm @register="register" @submit="handleSubmit" />
</template>
<script>
  export default defineComponent({
    components: { BasicForm },
    setup() {
      const [register] = useForm();
      return {
        register,
      };
    },
  });
</script>
```

## methods

| 方法名称 | 类型 | 说明 |
| --- | --- | --- |
| getFieldsValue | `() => Recordable` | 获取表单值 |
| setFieldsValue | `<T>(values: T) => Promise<void>` | 设置表单字段值 |
| resetFields | `()=> Promise<any>` | 重置表单值 |
| validateFields | `(nameList?: NamePath[]) => Promise<any>` | 校验指定表单项 |
| validate | `(nameList?: NamePath[]) => Promise<any>` | 校验整个表单 |
| submit | `() => Promise<void>` | 提交表单 |
| scrollToField | `(name: NamePath,options?: ScrollOptions)=> Promise<void>` | 滚动到对应字段位置 |
| clearValidate | `(name?: string \| string[]) => Promise<void>` | 清空校验 |
| setProps | `(formProps: Partial<FormProps>) => Promise<void>` | 设置表单 Props |
| removeSchemaByFiled | `(field: string \| string[]) => Promise<void>` | 根据 field 删除 Schema |
| appendSchemaByField | `(schema: FormSchema, prefixField: string \| undefined, first?: boolean \| undefined ) => Promise<void>` | 插入到指定 filed 后面，如果没传指定 field，则插入到最后,当 first = true 时插入到第一个位置 |
| updateSchema | `(data: Partial<FormSchema> \| Partial<FormSchema>[]) => Promise<void>` | 更新表单的 schema, 只更新函数所传的参数 |
| resetSchema | `FormSchema => Promise<void>` | 更新整个表单的 schema |

```ts
updateSchema({ field: 'filed', componentProps: { disabled: true } });
```

## 属性

温馨提醒

除以下参数外，官方文档内的 props 也都支持，具体可以参考 [Antdv Form](https://3x.antdv.com/components/select-cn) 表单

| 属性 | 类型 | 默认值 | 可选值 | 说明 |
| --- | --- | --- | --- | --- |
| schemas | `Schema[]` | - | - | 表单配置，见下方 `FormSchema` 配置 |
| submitOnReset | `boolean` | `true` | - | 重置时是否提交表单 |
| labelCol | `Partial<ColEx>` | - | - | 整个表单通用 LabelCol 配置 |
| wrapperCol | `Partial<ColEx>` | - | - | 整个表单通用 wrapperCol 配置 |
| baseColProps | `Partial<ColEx>` | - | - | 配置所有选子项的 ColProps，不需要逐个配置，子项也可单独配置优先与全局 |
| baseRowStyle | `object` | - | - | 配置所有 Row 的 style 样式 |
| labelWidth | `number\|string` | - | - | 扩展 form 组件，增加 label 宽度，表单内所有组件适用，可以单独在某个项覆盖或者禁用 |
| labelAlign | `string` | - | `left\|right` | label 布局 |
| mergeDynamicData | `object` | - | - | 额外传递到子组件的参数 values |
| autoFocusFirstItem | `boolean` | `false` | - | 是否聚焦第一个输入框，只在第一个表单项为 input 的时候作用 |
| compact | `boolean` | `false` | `true/false` | 紧凑类型表单，减少 margin-bottom |
| size | `string` | `default` | `default\|small\|large` | 向表单内所有组件传递 size 参数,自定义组件需自行实现 size 接收 |
| disabled | `boolean` | `false` | `true\|false` | 向表单内所有组件传递 disabled 属性，自定义组件需自行实现 disabled 接收 |
| autoSetPlaceHolder | `boolean` | `true` | `true\|false` | 自动设置表单内组件的 placeholder，自定义组件需自行实现 |
| autoSubmitOnEnter | `boolean` | `false` | `true\|false` | 在 input 中输入时按回车自动提交 |
| rulesMessageJoinLabel | `boolean` | `false` | `true\|false` | 如果表单项有校验，会自动生成校验信息，该参数控制是否将字段中文名字拼接到自动生成的信息后方 |
| showAdvancedButton | `boolean` | `false` | `true\|false` | 是否显示收起展开按钮 |
| emptySpan | `number\|Partial<ColEx>` | `0` | - | 空白行格,可以是数值或者 col 对象 数 |
| autoAdvancedLine | `number` | `3` | - | 如果 showAdvancedButton 为 true，超过指定行数行默认折叠 |
| alwaysShowLines | `number` | `1` | - | 折叠时始终保持显示的行数 |
| showActionButtonGroup | `boolean` | `true` | `true\|false` | 是否显示操作按钮(重置/提交) |
| actionColOptions | `Partial<ColEx>` | - | - | 操作按钮外层 Col 组件配置，如果开启 showAdvancedButton，则不用设置，具体见下方 actionColOptions |
| showResetButton | `boolean` | true | - | 是否显示重置按钮 |
| resetButtonOptions | `object` | - | - | 重置按钮配置 [ButtonProps](https://3x.antdv.com/components/select-cn) |
| showSubmitButton | `boolean` | true | - | 是否显示提交按钮 |
| submitButtonOptions | `object` | - | - | 确认按钮配置 [ButtonProps](https://3x.antdv.com/components/select-cn) |
| resetFunc | `() => Promise<void>` | - | - | 自定义重置按钮逻辑 |
| submitFunc | `() => Promise<void>` | - | - | 自定义提交按钮逻辑 |
| fieldMapToTime | `[string\| [string, string]\|string?][]` | - | - | 用于将表单内时间区域的应设成 2 个字段,见下方说明 |

### ColEx 布局类型

常用属性：span、offset、xs、sm、md、lg、xl、xxl

详细见 [src/components/Form/src/types/index.ts](https://github.com/chenxiaofie/lanvenUi/-/blob/master/packages/components/src/Basic-Form/types/index.ts)

### fieldMapToTime 日期转换

将表单内时间区域的值映射成 2 个字段

如果表单内有时间区间组件，获取到的值是一个数组，但是往往我们传递到后台需要是 2 个字段

<BasicForm @register="registerTimeMap" @submit="handleSubmitTimeUseForm" />

```ts
<template>
  <BasicForm @register="registerTimeMap" @submit="handleSubmitTimeUseForm" />
</template>
<script lang='ts' setup>
import {useForm,BasicForm} from 'lanvenUi'
const [registerTimeMap] = useForm({
  labelWidth: 0,
  schemas: [
    {
      field: 'date',
      label: '时间',
      placehold: '请选择时间',
      component: 'RangePicker',
      colProps: { span: 7 },
    },
  ],
  fieldMapToTime: [['date', ['startTime', 'endTime'], 'YYYY-MM-DD 00:00:00']],
  showActionButtonGroup: true,
  submitButtonOptions: {
    text: '提交',
  },
  actionColOptions: {
    span: 5,
  },
  // 是否禁用表单所有控件
  disabled: false,
});
const handleSubmitTimeUseForm=(values:any)=>{
  console.log(JSON.stringify(values))
  //{"startTime":"2024-05-07 00:00:00","endTime":"2024-06-03 00:00:00"}
}
</script>
```

### FormSchema 控件设置

| 属性 | 类型 | 默认值 | 可选值 | 说明 |
| --- | --- | --- | --- | --- |
| field | `string` | - | - | 字段名 |
| fieldLabel | `string` | - | - | 字段标签名，如返回 Select、TreeSelect 的标签名 |
| changeEvent | `string` | `change` | - | 表单更新事件名称 |
| valueField | `string` | - | `value` | 绑定组件的属性名（一般无需设置）如：v-model:value |
| labelField | `string` | - | `labelValue` | 绑定组件的标签属性名（一般无需设置）如：v-model:labelValue |
| label | `string` | - | - | 标签名 |
| subLabel | `string` | - | - | 二级标签名灰色 |
| helpMessage | `string\|string[]` | - | - | 标签名右侧温馨提示 |
| helpComponentProps | `helpComponentProps` | - | - | 标签名右侧温馨提示组件 props,见下方 HelpComponentProps |
| labelWidth | `string\|number` | - | - | 覆盖统一设置的 labelWidth |
| disabledLabelWidth | `boolean` | `false` | `false\|true` | 覆盖统一设置的 labelWidth |
| component | `ComponentType` | `Input` | - | [组件类型](https://github.com/chenxiaofie/lanvenUi/-/blob/master/packages/components/src/Basic-Form/types/index.ts) |
| componentProps | `any,()=>{}` | - | - | 所渲染的组件的 props |
| rules | `ValidationRule[]` | - | - | 校验规则,见下方 ValidationRule |
| required | `boolean` | - | - | 简化 rules 配置 |
| suffix | `string\| number \| ((values: RenderCallbackParams) => string\|number);` | - | - | 组件后缀 |
| rulesMessageJoinLabel | `boolean` | `false` | - | 校验信息是否加入 label |
| itemProps | `any` | - | - | 参考下方 FormItem |
| colProps | `ColEx` | - | - | 参考上方 actionColOptions |
| defaultValue | `any` | - | - | 所渲渲染组件的初始值 |
| defaultLabel | `any` | - | - | 存储编码的显示名称初始值，如 treeCode 和 treeName |
| isAdvanced | `boolean` | - | - | 是否显示表单，展开和收起按钮 |
| render | `(renderCallbackParams: RenderCallbackParams) => VNode\| VNode[] \| string` | - | - | 自定义渲染组件 |
| renderColContent | `(renderCallbackParams: RenderCallbackParams) => VNode\| VNode[]\| string` | - | - | 自定义渲染组件（需要自行包含 formItem） |
| renderComponentContent | `(renderCallbackParams: RenderCallbackParams) => any\| string` | - | - | 自定义渲染组内部的 slot |
| slot | `string` | - | - | 自定义 slot，渲染组件 |
| colSlot | `string` | - | - | 自定义 slot，渲染组件 （需要自行包含 formItem） |
| show | `boolean\|((renderCallbackParams: RenderCallbackParams) => boolean)` | - | - | 动态判断当前组件是否显示，css 控制，不会删除 dom |
| ifShow | `boolean\|((renderCallbackParams: RenderCallbackParams) => boolean)` | - | - | 动态判断当前组件是否显示，js 控制，会删除 dom |
| dynamicDisabled | `boolean\|((renderCallbackParams: RenderCallbackParams) => boolean)` | - | - | 动态判断当前组件是否禁用 |
| dynamicRules | `boolean\|((renderCallbackParams: RenderCallbackParams) => boolean)` | - | - | 动态判返当前组件您校验规则 |

#### RenderCallbackParams

```ts
export interface RenderCallbackParams {
  schema: FormSchema;
  values: any;
  model: any;
  field: string;
}
```

#### componentProps

1. 当值为对象类型时,该对象将作为 component 所对应组件的的 props 传入组件

2. 当值为一个函数时候参数有 4 个
   - `schema`: 表单的整个 schemas
   - `formActionType`: 操作表单的函数。与 useForm 返回的操作函数一致
   - `formModel`: 表单的双向绑定对象，这个值是响应式的。所以可以方便处理很多操作
   - `tableAction`: 操作表格的函数，与 useTable 返回的操作函数一致。注意该参数只在表格内开启搜索表单的时候有值，其余情况为`null`,
3. 简单例子，值改变的时候操作表格或者修改表单内其他元素的值，实现组件联动：

```ts
{
  component: 'Input',
  componentProps: ({ schema, tableAction, formActionType, formModel }) => {
    return {
      // xxxx props
      onChange: (e: ChangeEvent) => {
        const { reload } = tableAction
        reload()
        // or
        formModel.xxx = '123'
      }
    };
  },
}

```

#### HelpComponentProps

```ts
export interface HelpComponentProps {
  maxWidth: string;
  // 是否显示序号
  showIndex: boolean;
  // 文本列表
  text: any;
  // 颜色
  color: string;
  // 字体大小
  fontSize: string;
  icon: string;
  absolute: boolean;
  // 定位
  position: any;
}
```

## 自定义组件

#### slot 插槽方式

自定义渲染内容

<BasicForm @register="slotRegister" @submit="handlSlotSubmit"> <template #customSlot="{ model, field }"> <div>我是自定义组件<input style='border:1px solid;'  v-model='model[field]'/> </div> </template> </BasicForm>

```ts
<template>
 <BasicForm @register="slotRegister" @submit="handlSlotSubmit">
    <template #customSlot="{ model, field }">
       <div>我是自定义组件<input style='border:1px solid;' v-model='model[field]'/> </div>
    </template>
  </BasicForm>
</template>

<script lang="ts" setup>
import { BasicForm, useForm  } from 'lanvenUi';

const [slotRegister, { validate }] = useForm({
  labelWidth: 0,
  schemas: [
    {
      field: 'field1',
      component: 'Input',
      defaultValue: '123',
      label: '字段1',
      slot: 'customSlot',
    },
  ],
});

async function handlSlotSubmit(){
  const data = await validate()
  alert('自定义组件'+data.field1)
}
</script>

```

#### render 函数式

自定义渲染内容

<BasicForm @register="renderRegister" />

```ts
<template>
  <BasicForm @register="renderRegister" />
</template>
<script lang="ts" setup>
import { BasicForm, useForm } from 'lanvenUi';
const [renderRegister] = useForm({
  labelWidth: 0,
  schemas: [
    {
      field: 'field1',
      component: 'Input',
      defaultValue: '123',
      label: '字段1',
      renderComponentContent: () => {
        return {
          suffix: () => 'suffix',
        };
      },
    },
  ],
});
</script>
```

## 显示禁用

自定义表单控件的：显示/禁用（ifShow/show/dynamicDisabled）

区别：ifShow 是否渲染组件；show 正常渲染组件，确定是否显示（display: none）

## 表单验证

<BasicForm @register="valideRegister" />

```ts
<template>
  <BasicForm @register="valideRegister" />
</template>
<script lang="ts" setup>
import { BasicForm, useForm } from 'lanvenUi';
const [valideRegister] = useForm({
  schemas: [
       // 高级示例：跨字段校验，如：密码与确认密码是否相同
        {
          field: 'newPassword',
          label: '新密码',
          component: 'StrengthMeter',
          componentProps: {
            placeholder: '新密码',
          },
          rules: [
            {
              required: true,
              message: '请输入新密码',
            },
          ],
        },
        {
          field: 'confirmNewPassword',
          label: '确认密码',
          component: 'InputPassword',
          dynamicRules: ({ values }) => {
            return [
              {
                required: true,
                validator: (_, value) => {
                  if (!value) {
                    return Promise.reject('密码不能为空');
                  }
                  if (value !== values.newPassword) {
                    return Promise.reject('两次输入的密码不一致!');
                  }
                  return Promise.resolve();
                },
              },
            ];
          },
        },
    {
      label: '员工工号',
      field: 'empNo',
      component: 'Input',
      componentProps: {
        maxlength: 32,
      },
      required: false, // 如果只是必填，可以这样简写，否则使用 rules
      rules: [
        // 是否必填
        { required: false },
        // 长度校验
        { min: 4, max: 20, message: '请输入长度在 4 到 20 个字符之间' },
        // 自定义验证，举例：远程验证工号是否存在
        {
          validator(_rule: any, value: any) {
            return new Promise((resolve, reject) => {
               return reject('验证失败');
            });
          },
        },
      ],
    },
  ],
});
</script>
```

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| trigger | 校验触发的时机 | `blur` | `change` |
| enum | 枚举类型 | `string` | - |
| len | 字段长度 | `number` | - |
| max | 最大长度 | `number` | - |
| message | 校验文案 | `string` | - |
| min | 最小长度 | `number` | - |
| pattern | 正则表达式校验 | `RegExp` | - |
| required | 是否必选 | `boolean` | `false` |
| transform | 校验前转换字段值 | `function(value) => transformedValue:any` | - |
| type | 内建校验类型，可选项 | `string` | `string` |
| validator | 自定义校验（注意，callback 必须被调用）,或者直接 retrun 一个 promise | `function(rule, value, callback)` | - |
| whitespace | 必选时，空格是否会被视为错误 | `boolean` | `false` |

[更多高级用法](https://github.com/yiminghe/async-validator)

## 表单插槽

Slots

| 名称          | 说明         |
| ------------- | ------------ |
| formHeader    | 表单顶部区域 |
| formFooter    | 表单底部区域 |
| submitBefore  | 提交按钮前   |
| resetBefore   | 重置按钮前   |
| advanceBefore | 展开按钮前   |
| advanceAfter  | 展开按钮后   |

<script lang="ts" setup>
import { BasicForm, FormSchema,useForm  } from 'lanvenUi';
const schemas: FormSchema[] = [
  {
    field: 'field',
    component: 'Input',
    label: '字段标签',
    colProps: { span: 8 },
    defaultValue: '123',
    componentProps: {
      placeholder: '这是一个输入框',
      onChange: (e: ChangeEvent) => {
        console.log('change', e);
      },
    },
  },
];
const handleSubmit = (values: any) => {
alert('hello world')
};

const [slotRegister,{validate}] = useForm({
  labelWidth: 0,
  schemas:[
    {
          field: 'field1',
          component: 'Input',
          defaultValue: '123',
          label: '字段1',
          slot: 'customSlot',
    },
  ],
});
async function handlSlotSubmit(){
  const data = await validate()
  alert('自定义组件'+data.field1)
}

const [renderRegister] = useForm({
  labelWidth: 0,
  schemas: [
    {
      field: 'field1',
      component: 'Input',
      defaultValue: '123',
      label: '字段1',
       renderComponentContent: () => {
        return {
          suffix: () => 'suffix',
        };
      },
    },
  ],
});


const [register, methods] = useForm({
  labelWidth: 0,
  schemas,
  showActionButtonGroup: true,
  submitButtonOptions: {
    text: '提交',
  },
  actionColOptions: {
    span: 5,
  },
  // 是否禁用表单所有控件
  disabled: false,
});

const [registerTimeMap] = useForm({
  labelWidth: 0,
  schemas:[{
    field: 'date',
    label: '时间',
    placehold: '请选择时间',
    component: 'RangePicker',
    colProps: { span: 7 },
  },],
  fieldMapToTime:[['date', ['startTime', 'endTime'], 'YYYY-MM-DD 00:00:00']],
  showActionButtonGroup: true,
  submitButtonOptions: {
    text: '提交',
  },
  actionColOptions: {
    span: 5,
  },
  // 是否禁用表单所有控件
  disabled: false,
});

const [valideRegister] = useForm({
  schemas: [
       // 高级示例：跨字段校验，如：密码与确认密码是否相同
        {
          field: 'newPassword',
          label: '新密码',
          component: 'StrengthMeter',
          componentProps: {
            placeholder: '新密码',
          },
          rules: [
            {
              required: true,
              message: '请输入新密码',
            },
          ],
        },
        {
          field: 'confirmNewPassword',
          label: '确认密码',
          component: 'InputPassword',
          dynamicRules: ({ values }) => {
            return [
              {
                required: true,
                validator: (_, value) => {
                  if (!value) {
                    return Promise.reject('密码不能为空');
                  }
                  if (value !== values.newPassword) {
                    return Promise.reject('两次输入的密码不一致!');
                  }
                  return Promise.resolve();
                },
              },
            ];
          },
        },
    {
      label: '员工工号',
      field: 'empNo',
      component: 'Input',
      componentProps: {
        maxlength: 32,
      },
      required: false, // 如果只是必填，可以这样简写，否则使用 rules
      rules: [
        // 是否必填
        { required: false },
        // 长度校验
        { min: 4, max: 20, message: '请输入长度在 4 到 20 个字符之间' },
        // 自定义验证，举例：远程验证工号是否存在
        {
          validator(_rule: any, value: any) {
            return new Promise((resolve, reject) => {
               return reject('验证失败');
            });
          },
        },
      ],
    },
  ],
});

const handleSubmitUseForm=(values: any) => {
  // 更新字段值
  values.field = '456';
  methods.setFieldsValue(values);
  // 获取字段值
  const vals = methods.getFieldsValue();
}

const handleSubmitTimeUseForm=(values:any)=>{
  console.log(JSON.stringify(values))
  //{"startTime":"2024-05-07 00:00:00","endTime":"2024-06-03 00:00:00"}
}
</script>
