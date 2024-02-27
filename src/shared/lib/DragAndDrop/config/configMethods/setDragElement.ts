import { IDragElementOptions } from '../../types';

export function setDragElement(
  this: any,
  {
    currentDragElement,
    offsetY,
    offsetX,
    returnToArea,
    returnToY,
    returnToX,
  }: IDragElementOptions
) {
  this.currentDragElement = currentDragElement;
  this.offsetY = offsetY;
  this.offsetX = offsetX;
  this.returnToArea = returnToArea;
  this.returnToY = returnToY;
  this.returnToX = returnToX;
}
