import { withInstall } from '@lanvenUi/utils';
import BasicDrawer from './src/BasicDrawer.vue';

export { useDrawer, useDrawerInner } from './src/useDrawer';
export { BasicDrawer };
export default withInstall(BasicDrawer);
export type * from './src/typing';
