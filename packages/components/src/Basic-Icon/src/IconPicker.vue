<template>
  <a-input
    disabled
    :style="{ width }"
    placeholder="点击选择图标"
    :class="prefixCls"
    v-model:value="currentSelect"
  >
    <template #addonAfter>
      <a-popover
        placement="bottomLeft"
        trigger="click"
        v-model="visible"
        :overlayClassName="`${prefixCls}-popover`"
      >
        <template #title>
          <div class="flex justify-between">
            <a-input placeholder="搜索图标" @change="debounceHandleSearchChange" allowClear />
          </div>
        </template>

        <template #content>
          <div v-if="getPaginationList.length">
            <ScrollContainer class="border border-solid border-t-0">
              <ul class="flex flex-wrap px-2">
                <li
                  v-for="icon in getPaginationList"
                  :key="icon"
                  :class="currentSelect === icon ? 'border border-primary' : ''"
                  class="p-2 w-1/8 cursor-pointer mr-1 mt-1 flex justify-center items-center border border-solid hover:border-primary"
                  @click="handleClick(icon)"
                  :title="icon"
                >
                  <SvgIcon v-if="isSvgMode" :name="icon" />
                  <Icon :icon="icon" v-else />
                </li>
              </ul>
            </ScrollContainer>
            <div class="flex py-2 items-center justify-center" v-if="getTotal >= pageSize">
              <a-pagination
                showLessItems
                size="small"
                :pageSize="pageSize"
                :total="getTotal"
                @change="handlePageChange"
              />
            </div>
          </div>
          <template v-else
            ><div class="p-5"><a-empty /></div>
          </template>
        </template>

        <span class="cursor-pointer px-2 py-1 flex items-center" v-if="isSvgMode && currentSelect">
          <SvgIcon :name="currentSelect" />
        </span>
        <Icon :icon="currentSelect || 'ion:apps-outline'" class="cursor-pointer px-2 py-1" v-else />
      </a-popover>
    </template>
  </a-input>
</template>
<script lang="ts">
  import { ref, watchEffect, watch, unref, defineComponent } from 'vue';
  import { useDesign } from '@/hooks/web/useDesign';
  import { ScrollContainer } from '@/helpComponents/Container';
  import { Input, Popover, Pagination, Empty } from 'ant-design-vue';
  import Icon from './Icon.vue';
  import SvgIcon from './SvgIcon.vue';

  import iconsData from '../data/iconsData';
  import { propTypes } from '@/utils/propTypes';
  import { usePagination } from '@/hooks/web/usePagination';
  import { useDebounceFn } from '@vueuse/core';

  import { useCopyToClipboard } from '@/hooks/web/useCopyToClipboard';
  import { useMessage } from '@/hooks/web/useMessage';
  import svgIcons from 'virtual:svg-icons-names';

  export default defineComponent({
    name: 'IconPicker',
    components: {
      AInput: Input,
      APopover: Popover,
      APagination: Pagination,
      AEmpty: Empty,
      ScrollContainer,
      Icon,
      SvgIcon,
    },
    props: {
      value: propTypes.string,
      width: propTypes.string.def('100%'),
      pageSize: propTypes.number.def(140),
      copy: propTypes.bool.def(false),
      mode: propTypes.oneOf(['svg', 'iconify']).def('iconify'),
    },
    emits: ['change', 'update:value'],
    setup(props: any, { emit }) {
      function getIcons() {
        const data = iconsData as any;
        const prefix: string = data?.prefix ?? '';
        let result: string[] = [];
        if (prefix) {
          result = (data?.icons ?? []).map((item: any) => `${prefix}:${item}`);
        } else if (Array.isArray(iconsData)) {
          result = iconsData as string[];
        }
        return result;
      }

      function getSvgIcons() {
        return svgIcons.map((icon: any) => icon.replace('icon-', ''));
      }

      const isSvgMode = props.mode === 'svg';
      const icons = isSvgMode ? getSvgIcons() : getIcons();

      const currentSelect = ref('');
      const visible = ref(false);
      const currentList = ref(icons);

      const { prefixCls } = useDesign('icon-picker');

      const debounceHandleSearchChange = useDebounceFn(handleSearchChange, 100) as any;
      const { clipboardRef, isSuccessRef } = useCopyToClipboard(props.value);
      const { createMessage } = useMessage();

      const { getPaginationList, getTotal, setCurrentPage } = usePagination(
        currentList,
        props.pageSize,
      );

      watchEffect(() => {
        currentSelect.value = props.value;
      });

      watch(
        () => currentSelect.value,
        (v) => {
          emit('update:value', v);
          return emit('change', v);
        },
      );

      function handlePageChange(page: number) {
        setCurrentPage(page);
      }

      function handleClick(icon: string) {
        currentSelect.value = icon;
        if (props.copy) {
          clipboardRef.value = icon;
          if (unref(isSuccessRef)) {
            createMessage.success('复制图标成功!');
          }
        }
      }

      function handleSearchChange(e: ChangeEvent) {
        const value = e.target.value;
        if (!value) {
          setCurrentPage(1);
          currentList.value = icons;
          return;
        }
        currentList.value = icons.filter((item: any) => item.includes(value));
      }
      return {
        prefixCls,
        currentSelect,
        visible,
        debounceHandleSearchChange,
        getPaginationList,
        handleClick,
        isSvgMode,
        getTotal,
        handlePageChange,
      };
    },
  });
</script>
<style lang="less">
  @prefix-cls: ~'@{namespace}-icon-picker';

  .@{prefix-cls} {
    .ant-input-group-addon {
      padding: 0;
    }

    &-popover {
      width: 300px;

      .ant-popover-inner-content {
        padding: 0;
      }

      .scrollbar {
        height: 220px;
      }
    }
  }
  .flex {
    display: flex;
  }
  .justify-between {
    justify-content: space-between;
  }
  .px-2 {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
  .flex-wrap {
    flex-wrap: wrap;
  }
  .w-1\/8 {
    width: 12.5%;
  }
  .p-2 {
    padding: 0.5rem;
  }
  .mt-1 {
    margin-top: 0.25rem;
  }
  .mr-1 {
    margin-right: 0.25rem;
  }
  .justify-center {
    justify-content: center;
  }
  .items-center {
    align-items: center;
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .border-solid {
    border-style: solid;
  }
  .border-primary,
  .hover\:border-primary:hover {
    --tw-border-opacity: 1;
    border-color: rgba(14, 83, 228, 1);
  }
  .border-t-0 {
    border: 1px solid;
    border-top: 0;
  }
</style>
