import 'lanven-ui/es/lanvenUi.css';
// import 'lanven-ui/assets/index.css';
// import 'lanven-ui/assets/index.less';
import DefaultTheme from 'vitepress/theme';
import DefaultExamples from '../../../components/index';
// import theme from './theme.vue';
import 'virtual:svg-icons-register';
import './theme.css';
export default {
  extends: DefaultTheme,
  // 使用注入插槽的包装组件覆盖 Layout
  // Layout: theme,
  enhanceApp({ app }) {
    for (let k in DefaultExamples) {
      app.component(k, DefaultExamples[k]);
    }
  },
};
