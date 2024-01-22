import { stripLeadingSymbol } from '.';

export const hasClass = (element: HTMLElement, selector: string): boolean => {
  return element.classList.contains(stripLeadingSymbol(selector));
};
