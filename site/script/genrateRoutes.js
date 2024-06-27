import { globby } from 'globby';
import fs from 'fs';

(async () => {
  const paths = await globby('../packages/components/src/*/*.ts');
  const componentsCatalogue = {};
  const names = [];
  let output = [];

  paths.forEach((path) => {
    const Catalogue = path.split('/components/src/')[1].split('-')[0];
    const fileName = path.split('/components/src/')[1].split('-')[1]?.split('/')[0];
    componentsCatalogue[Catalogue] = componentsCatalogue[Catalogue]
      ? componentsCatalogue[Catalogue] + `/${fileName}`
      : fileName;
    names.push(fileName);
  });
  Object.keys(componentsCatalogue).map((component) => {
    const componentPath = `./docs/${component}`;
    if (!fs.existsSync(componentPath)) {
      fs.mkdirSync(componentPath, { recursive: true });
    }
    componentsCatalogue[component]?.split('/').map((fileName) => {
      fs.writeFileSync(
        `./docs/${component}/${fileName}.md`,
        `<!--@include: ../../../packages/components/src/${component}-${fileName}/demo/index.md-->`,
      );
    });

    output.push({
      text: component,
      items: componentsCatalogue[component]?.split('/').map((item) => {
        return {
          text: `${component}-${item}`,
          link: `/${component}/${item}.md`,
        };
      }),
    });
  });

  fs.writeFileSync(
    './components/index.ts',
    `const sideBar=${JSON.stringify(output)}
  export default sideBar;`,
  );
})();
