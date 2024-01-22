import { onPointerDown } from '../handlers';
import { dragAndDrop } from '../config/dragAndDrop';
import { IDragAndDropOptions } from '../types/IDragAndDropOptions';

export const initDragAndDrop = (options: IDragAndDropOptions) => {
  dragAndDrop.configure(options);

  document.addEventListener('pointerdown', onPointerDown);
};
