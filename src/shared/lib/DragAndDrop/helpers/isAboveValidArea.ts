import { dragAndDrop } from '../config/dragAndDrop';
import { isValidDropElement } from './isValidDropElement';

export const isAboveValidArea = (event: PointerEvent) => {
  const { dropAreaSelector, dragAreaSelector } = dragAndDrop;
  const elementsFromPoint = document.elementsFromPoint(
    event.clientX,
    event.clientY
  );

  for (const el of elementsFromPoint) {
    const elHtml = el as HTMLElement;

    if (
      isValidDropElement(elHtml, dropAreaSelector!) ||
      isValidDropElement(elHtml, dragAreaSelector!)
    ) {
      dragAndDrop.currentDropArea = elHtml;
      return true;
    }
  }

  return false;
};
