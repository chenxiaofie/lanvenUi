import { withInstall } from '@lanven-ui/utils';
import basicArrow from './src/BasicArrow.vue';
import basicTitle from './src/BasicTitle.vue';
import basicHelp from './src/BasicHelp';
import { BasicArrowProp } from './types/BasicArrow';
import { BasicTitleProp } from './types/BasicTitle';
export const BasicArrow = withInstall(basicArrow) as BasicArrowProp;
export const BasicTitle = withInstall(basicTitle) as BasicTitleProp;
export const BasicHelp = withInstall(basicHelp) as any;
