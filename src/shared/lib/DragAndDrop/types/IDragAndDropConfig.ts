import {
  HTMLElementArray,
  HTMLElementOrNull,
  IDragElementOptions,
  IDragAndDropKeyElements,
  IDragAndDropOptions,
} from '.';

export type IDragAndDropConfig = {
  dragElements: HTMLElementArray;
  dropAreas: HTMLElementArray;
  currentDropArea: HTMLElementOrNull;
  dragAreas: HTMLElementArray;
  isMoved: boolean;
  setDragElement: ({}: IDragElementOptions) => void;
  getAllKeyElements: () => IDragAndDropKeyElements;
  configure: ({}: IDragAndDropOptions) => void;
};
