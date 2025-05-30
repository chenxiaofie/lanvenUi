<template>
  <div :class="prefixCls">
    <CollapseHeader v-bind="props" :prefixCls="prefixCls" :show="show" @expand="handleExpand">
      <template #title>
        <slot name="title"></slot>
      </template>
      <template #action>
        <slot name="action"></slot>
      </template>
    </CollapseHeader>

    <div class="p-2">
      <CollapseTransition :enable="canExpan">
        <Skeleton v-if="loading" :active="loading" />
        <div :class="`${prefixCls}__body`" v-show="show">
          <slot></slot>
        </div>
      </CollapseTransition>
    </div>
    <div :class="`${prefixCls}__footer`" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script lang="ts">
  import type { PropType } from 'vue';
  import { ref, defineComponent } from 'vue';
  import { isNil } from 'lodash-es';
  // component
  import { Skeleton } from 'ant-design-vue';
  import { CollapseTransition } from '@/helpComponents/Transition';
  import CollapseHeader from './CollapseHeader.vue';
  import { triggerWindowResize } from '@/utils/event';
  // hook
  import { useTimeoutFn } from '@/hooks/core/useTimeout';
  import { useDesign } from '@/hooks/web/useDesign';
  import { CollapseContainerProps } from '../typing';
  export default defineComponent({
    props: {
      title: { type: String, default: '' },
      loading: { type: Boolean },
      /**
       *  Can it be expanded
       */
      canExpan: { type: Boolean, default: true },
      /**
       * Warm reminder on the right side of the title
       */
      helpMessage: {
        type: [Array, String] as PropType<string[] | string>,
        default: '',
      },
      /**
       * Whether to trigger window.resize when expanding and contracting,
       * Can adapt to tables and forms, when the form shrinks, the form triggers resize to adapt to the height
       */
      triggerWindowResize: { type: Boolean },
      /**
       * Delayed loading time
       */
      lazyTime: { type: Number, default: 0 },
    },
    components: { Skeleton, CollapseTransition, CollapseHeader },
    setup(props: CollapseContainerProps) {
      const show = ref<boolean>(true);

      const { prefixCls } = useDesign('collapse-container');

      /**
       * @description: Handling development events
       */
      function handleExpand(val: boolean) {
        show.value = isNil(val) ? !show.value : val;
        if (props.triggerWindowResize) {
          // 200 milliseconds here is because the expansion has animation,
          useTimeoutFn(triggerWindowResize, 200);
        }
      }

      return {
        handleExpand,
        prefixCls,
        show,
        props,
      };
    },
  });
</script>
<style lang="less">
  @prefix-cls: ~'@{namespace}-collapse-container';

  .@{prefix-cls} {
    background-color: @component-background;
    border-radius: 2px;
    transition: all 0.3s ease-in-out;

    &__header {
      display: flex;
      height: 32px;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid @border-color-light;
    }

    &__footer {
      border-top: 1px solid @border-color-light;
    }

    &__action {
      display: flex;
      text-align: right;
      flex: 1;
      align-items: center;
      justify-content: flex-end;
    }
  }
</style>
