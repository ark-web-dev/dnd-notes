import { HTMLElementArray, HTMLElementOrNull } from './types';

export type IDragAndDropKeyElements = {
  dragElements: HTMLElementArray;
  currentDragElement: HTMLElementOrNull;
  dropAreas: HTMLElementArray;
  currentDropArea: HTMLElementOrNull;
  dragAreas: HTMLElementArray;
  returnToArea: HTMLElementOrNull;
};
