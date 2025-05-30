<template>
  <div ref="AutoCompleteEl">
    <AutoComplete
      @dropdown-visible-change="handleFetch"
      @change="handleChange"
      :options="getOptions"
      v-model:value="state"
      :get-popup-container="() => AutoCompleteEl"
      :filter-option="filterOption"
    >
      <!-- :dropdownStyle="{ top: 0 }" -->
      <template #suffixIcon v-if="loading">
        <LoadingOutlined spin />
      </template>
      <template #notFoundContent v-if="loading">
        <span>
          <LoadingOutlined spin class="mr-1" />
          请等待数据加载完成...
        </span>
      </template>
      <!-- <template #[item]="data" v-for="item in Object.keys($slots)">
        <slot :name="item" v-bind="data || {}"></slot>
      </template> -->
    </AutoComplete>
  </div>
</template>
<script lang="ts">
  import { defineComponent, PropType, ref, watchEffect, computed, unref, watch } from 'vue';
  import { AutoComplete } from 'ant-design-vue';
  import { isFunction } from '@/utils/is';
  import { useRuleFormItem } from '@/hooks/component/useFormItem';
  import { useAttrs } from '@/hooks/core/useAttrs';
  import { get, omit } from 'lodash-es';
  import { LoadingOutlined } from '@ant-design/icons-vue';
  // import { useI18n } from '@/hooks/web/useI18n';
  import { propTypes } from '@/utils/propTypes';

  type OptionsItem = { label: string; value: string; disabled?: boolean };
  interface Option {
    value: string;
  }
  export default defineComponent({
    name: 'ApiAutoComplete',
    components: {
      AutoComplete,
      LoadingOutlined,
    },
    inheritAttrs: false,
    props: {
      value: [Array, Object, String, Number],
      numberToString: propTypes.bool,
      api: {
        type: Function as PropType<(arg?: Recordable) => Promise<OptionsItem[]>>,
        default: null,
      },
      // api params
      params: {
        type: Object as PropType<Recordable>,
        default: () => ({}),
      },
      // support xxx.xxx.xx
      resultField: propTypes.string.def(''),
      labelField: propTypes.string.def('label'),
      valueField: propTypes.string.def('value'),
      immediate: propTypes.bool.def(true),
      alwaysLoad: propTypes.bool.def(false),
    },
    emits: ['options-change', 'change'],
    setup(props, { emit }) {
      const AutoCompleteEl = ref();
      const options = ref<OptionsItem[]>([]);
      const loading = ref(false);
      const isFirstLoad = ref(true);
      const emitData = ref<any[]>([]);
      const attrs = useAttrs();

      // Embedded in the form, just use the hook binding to perform form verification
      const [state] = useRuleFormItem(props, 'value', 'change', emitData) as any;
      const getOptions = computed(() => {
        const { labelField, valueField, numberToString } = props;

        return unref(options).reduce((prev, next: Recordable) => {
          if (next) {
            const value = next[valueField];
            prev.push({
              ...omit(next, [labelField, valueField]),
              label: next[labelField],
              value: numberToString ? `${value}` : value,
            });
          }
          return prev;
        }, [] as OptionsItem[]);
      });

      watchEffect(() => {
        props.immediate && !props.alwaysLoad && fetch();
      });

      watch(
        () => props.params,
        () => {
          !unref(isFirstLoad) && fetch();
        },
        { deep: true },
      );

      async function fetch() {
        const api = props.api;
        if (!api || !isFunction(api)) return;
        options.value = [];
        try {
          loading.value = true;
          const res = await api(props.params);
          if (Array.isArray(res)) {
            options.value = res;
            emitChange();
            return;
          }
          if (props.resultField) {
            options.value = get(res, props.resultField) || [];
          }
          emitChange();
        } catch (error) {
          console.warn(error);
        } finally {
          loading.value = false;
        }
      }

      async function handleFetch(visible: any) {
        if (visible) {
          if (props.alwaysLoad) {
            await fetch();
          } else if (!props.immediate && unref(isFirstLoad)) {
            await fetch();
            isFirstLoad.value = false;
          }
        }
      }

      function emitChange() {
        emit('options-change', unref(getOptions));
      }

      function handleChange(_: any, ...args: any) {
        emitData.value = args;
      }
      const filterOption = (input: string, option: Option) => {
        return option.value.toUpperCase().indexOf(input.toUpperCase()) >= 0;
      };
      return {
        filterOption,
        AutoCompleteEl,
        state,
        attrs,
        getOptions,
        loading,
        handleFetch,
        handleChange,
      };
    },
  });
</script>

<style lang="less" scoped>
  :deep(.ant-select-dropdown) {
    bottom: auto !important;
    // top: 0 !important;

    .rc-virtual-list-holder {
      max-height: 110px !important;
    }
  }
</style>
