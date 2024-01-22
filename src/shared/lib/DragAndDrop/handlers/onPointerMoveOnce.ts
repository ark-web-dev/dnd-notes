import { dragAndDrop } from '../config/dragAndDrop';

export const onPointerMoveOnce = () => {
  const { currentDragElement } = dragAndDrop;

  if (!currentDragElement || dragAndDrop.isMoved) return;

  document.body.append(currentDragElement);

  currentDragElement.style.position = 'absolute';
  dragAndDrop.isMoved = true;

  dragAndDrop.onPointerMoveOnceCallback?.(dragAndDrop.getAllKeyElements());
};
