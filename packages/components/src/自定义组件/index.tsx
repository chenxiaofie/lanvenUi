import { defineComponent, ref } from 'vue';
import { withInstall } from '@lanvenUi/utils';

// import TestVue from './index.vue';

const Test = defineComponent({
  name: 'Test',
  inheritAttrs: false,

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
