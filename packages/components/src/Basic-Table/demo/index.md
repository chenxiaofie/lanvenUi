# 介绍

对 [Antdv 3.x](https://3x.antdv.com/components/table-cn)的 table 组件进行封装， 并嵌入了查询表单、自适应高度，与 Table 完美整合，方便实现表格数据的筛选。

## 使用

<BasicTable title="基础示例" titleHelpMessage="温馨提醒" :columns="columns"      :dataSource="dataSource" />

<BasicTable @register='register'/>

```vue
<template>
  <BasicTable
    title="基础示例"
    titleHelpMessage="温馨提醒"
    :columns="columns"
    :dataSource="dataSource"
    :pagination="false"
    :canResize="true"
  />
</template>
<script lang="ts" setup>
  import { BasicColumn, BasicTable, useTable } from 'lanvenUi';
  import { Button } from 'ant-design-vue';
  const columns: BasicColumn[] = [
    {
      title: '单行文本',
      dataIndex: 'testInput',
      width: 230,
      align: 'left',
    },
    {
      title: '多行文本',
      dataIndex: 'testTextarea',
      width: 130,
      align: 'left',
    },
  ];
  const dataSource = [
    { id: '1', testInput: '123', testTextarea: '456' },
    { id: '2', testInput: '789', testTextarea: '123' },
    { id: '2', testInput: '789', testTextarea: '123' },
  ];
  const [register, methods] = useTable({
    title: '基础示例',
    titleHelpMessage: '温馨提醒',
    pagination: false,
    columns,
    dataSource,
  });
</script>
```

## methods

| 方法名称 | 类型 | 说明 |
| --- | --- | --- |
| useTable | `const [register, methods] = useTable(TableProps)` | 创建 Table 实例方法 |
| register | - | 把 Table 实例绑定到组件上 |
| setProps | `(props: Partial<BasicTableProps>) => void` | 用于设置表格参数 |
| reload | `(opt?: FetchParams) => Promise<void>` | 刷新表格 |
| redoHeight | `() => void` | 重新计算表格高度 |
| setLoading | `(loading: boolean) => void` | 设置表格 loading 状态 |
| getDataSource | `<T = Recordable>() => T[]` | 获取表格数据 |
| getRawDataSource | `<T = Recordable>() => T` | 获取后端接口原始数据 |
| getColumns | `(opt?: GetColumnsParams) => BasicColumn[]` | 获取表格数据 |
| setColumns | `(columns: BasicColumn[] \| string[]) => void` | 设置表头数据 |
| setTableData | `<T = Recordable>(values: T[]) => void` | 设置表格数据 |
| setPagination | `(info: Partial<PaginationProps>) => void` | 设置分页信息 |
| deleteSelectRowByKey | `(key: string) => void` | 根据 key 删除取消选中行 |
| getSelectRowKeys | `() => string[]` | 获取选中行的 keys |
| getSelectRows | `<T = Recordable>() => T[]` | 获取选中行的 rows |
| clearSelectedRowKeys | `() => void` | 清空选中行 |
| setSelectedRowKeys | `(rowKeys: string[] \| number[]) => void` | 设置选中行 |
| getPaginationRef | `() => PaginationProps \| boolean` | 获取当前分页信息 |
| getShowPagination | `() => boolean` | 获取当前是否显示分页 |
| setShowPagination | `(show: boolean) => Promise<void>` | 设置当前是否显示分页 |
| getRowSelection | `() => TableRowSelection<Recordable>` | 获取勾选框信息 |
| updateTableData | `(index: number, key: string, value: any)=>void` | 更新表格数据 |
| updateTableDataRecord | `(rowKey: string \| number, record: Recordable) => Recordable \| void` | 根据唯一的 rowKey 更新指定行的数据.可用于不刷新整个表格而局部更新数据 |
| deleteTableDataRecord | `(rowKey: string \| number \| string[] \| number[]) => void` | 根据唯一的 rowKey 动态删除指定行的数据.可用于不刷新整个表格而局部更新数据 |
| insertTableDataRecord | `(record: Recordable, index?: number) => Recordable \| void` | 可根据传入的 index 值决定插入数据行的位置，不传则是顺序插入，可用于不刷新整个表格而局部更新数据 |
| getForm | `() => FormActionType` | 如果开启了搜索区域。可以通过该函数获取表单对象函数进行操作 |
| expandAll | `() => void` | 展开树形表格 |
| collapseAll | `() => void` | 折叠树形表格 |

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| clickToRowSelect | `boolean` | `true` | 点击行是否选中 checkbox 或者 radio。需要开启 |
| sortFn | `(sortInfo: SorterResult<any>) => any` | - | 自定义排序方法。见下方全局配置说明 |
| filterFn | `(sortInfo: Partial<Recordable<string[]>>) => any` | - | 自定义过滤方法。见下方全局配置说明 |
| showTableSetting | `boolean` | `false` | 显示表格设置工具 |
| tableSetting | `tableSetting` | - | 表格设置工具配置，见下方 TableSetting |
| striped | `boolean` | `true` | 斑马纹 |
| inset | `boolean` | `false` | 取消表格的默认 padding |
| autoCreateKey | `boolean` | `true` | 是否自动生成 key |
| showSummary | `boolean` | `false` | 是否显示合计行 |
| summaryData | `any[]` | - | 自定义合计数据。如果有则显示该数据 |
| emptyDataIsShowTable | `boolean` | `true` | 在启用搜索表单的前提下，是否在表格没有数据的时候显示表格 |
| isTreeTable | `boolean` | `false` | 是否树表 |
| api | `(...arg: any) => Promise<any>` | - | 后端接口 |
| beforeFetch | `(T)=>T` | - | 请求之前对参数进行处理 |
| afterFetch | `(T)=>T` | - | 请求之后对返回值进行处理 |
| handleSearchInfoFn | `(T)=>T` | - | 开启表单后，在请求之前处理搜索条件参数 |
| fetchSetting | `FetchSetting` | - | 接口请求配置，可以配置请求的字段和响应的字段名，见下方全局配置说明 |
| immediate | `boolean` | `true` | 组件加载后是否立即请求接口，在 api 有传的情况下，如果为 false，需要自行使用 reload 加载表格数据 |
| searchInfo | `any` | - | 额外的请求参数 |
| useSearchForm | `boolean` | `false` | 使用搜索表单 |
| formConfig | `any` | - | 表单配置，参考表单组件的 Props |
| columns | `any` | - | 表单列信息 BasicColumn[] |
| showIndexColumn | `boolean` | `true` | 是否显示序号列 |
| indexColumnProps | `any` | - | 序号列配置 BasicColumn |
| actionColumn | `any` | - | 表格右侧操作列配置 BasicColumn |
| ellipsis | `boolean` | `true` | 文本超过宽度是否显示... |
| canResize | `boolean` | `false` | 是否可以自适应高度(如果置于 PageWrapper 组件内，请勿启用 PageWrapper 的 fixedHeight 属性，二者不可同时使用) |
| canResizePagination | `boolean` | `false` | 自适应高度时 cell 数量是否也自适应 |
| clearSelectOnPageChange | `boolean` | `false` | 切换页码是否重置勾选状态 |
| resizeHeightOffset | `number` | `0` | 表格自适应高度计算结果会减去这个值 |
| rowSelection | `any` | `0` | 选择列配置 |
| title | `string` | - | 表格标题 |
| titleHelpMessage | `string\|string[]` | - | 表格标题右侧温馨提醒 |
| maxHeight | `number` | - | 表格最大高度，超出会显示滚动条 |
| dataSource | `any[]` | - | 表格数据，非 api 加载使用 |
| bordered | `boolean` | `false` | 是否显示表格边框 |
| pagination | `any` | - | 分页信息配置，为 false 不显示分页 |
| loading | `boolean` | `false` | 表格 loading 状态 |
| scroll | `any` | - | 参考官方文档 scroll |
| beforeEditSubmit | `({record: Recordable,index: number,key: string \| number,value: any}) => Promise<any>` | - | - |

## TableSetting

表格右上角按钮组设置

| 属性       | 类型      | 默认值 | 说明                 |
| ---------- | --------- | ------ | -------------------- |
| redo       | `boolean` | ------ | 是否显示刷新按钮     |
| size       | `boolean` | ------ | 是否显示尺寸调整按钮 |
| setting    | `boolean` | ------ | 是否显示字段调整按钮 |
| fullScreen | `boolean` | ------ | 是否显示全屏按钮     |

## BasicColumn

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| defaultHidden | `boolean` | `false` | 默认隐藏，可在列配置显示 |
| helpMessage | `string\|string[]` | - | 列头右侧帮助文本 |
| edit | `boolean` | - | 是否开启单元格编辑 |
| editRow | `boolean` | - | 是否开启行编辑 |
| editable | `boolean` | `false` | 是否处于编辑状态 |
| editComponent | `ComponentType` | `Input` | 编辑组件，见下方 ComponentType |
| editComponentProps | `any` | - | 对应编辑组件的 props |
| editRule | `((text: string, record: Recordable) => Promise<string>)` | - | 对应编辑组件的表单校验 |
| editDefaultValue | `object` | - | 编辑组件的默认值 |
| editDefaultLabel | `object` | - | 编辑组件的标签默认值 |
| onEditRow | `()=>void` | - | 触发行编辑 |
| customRender | `({text, record, index}) {}` | - | 生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引，@return 里面可以设置表格行/列合并,可参考 demo 表格行/列合并 |
| format | `CellFormat` | - | 单元格格式化(编辑表格下可以替代 customRender 实现，编辑后的单元格格式化) |
| auth | `RoleEnum \| RoleEnum[] \| string \| string[]` | - | 根据权限编码来控制当前列是否显示 |
| ifShow | `boolean \| ((action: ActionItem) => boolean)` | - | 根据业务状态来控制当前列是否显示 |
| dataIndex | `string` | - | 列数据在数据项中对应的 key，支持 a.b.c 的嵌套写法 |
| dataLabel | `string` | - | 数据的标签显示，举例 dataIndex 是 userCode，dataLabel 是 userName |
| dictType | `string` | - | 字典类型的单元格，设置字典类型，返回标签 |
| actions | `(record: Recordable) => ActionItem[]` | - | 列表操作列设置 |
| dropDownActions | `(record: Recordable) => ActionItem[]` | - | 列表操作更多按钮设置 |
| slot | `string` | - | 使用 slot 指定插槽名 |

## ComponentType

编辑表格的表单组件类型 [src/components/Table/src/componentMap.ts](https://github.com/chenxiaofie/lanvenUi/-/blob/master/packages/components/src/Basic-Table/src/types/componentType.ts)

```ts
export type ComponentType =
  | 'Input'
  | 'InputNumber'
  | 'Select'
  | 'ApiSelect'
  | 'AutoComplete'
  | 'ApiTreeSelect'
  | 'Checkbox'
  | 'Switch'
  | 'DatePicker'
  | 'TimePicker';
```

## CellFormat

```ts
export type CellFormat =
  | string
  | ((text: string, record: Recordable, index: number) => string | number)
  | Map<string | number, any>;
```

## events

| 名称 | 回调参数 | 说明 |
| --- | --- | --- |
| fetch-success | `Function({items,total})` | 接口请求成功后触发 |
| fetch-error | `Function(error)` | 错误信息 |
| selection-change | `Function({keys，rows})` | 勾选事件触发 |
| row-click | `Function(record, index, event)` | 行点击触发 |
| row-dbClick | `Function(record, index, event)` | 行双击触发 |
| row-contextmenu | `Function(record, index, event)` | 行右键触发 |
| row-mouseenter | `Function(record, index, event)` | 行移入触发 |
| row-mouseleave | `Function(record, index, event)` | 行移出触发 |
| edit-end | `Function({record, index, key, value})` | 单元格编辑完成触发 |
| edit-cancel | `Function({record, index, key, value})` | 单元格取消编辑触发 |
| edit-row-end | `()=>{}` | 行编辑结束触发 |
| edit-change | `Function({column,value,record})` | 单元格编辑组件的 value 发生变化时触发 |

edit-change 说明

对于 edit-change 事件，record 中的 editValueRefs 装载了当前行的所有编辑组件（如果有的话）的值的 ref 对象，可用于处理同一行中的编辑组件联动。请看下面的例子

```ts
function onEditChange({ column, record }) {
  // 当同一行的单价或者数量发生变化时，更新合计金额（三个数据均为当前行编辑组件的值）
  if (column.dataIndex === 'qty' || column.dataIndex === 'price') {
    const {
      editValueRefs: { total, qty, price },
    } = record;
    total.value = unref(qty) * unref(price);
  }
}
```

## slots

除以下参数外，官方文档内的 slot 也都支持，具体可以参考 Antdv Table 插槽

| 名称              | 说明                     |
| ----------------- | ------------------------ |
| tableTitle        | 表格顶部左侧区域         |
| toolbar           | 表格顶部右侧区域         |
| expandedRowRender | 展开行区域               |
| headerTop         | 表格顶部区域（标题上方） |

### 查询表单插槽

Form-Slots

当启用 form 查询表单后。以 form-xxxx 为前缀的 slot 会被视为 form 的 slot

xxxx 为 form 组件的 slot。具体参考 Form 组件文档，例如： `form-submitBefore`

## 内置组件

### TableAction 操作列组件

用于表格右侧操作列渲染，只能用于表格内部，默认已内置

<TableAction
  :actions="actionColumn.actions()"
  :dropDownActions="actionColumn.dropDownActions()"
/>

```vue
<template>
  <TableAction
    :actions="actionColumn.actions()"
    :dropDownActions="actionColumn.dropDownActions()"
  />
</template>
<script lang="ts" setup>
  import { TableAction } from 'lanvenUi';
  const actionColumn: BasicColumn = {
    width: 160, // 操作列宽
    actions: (record) => [
      {
        icon: 'clarity:note-edit-line',
        title: '编辑数据',
        onClick: () => {},
        // 按钮权限控制，指定权限字符串
        auth: 'test:testData:edit',
      },
      {
        icon: 'ant-design:stop-outlined',
        color: 'error',
        title: '停用数据',
        // 是否需要启用确认框
        popConfirm: {
          title: '是否确认停用数据',
          confirm: '',
        },
        // 按钮权限控制，指定权限字符串
        auth: 'test:testData:edit',
      },
    ],
    // 操作列更多按钮定义
    dropDownActions: (record: Recordable) => [
      {
        icon: 'ant-design:reload-outlined',
        label: '重置密码',
        onClick: () => {},
        auth: 'sys:empUser:resetpwd',
      },
    ],
  };
</script>
```

### 属性

| 属性            | 类型           | 说明                       |
| --------------- | -------------- | -------------------------- |
| actions         | `ActionItem[]` | 右侧操作列按钮列表         |
| dropDownActions | `ActionItem[]` | 右侧操作列更多下拉按钮列表 |

## ActionItem

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| label | `string` | 按钮文本 |
| disabled | `boolean` | 是否禁用 |
| color | `success \| error \| warning` | 按钮颜色 |
| type | `string` | 按钮类型 |
| props | `any` | button 组件 props |
| icon | `string` | 按钮图标 |
| popConfirm | `PopConfirm` | 气泡确认框 |
| divider | `boolean` | 是否显示分隔线 |
| auth | `RoleEnum\| RoleEnum[] \| string \| string[];` | 根据权限编码来控制当前列是否显示 |
| ifShow | `boolean \| ((action: ActionItem) => boolean)` | 根据业务状态来控制当前列是否显示 |
| onClick | `()=>{}` | 点击回调 |
| tooltip | ` string \| TooltipProps` | 点击 Tooltip 配置，可以配置为 string，或者完整的 tooltip 属性回调 |

有关 Tooltip Props 的说明，请参考 [Tooltip](https://3x.antdv.com/components/tooltip-cn#API) 文字提示

### PopConfirm

```ts
export interface PopConfirm {
  title: string;
  okText?: string;
  cancelText?: string;
  confirm: Fn;
  cancel?: Fn;
  icon?: string;
}
```

### TableImg 单元格图片组件

用于渲染单元格图片，支持图片预览，只能用于表格内部

<BasicTable @register="registerTable">

<template #bodyCell="{ column }"> <template v-if="column.key === 'imgArr'"> <TableImg :size="60" :simpleShow="true" :imgList="['https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png']" /> </template>

 <template v-if="column.key === 'imgs'"> 
 <TableImg :size="60" :imgList="['https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png']" />
  </template> 
  
  </template>

 </BasicTable>

```vue
<template>
  <BasicTable @register="registerTable">
    <template #bodyCell="{ column }">
      <template v-if="column.key === 'imgArr'">
        <TableImg
          :size="60"
          :simpleShow="true"
          :imgList="[
            'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          ]"
        />
      </template>

      <template v-if="column.key === 'imgs'">
        <TableImg
          :size="60"
          :imgList="[
            'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          ]"
        />
      </template>
    </template>
  </BasicTable>
</template>
<script lang="ts" setup>
  import { BasicColumn, BasicTable, useTable, TableImg } from 'lanvenUi';
  const Imgcolumns: BasicColumn[] = [
    {
      title: '图片列表1',
      dataIndex: 'imgArr',
      helpMessage: ['这是简单模式的图片列表', '只会显示一张在表格中', '但点击可预览多张图片'],
      width: 140,
    },
    {
      title: '照片列表2',
      dataIndex: 'imgs',
      width: 160,
    },
  ];

  const imgData = [
    {
      imgs: '图片',
      imgArr: '图片2',
    },
  ];

  const [registerTable] = useTable({
    title: '图片示例',
    pagination: false,
    columns: Imgcolumns,
    dataSource: imgData,
  });
</script>
```

### TableImg 属性

| 名称       | 类型       | 默认值  | 说明                             |
| ---------- | ---------- | ------- | -------------------------------- |
| imgList    | `string[]` | ------  | 图片地址列表                     |
| size       | `number`   | ------  | 图片大小                         |
| simpleShow | `boolean`  | `false` | 简单显示模式（只显示第一张图片） |
| showBadge  | `boolean`  | `true`  | 简单模式下是否显示计数 Badge     |
| margin     | `number`   | `4`     | 常规模式下的图片间距             |
| srcPrefix  | `string`   | -       | 在每一个图片 src 前插入的内容    |

<script lang="ts" setup>
import { BasicColumn, BasicTable,useTable,TableAction,TableImg   } from 'lanvenUi';
import { Button } from 'ant-design-vue'
const columns: BasicColumn[] = [
    {
      title: '单行文本',
      dataIndex: 'testInput',
      width: 230,
      align: 'left',
    },
    {
      title: '多行文本',
      dataIndex: 'testTextarea',
      width: 130,
      align: 'left',
    },
  ];
const dataSource = [
    { id: '1', testInput: '123', testTextarea: '456' },
    { id: '2', testInput: '789', testTextarea: '123' },
    { id: '2', testInput: '789', testTextarea: '123' },
  ];
function list(){
  return new Promise((r,j)=>{
    setTimeout(()=>{   r([
  { id: '1', testInput: 'test1', testTextarea: '456' },
  { id: '2', testInput: 'test2', testTextarea: '123' },
  { id: '2', testInput: 'test3', testTextarea: '123' },
  { id: '2', testInput: 'test4', testTextarea: '123' },
  { id: '2', testInput: 'test5', testTextarea: '123' },
  { id: '2', testInput: 'test6', testTextarea: '123' },
  { id: '2', testInput: 'test7', testTextarea: '123' },
  { id: '2', testInput: 'test8', testTextarea: '123' },
  { id: '2', testInput: 'test9', testTextarea: '123' },
  { id: '2', testInput: 'test10', testTextarea: '123' },
  { id: '2', testInput: 'test11', testTextarea: '123' },
  { id: '2', testInput: 'test12', testTextarea: '123' },
  { id: '2', testInput: 'test13', testTextarea: '123' },
  { id: '2', testInput: 'test14', testTextarea: '123' },
  { id: '2', testInput: 'test15', testTextarea: '123' },
  { id: '2', testInput: 'test16', testTextarea: '123' },
  { id: '2', testInput: 'test17', testTextarea: '123' },
  { id: '2', testInput: 'test18', testTextarea: '123' },
  { id: '2', testInput: 'test19', testTextarea: '123' },
  { id: '2', testInput: 'test20', testTextarea: '123' },
  { id: '2', testInput: 'test21', testTextarea: '123' },
  { id: '2', testInput: 'test22', testTextarea: '123' },
  { id: '2', testInput: 'test23', testTextarea: '123' },
  { id: '2', testInput: 'test24', testTextarea: '123' },
])},1000)
  })
}
const [register, methods] = useTable({
  api:list,
  title: '基础示例',
  titleHelpMessage: '温馨提醒',
  pagination: true,
  canResize:true,
  canResizePagination:true,
  columns,
  useSearchForm: true,
  formConfig: {
    labelWidth: 120,
    schemas: [
        {
          field: "deptName",
          label: "科室名称",
          component: "Input",
          colProps: { span: 4 },
        },
        {
          field: "deptCode",
          label: "科室编号",
          component: "Input",
          colProps: { span: 4 },
        },
        {
          field: "functionFlag",
          label: "是否为职能科室",
          component: "Select",
          componentProps: {
            options: [
              { label: "是", value: "true" },
              { label: "否", value: "false" },
            ],
          },
          colProps: { span: 4 },
        },
      ],
  },
}); 



const actionColumn: BasicColumn = {
  width: 160, // 操作列宽
  actions: (record) => [
    {
      icon: 'clarity:note-edit-line',
      title: '编辑数据',
      onClick:()=>{},
      // 按钮权限控制，指定权限字符串
      auth: 'test:testData:edit',
    },
    {
      icon: 'ant-design:stop-outlined',
      color: 'error',
      title: '停用数据',
      // 是否需要启用确认框
      popConfirm: {
        title: '是否确认停用数据',
        confirm:''
      },
      // 按钮权限控制，指定权限字符串
      auth: 'test:testData:edit',
    },
  ],
  // 操作列更多按钮定义
  dropDownActions: (record: Recordable) => [
    {
      icon: 'ant-design:reload-outlined',
      label: '重置密码',
      onClick:()=>{},
      auth: 'sys:empUser:resetpwd',
    },
  ],
};


const Imgcolumns: BasicColumn[] = [
  {
    title: '图片列表1',
    dataIndex: 'imgArr',
    helpMessage: [
      '这是简单模式的图片列表',
      '只会显示一张在表格中',
      '但点击可预览多张图片',
    ],
    width: 140,
  },
  {
    title: '照片列表2',
    dataIndex: 'imgs',
    width: 160,
  },
]

const imgData=[{
  imgs:'图片',
  imgArr:'图片2'
}]

const [registerTable] = useTable({
  title: '图片示例',
  pagination: false,
  columns:Imgcolumns,
  dataSource:imgData,
}); 
</script>
