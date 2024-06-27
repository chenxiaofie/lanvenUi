export type ScrollType = 'default' | 'main';

export interface CollapseContainerOptions {
  canExpand?: boolean;
  title?: string;
  helpMessage?: Array<any> | string;
}
export interface ScrollContainerOptions {
  enableScroll?: boolean;
  type?: ScrollType;
}

export type ScrollActionType = RefType<{
  scrollBottom: () => void;
  getScrollWrap: () => Nullable<HTMLElement>;
  scrollTo: (top: number) => void;
}>;

export interface CollapseContainerProps {
  triggerWindowResize: boolean;
  lazyTime: number;
  helpMessage: string[] | string;
  canExpan: boolean;
  loading: boolean;
  title: string;
}
