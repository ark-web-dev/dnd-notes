import { defaultSelectors } from '../../const';
import {
  getElementsBySelector,
  setTouchActionNone,
  startObserveNewElements,
} from '../../helpers';
import { IDragAndDropOptions } from '../../types';

export function configure(
  this: any,
  {
    dragElementSelector = defaultSelectors.draggable,
    dragAreaSelector = defaultSelectors.dragArea,
    dropAreaSelector = defaultSelectors.dropAreaOne,
    removeOnDropOutside = false,
    onPointerDownCallback,
    onPointerUpCallback,
    onPointerMoveCallback,
    onPointerMoveOnceCallback,
  }: IDragAndDropOptions
) {
  this.dragElements = getElementsBySelector(dragElementSelector);
  this.dropAreas = getElementsBySelector(dropAreaSelector);
  this.dragAreas = getElementsBySelector(dragAreaSelector);
  this.dragElementSelector = dragElementSelector;
  this.dragAreaSelector = dragAreaSelector;
  this.dropAreaSelector = dropAreaSelector;
  this.removeOnDropOutside = removeOnDropOutside;
  this.onPointerDownCallback = onPointerDownCallback;
  this.onPointerUpCallback = onPointerUpCallback;
  this.onPointerMoveCallback = onPointerMoveCallback;
  this.onPointerMoveOnceCallback = onPointerMoveOnceCallback;

  setTouchActionNone(this.dragElements);
  startObserveNewElements(document.body);
}
