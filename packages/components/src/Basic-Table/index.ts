import { withInstall } from '@lanven-ui/utils';
import BasicTable from './src/BasicTable.vue';
export { default as TableAction } from './src/components/TableAction.vue';
export { default as EditTableHeaderIcon } from './src/components/EditTableHeaderIcon.vue';
export { default as TableImg } from './src/components/TableImg.vue';

export type * from './src/types/table';
export type * from './src/types/pagination';
export type * from './src/types/tableAction';
export { useTable } from './src/hooks/useTable';
export type { FormSchema, FormProps } from '@/src/Basic-Form/types/form';
export type { EditRecordRow } from './src/components/editable';
export { BasicTable };
export default withInstall(BasicTable);
