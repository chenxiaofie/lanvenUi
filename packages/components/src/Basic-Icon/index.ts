import { withInstall } from '@lanvenUi/utils';
import Icon from './src/Icon.vue';

export { default as Icon } from './src/Icon.vue';
export { default as SvgIcon } from './src/SvgIcon.vue';
export { default as IconPicker } from './src/IconPicker.vue';

// export default Icon;
export default withInstall(Icon);
