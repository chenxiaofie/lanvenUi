import { defineComponent, ref } from 'vue';
import { withInstall } from '@lanvenUi/utils';
import type { testProps } from './type';
import { flexProps } from './type';
// import TestVue from './index.vue';

const Test = defineComponent({
  name: 'Test',
  inheritAttrs: false,
  props: flexProps(),
  // components: { TestVue },
  setup(props, { slots, attrs }) {
    const num = ref(1);
    return () => {
      return (
        <div>
          {num.value}
          {/* 测试测试 */}
          {slots.default && slots.default()}
        </div>
      );
    };
  },
});

export default withInstall(Test);
export { Test };
export type { testProps };
