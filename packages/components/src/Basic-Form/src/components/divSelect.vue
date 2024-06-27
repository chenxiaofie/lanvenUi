<template>
  <div class="divSelect">
    <a-select
      v-model:value="state"
      style="width: 100%"
      mode="tags"
      :options="options"
      @change="updateContent"
      :placeholder="label"
      :dropdownMatchSelectWidth="false"
  /></div>
</template>

<script lang="ts">
  import { ref, watch, onMounted } from 'vue';
  import { useRuleFormItem } from '@/hooks/component/useFormItem';
  export default {
    props: ['value', 'label', 'options'],
    emits: ['change'],
    setup(props, { emit }) {
      const emitData = ref<any[]>([]);

      const [state] = useRuleFormItem(props, 'value', 'change', emitData) as any;
      const updateContent = (value: any) => {
        emitData.value = value;
        emit('change', emitData.value);
      };
      watch(
        () => props.value,
        (newValue) => {
          if (newValue) {
            emitData.value = newValue;
          } else {
            emitData.value = props.value;
          }
        },
      );

      onMounted(() => {
        if (props.value) {
          emitData.value = props.value;
        } else {
          // emitData.value = undefined;
        }
      });
      return {
        state,
        updateContent,
      };
    },
  };
</script>
<style lang="less" scoped>
  :deep(.ant-select-selector) {
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
  }

  :deep(.ant-select):not(.ant-select-customize-input) .ant-select-selector {
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    line-height: normal;
  }

  :deep(.ant-select-focused):not(.ant-select-disabled).ant-select:not(.ant-select-customize-input)
    .ant-select-selector {
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    line-height: normal;
  }

  :deep(.ant-select-show-search).ant-select:not(.ant-select-customize-input)
    .ant-select-selector
    input {
    height: auto;
    line-height: 20px;
  }

  :deep(.ant-select-multiple) .ant-select-selector::after {
    display: none;
  }

  .divSelect {
    :deep(.ant-select-selection-overflow) {
      width: auto;
      min-width: 50px;
    }

    :deep(.ant-select-multiple .ant-select-selection-item) {
      margin: 0 4px;
      padding: 0 2px;
      line-height: 14px;
      height: auto;
    }
  }

  :deep(.ant-form-item-control-input-content) {
    div {
      width: auto;
    }
  }

  :deep(.ant-select-multiple) .ant-select-selection-placeholder {
    line-height: 14px;
  }

  :deep(.ant-select-multiple) .ant-select-selection-item-content {
    color: #949db5;
  }
</style>
