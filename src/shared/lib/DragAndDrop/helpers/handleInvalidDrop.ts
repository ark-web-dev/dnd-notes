import { setTopLeftPosition } from '.';
import { dragAndDrop } from '../config/dragAndDrop';

export const handleInvalidDrop = () => {
  const {
    currentDragElement,
    returnToY,
    returnToX,
    returnToArea,
    removeOnDropOutside,
  } = dragAndDrop;

  if (removeOnDropOutside) {
    currentDragElement!.style.transition = 'all 0.3s';
    currentDragElement!.style.transform = 'scale(0)';

    setTimeout(() => {
      currentDragElement?.remove();
    }, 500);
    return;
  }

  currentDragElement!.style.position = '';
  setTopLeftPosition(currentDragElement, returnToY, returnToX);
  returnToArea?.appendChild(currentDragElement!);
};
