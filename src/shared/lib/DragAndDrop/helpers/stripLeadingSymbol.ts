export const stripLeadingSymbol = (selector: string): string => {
  return selector.startsWith('.') || selector.startsWith('#')
    ? selector.slice(1)
    : selector;
};
