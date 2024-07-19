import { withInstall } from '@lanven-ui/utils';
import BasicForm from './src/BasicForm.vue';
import { Form } from 'ant-design-vue';
export type * from './types/form';
export type * from './types/formItem';
const LvFormItem = Form.Item as any;
export { useComponentRegister } from './src/hooks/useComponentRegister';
export { useForm } from './src/hooks/useForm';

export { default as ApiSelect } from './src/components/ApiSelect.vue';
export { default as RadioButtonGroup } from './src/components/RadioButtonGroup.vue';
export { default as ApiTreeSelect } from './src/components/ApiTreeSelect.vue';
export { default as ApiTree } from './src/components/ApiTree.vue';
export { default as ApiRadioGroup } from './src/components/ApiRadioGroup.vue';
export { default as ApiCascader } from './src/components/ApiCascader.vue';

export { BasicForm, LvFormItem };
export default withInstall(BasicForm);
