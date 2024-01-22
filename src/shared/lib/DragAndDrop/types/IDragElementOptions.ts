import { HTMLElementOrNull } from './types';

export type IDragElementOptions = {
  currentDragElement: HTMLElementOrNull;
  offsetY: number;
  offsetX: number;
  returnToArea: HTMLElementOrNull;
  returnToY: string;
  returnToX: string;
};
