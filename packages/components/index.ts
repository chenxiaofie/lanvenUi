import * as components from './src/index';

import './assets/index.css';
import './assets/index.less';

const typedComponents: any = components;

export default {
  install: (app: any) => {
    Object.keys(typedComponents).forEach((key) => {
      const component = typedComponents[key];
      if (component.install) {
        app.use(component);
      }
    });
  },
};

export * from './src/index';
