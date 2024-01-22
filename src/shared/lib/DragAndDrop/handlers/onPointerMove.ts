import { dragAndDrop } from '../config/dragAndDrop';
import { setTopLeftPosition } from '../helpers';

export const onPointerMove = (event: PointerEvent) => {
  setTopLeftPosition(
    dragAndDrop.currentDragElement,
    event.clientY - dragAndDrop.offsetY,
    event.clientX - dragAndDrop.offsetX
  );

  dragAndDrop.onPointerMoveCallback?.(dragAndDrop.getAllKeyElements());
};
