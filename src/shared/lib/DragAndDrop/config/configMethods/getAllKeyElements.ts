import { IDragAndDropKeyElements } from '../../types';

export function getAllKeyElements(this: any): IDragAndDropKeyElements {
  return {
    currentDragElement: this.currentDragElement,
    dragElements: this.dragElements,
    dropAreas: this.dropAreas,
    currentDropArea: this.currentDropArea,
    dragAreas: this.dragAreas,
    returnToArea: this.returnToArea,
  };
}
