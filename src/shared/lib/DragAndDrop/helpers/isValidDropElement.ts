import { hasClass, stripLeadingSymbol } from '.';

export const isValidDropElement = (element: HTMLElement, selector: string) => {
  const formatedSelector = stripLeadingSymbol(selector);

  if (hasClass(element, formatedSelector) || element.id === formatedSelector) {
    return true;
  }

  return false;
};
