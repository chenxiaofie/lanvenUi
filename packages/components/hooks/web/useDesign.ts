export function useDesign(scope: string) {
  return {
    prefixCls: `lanvenUi-${scope}`,
    prefixVar: `lanvenUi`,
  };
}
