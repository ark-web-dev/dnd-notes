import { onPointerMoveOnce, onPointerMove, onPointerUp } from '.';
import { dragAndDrop } from '../config/dragAndDrop';
import { hasClass } from '../helpers';

export const onPointerDown = (event: PointerEvent) => {
  const { dragElementSelector } = dragAndDrop;
  const target = event.target as HTMLElement;
  let dragElement: HTMLElement | null;

  if (hasClass(target, dragElementSelector!)) {
    dragElement = target;
  } else {
    dragElement = target.closest(dragElementSelector!);
  }

  if (!dragElement) return;

  dragAndDrop.setDragElement({
    currentDragElement: dragElement,
    offsetY: event.offsetY,
    offsetX: event.offsetX,
    returnToArea: dragElement.parentElement,
    returnToY: dragElement.style.top,
    returnToX: dragElement.style.left,
  });

  dragAndDrop.onPointerDownCallback?.(dragAndDrop.getAllKeyElements());

  document.addEventListener('pointermove', onPointerMoveOnce, { once: true });
  document.addEventListener('pointermove', onPointerMove);
  document.addEventListener('pointerup', onPointerUp);
};
