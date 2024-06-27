<template>
  <div class="divInput">
    <!-- <label class="editlabel" :for="id">{{ label }}:</label> -->
    <div
      class="editVal ant-select-selection-search-input"
      contenteditable="true"
      :id="id"
      :placeholder="label"
      @input="updateContent"
      >{{ state }}</div
    >,
  </div>
</template>

<script lang="ts">
  import { ref, onMounted, watch } from 'vue';
  import { useRuleFormItem } from '@/hooks/component/useFormItem';
  export default {
    props: ['value', 'label'],
    emits: ['change'],
    setup(props, { emit }) {
      // const state = ref(props.value);
      const emitData = ref<any[]>([]);
      const id = `editable-${Math.floor(Math.random() * 10000)}`;
      const [state] = useRuleFormItem(props, 'value', 'change', emitData) as any;
      const updateContent = (event: any) => {
        emitData.value = event.target.innerText;
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
        updateContent,
        id,
        state,
      };
    },
  };
</script>
<style lang="less" scoped>
  .editlabel {
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #000000;
    line-height: 20px;
  }

  .editVal {
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #949db5;
    line-height: 20px;
    width: 100%;
    white-space: pre-wrap;

    &:empty::before {
      content: attr(placeholder);
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #949db5;
    }
  }

  .divInput {
    display: flex;
    align-items: flex-start;
    color: #000;
  }
</style>
