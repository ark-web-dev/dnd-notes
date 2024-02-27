import { setTopLeftPosition } from '.';
import { dragAndDrop } from '../config/dragAndDrop';

export const handleValidDrop = (event: PointerEvent) => {
  const { currentDropArea, offsetY, offsetX, currentDragElement } = dragAndDrop;
  const { y: dropAreaOffsetY = 0, x: dropAreaOffsetX = 0 } =
    currentDropArea?.getBoundingClientRect() || {};

  const newPositionY = event.clientY - dropAreaOffsetY - offsetY;
  const newPositionX = event.clientX - dropAreaOffsetX - offsetX;

  setTopLeftPosition(currentDragElement, newPositionY, newPositionX);

  currentDragElement!.style.position = '';
  currentDropArea?.appendChild(currentDragElement!);
};
