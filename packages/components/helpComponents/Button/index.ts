import { withInstall } from '@lanven-ui/utils';
import type { ExtractPropTypes } from 'vue';
import basicButton from './src/BasicButton.vue';
import popConfirmButton from './src/PopConfirmButton.vue';
import { buttonProps } from './src/props';

export const Button = withInstall(basicButton);
export const PopConfirmButton = withInstall(popConfirmButton);
export declare type ButtonProps = Partial<ExtractPropTypes<typeof buttonProps>>;
