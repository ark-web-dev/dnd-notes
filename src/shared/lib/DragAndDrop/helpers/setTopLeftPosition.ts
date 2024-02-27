export const setTopLeftPosition = (
  element: HTMLElement | null,
  top: number | string,
  left: number | string
) => {
  if (!element) return;

  element.style.top = typeof top === 'string' ? top : top + 'px';
  element.style.left = typeof left === 'string' ? left : left + 'px';
};
