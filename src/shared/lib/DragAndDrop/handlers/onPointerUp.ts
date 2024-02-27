import { onPointerMove, onPointerMoveOnce } from '.';
import { dragAndDrop } from '../config/dragAndDrop';
import {
  isAboveValidArea,
  handleValidDrop,
  handleInvalidDrop,
} from '../helpers';

export const onPointerUp = (event: PointerEvent) => {
  document.removeEventListener('pointermove', onPointerMoveOnce);
  document.removeEventListener('pointermove', onPointerMove);
  document.removeEventListener('pointerup', onPointerUp);

  if (!dragAndDrop.isMoved || !dragAndDrop.currentDragElement) return;

  if (isAboveValidArea(event)) {
    handleValidDrop(event);
  } else {
    handleInvalidDrop();
  }

  dragAndDrop.isMoved = false;
  dragAndDrop.onPointerUpCallback?.(dragAndDrop.getAllKeyElements());
};
