<template>
  <a-dropdown :trigger="trigger" v-bind="$attrs">
    <span>
      <slot></slot>
    </span>
    <template #overlay>
      <a-menu :selectedKeys="selectedKeys">
        <template v-for="item in dropMenuList" :key="`${item.event}`">
          <a-menu-item
            v-bind="getAttr(item.event)"
            @click="handleClickMenu(item)"
            :disabled="item.disabled"
          >
            <a-popconfirm
              v-if="popconfirm && item.popConfirm"
              v-bind="getPopConfirmAttrs(item.popConfirm)"
            >
              <template #icon v-if="item.popConfirm.icon">
                <Icon :icon="item.popConfirm.icon" />
              </template>
              <div>
                <Icon :icon="item.icon" v-if="item.icon" />
                <span class="ml-1">{{ item.text }}</span>
              </div>
            </a-popconfirm>
            <template v-else>
              <Icon :icon="item.icon" v-if="item.icon" />
              <span class="ml-1">{{ item.text }}</span>
            </template>
          </a-menu-item>
          <a-menu-divider v-if="item.divider" :key="`d-${item.event}`" />
        </template>
      </a-menu>
    </template>
  </a-dropdown>
</template>

<script lang="ts">
  import { computed, defineComponent, PropType } from 'vue';
  import type { DropMenu } from './typing';
  import { Dropdown, Menu, Popconfirm } from 'ant-design-vue';
  import { Icon } from '@/src/Basic-Icon';
  import { omit } from 'lodash-es';
  import { isFunction } from '@/utils/is';

  export default defineComponent({
    name: 'Dropdown',
    props: {
      popconfirm: Boolean,
      /**
       * the trigger mode which executes the drop-down action
       * @default ['hover']
       * @type string[]
       */
      trigger: {
        type: [Array] as PropType<('contextmenu' | 'click' | 'hover')[]>,
        default: () => {
          return ['contextmenu'];
        },
      },
      dropMenuList: {
        type: Array as PropType<(DropMenu & Recordable)[]>,
        default: () => [],
      },
      selectedKeys: {
        type: Array as PropType<string[]>,
        default: () => [],
      },
    },
    components: {
      ADropdown: Dropdown,
      AMenu: Menu,
      AMenuItem: Menu.Item,
      AMenuDivider: Menu.Divider,
      APopconfirm: Popconfirm,
      Icon,
    },
    emits: ['menuEvent'],
    setup(props, { emit }) {
      function handleClickMenu(item: DropMenu) {
        const { event } = item;
        const menu = props.dropMenuList.find((item) => `${item.event}` === `${event}`);
        emit('menuEvent', menu);
        item.onClick?.();
      }

      const getPopConfirmAttrs = computed((): Fn => {
        return (attrs: any) => {
          const originAttrs = omit(attrs, ['confirm', 'cancel', 'icon']);
          if (!attrs.onConfirm && attrs.confirm && isFunction(attrs.confirm))
            originAttrs['onConfirm'] = attrs.confirm;
          if (!attrs.onCancel && attrs.cancel && isFunction(attrs.cancel))
            originAttrs['onCancel'] = attrs.cancel;
          return originAttrs;
        };
      });

      const getAttr = (key: string | number) => ({ key });
      return {
        handleClickMenu,
        getPopConfirmAttrs,
        getAttr,
      };
    },
  });
</script>
