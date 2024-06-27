<template>
  <div class="viewBlood" id="medical-record-blood">
    <input type="text" placeholder="高压" maxlength="3" v-model="maxnum" @input="changeNUm" />
    <span>/</span>
    <input type="text" placeholder="低压" maxlength="3" v-model="mininum" @input="changeNUm" />
    <span>mmHg</span>
  </div>
</template>
<script lang="ts">
  import { watch, watchEffect, defineComponent, ref } from 'vue';
  import { useRuleFormItem } from '@/hooks/component/useFormItem';
  interface bloodNum {
    mininum: string;
    maxnum: string;
  }
  export default defineComponent({
    name: 'FieldGroup',
    inheritAttrs: false,
    props: {
      value: Object as PropType<bloodNum>,
    },
    emits: ['change'],
    setup(props) {
      const emitData = ref<any>('');
      // Embedded in the form, just use the hook binding to perform form verification

      const mininum = ref('');
      const maxnum = ref('');
      watch(
        () => props,
        () => {},
      );
      // watchEffect(() => {
      //   state.value = {
      //     mininum: props.value?.mininum,
      //     maxnum: props.value?.maxnum,
      //   };
      // });
      watchEffect(() => {
        mininum.value = props.value?.mininum ? props.value.mininum : '';
        maxnum.value = props.value?.maxnum ? props.value.maxnum : '';
      });
      const [state] = useRuleFormItem(
        {
          value: {
            mininum: props.value?.mininum,
            maxnum: props.value?.maxnum,
          },
        },
        'value',
        'change',
        emitData,
      ) as any;
      function changeNUm() {
        state.value = {
          mininum: mininum.value,
          maxnum: maxnum.value,
        };
      }

      return {
        state,
        mininum,
        maxnum,
        changeNUm,
      };
    },
  });
</script>

<style scoped lang="less">
  .viewBlood {
    width: 138px;
    height: 22px;
    background: #ffffff;
    border-radius: 2px;
    display: flex;
    align-items: center;
    // border: 1px solid #c0c8de;
    border: none;
    padding: 0 8px 0 0;
    margin-right: 12px;

    input {
      width: 40px;
      border: none;
      outline: none;
      padding-left: 8px;
    }

    input::placeholder {
      color: #afb6c7;
    }
  }
  // :deep(.ant-input-group-wrapper) {
  //   width: 100px;
  // }

  // :deep(.ant-input-affix-wrapper) {
  //   width: 120px !important;
  //   margin-left: 1px !important;
  // }

  // :deep(.ant-form-item-label) {
  //   margin-right: 4px;
  // }
</style>
