<template>
  <span>
    <slot></slot>
    {{ title }}
    <FormOutlined />
  </span>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { FormOutlined } from '@ant-design/icons-vue';
  export default defineComponent({
    name: 'EditTableHeaderIcon',
    components: { FormOutlined },
    props: { title: { type: String, default: '' } },
  });
</script>

<style lang="less">
  @prefix-cls: ~'@{namespace}-editable-cell';

  .edit-cell-align-left {
    text-align: left;

    input:not(.ant-calendar-picker-input, .ant-time-picker-input) {
      text-align: left;
    }
  }

  .edit-cell-align-center {
    text-align: center;

    input:not(.ant-calendar-picker-input, .ant-time-picker-input) {
      text-align: center;
    }
  }

  .edit-cell-align-right {
    text-align: right;

    input:not(.ant-calendar-picker-input, .ant-time-picker-input) {
      text-align: right;
    }
  }

  .edit-cell-rule-popover {
    .ant-popover-inner-content {
      padding: 4px 8px;
      color: @error-color;
      // border: 1px solid @error-color;
      border-radius: 2px;
    }
  }
  .@{prefix-cls} {
    position: relative;

    &__wrapper {
      display: flex;
      align-items: center;
      justify-content: center;

      > .ant-select {
        min-width: calc(100% - 50px);
      }
    }

    &__icon {
      &:hover {
        transform: scale(1.2);

        svg {
          color: @primary-color;
        }
      }
    }

    .ellipsis-cell {
      .cell-content {
        overflow-wrap: break-word;
        word-break: break-word;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }

    &__normal {
      &-icon {
        position: absolute;
        top: 4px;
        right: 0;
        display: none;
        width: 20px;
        cursor: pointer;
      }
    }

    &:hover {
      .@{prefix-cls}__normal-icon {
        display: inline-block;
      }
    }
  }
</style>
