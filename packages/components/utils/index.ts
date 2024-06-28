import { unref } from 'vue';
import { isObject } from './is';
import { buildShortUUID } from '@/utils/uuid';

export function deepMerge<T = any>(src: any = {}, target: any = {}): T {
  let key: string;
  for (key in target) {
    src[key] = isObject(src[key]) ? deepMerge(src[key], target[key]) : (src[key] = target[key]);
  }
  return src;
}

/**
 * @description:  Set ui mount node
 */
export function getPopupContainer(node?: HTMLElement): HTMLElement {
  return (node?.parentNode as HTMLElement) ?? document.body;
}

// dynamic use hook props
export function getDynamicProps<T extends object, U>(props: T): Partial<U> {
  const ret: Recordable = {};

  Object.keys(props).map((key) => {
    ret[key] = unref((props as Recordable)[key]);
  });

  return ret as Partial<U>;
}

export function openWindow(
  url: string,
  opt?: {
    target?: TargetContext | string;
    name?: string;
    preload?: boolean;
    frame?: false;
    width?: number;
    height?: number;
  },
) {
  const {
    target = '_blank',
    name = buildShortUUID('win'),
    preload = false,
    frame = true,
    width = 400,
    height = 300,
  } = opt || {};
  const feature: string[] = [];

  //noopener && feature.push('noopener=yes');
  //noreferrer && feature.push('noreferrer=yes');
  name && feature.push(`name=${name}`);
  preload && feature.push('preload=true');
  frame && feature.push('frame=true');
  width && feature.push(`width=${width}`);
  height && feature.push(`width=${height}`);
  return window.open(url, target, feature.join(','));
}
