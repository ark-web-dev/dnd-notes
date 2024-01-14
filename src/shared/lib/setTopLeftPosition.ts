export const setTopLeftPosition = (
  element: HTMLElement,
  top: number,
  left: number
) => {
  element.style.top = top + 'px';
  element.style.left = left + 'px';
};
