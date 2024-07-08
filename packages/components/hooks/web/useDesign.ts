export function useDesign(scope: string) {
  return {
    prefixCls: `lanven-ui-${scope}`,
    prefixVar: `lanven-ui`,
  };
}
