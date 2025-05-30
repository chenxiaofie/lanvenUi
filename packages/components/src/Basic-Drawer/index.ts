import { withInstall } from '@lanven-ui/utils';
import BasicDrawer from './src/BasicDrawer.vue';

export { useDrawer, useDrawerInner } from './src/useDrawer';
export { BasicDrawer };
export default withInstall(BasicDrawer as any);
export type * from './src/typing';
