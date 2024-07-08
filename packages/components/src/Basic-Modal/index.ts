import { withInstall } from '@lanven-ui/utils';
import './src/index.less';
import BasicModal from './src/BasicModal.vue';

export type * from './src/typing';
export { useModalContext } from './src/hooks/useModalContext';
export { useModal, useModalInner } from './src/hooks/useModal';
export { default as BasicModalFooter } from './src/components/ModalFooter.vue';

export { BasicModal };
export default withInstall(BasicModal);
