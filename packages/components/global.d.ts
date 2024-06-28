import type {
  ComponentRenderProxy,
  VNode,
  VNodeChild,
  ComponentPublicInstance,
  FunctionalComponent,
  PropType as VuePropType,
  CSSProperties,
  App,
} from 'vue';

declare global {
  interface CustomCSSProperties extends CSSProperties {
    [key: string]: any;
  }
  type Apps = App;
  type Recordable<T = any> = Record<string, T>;
  type VueNode = VNodeChild | JSX.Element;
  type Nullable<T> = T | null;
  interface Fn<T = any, R = T> {
    (...arg: T[]): R;
  }
  type TimeoutHandle = ReturnType<typeof setTimeout>;
  type ComponentRef<T extends HTMLElement = HTMLDivElement> = ComponentElRef<T> | null;

  type ElRef<T extends HTMLElement = HTMLDivElement> = Nullable<T>;
  type PropType<T> = VuePropType<T>;

  type EmitType = (event: string, ...args: any[]) => void;

  type LabelValueOptions = {
    label: string;
    value: any;
    [key: string]: string | number | boolean;
  }[];

  interface ChangeEvent extends Event {
    target: HTMLInputElement;
  }
  interface HTMLElement {
    pressKey(code: string): void;
  }
  type RefType<T> = T | null;

  interface PromiseFn<T = any, R = T> {
    (...arg: T[]): Promise<R>;
  }
  interface CSSStyleDeclaration {
    zoom?: number;
  }

  type TargetContext = '_self' | '_blank';

  namespace JSX {
    // tslint:disable no-empty-interface
    type Element = VNode;
    // tslint:disable no-empty-interface
    type ElementClass = ComponentRenderProxy;
    interface ElementAttributesProperty {
      $props: any;
    }
    interface IntrinsicElements {
      [elem: string]: any;
    }
    interface IntrinsicAttributes {
      [elem: string]: any;
    }
  }
}

declare module 'vue' {
  export type JSXComponent<Props = any> =
    | { new (): ComponentPublicInstance<Props> }
    | FunctionalComponent<Props>;
}
