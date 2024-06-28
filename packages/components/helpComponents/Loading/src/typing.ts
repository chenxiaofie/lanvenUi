enum SizeEnum {
  DEFAULT = 'default',
  SMALL = 'small',
  LARGE = 'large',
}

export interface LoadingProps {
  tip: string;
  size: SizeEnum;
  absolute: boolean;
  loading: boolean;
  background: string;
  theme: 'dark' | 'light';
}
