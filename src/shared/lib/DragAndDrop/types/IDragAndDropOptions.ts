import { IDragAndDropKeyElements } from './IDragAndDropKeyElements';

type CustomCallbackOrNull = (({}: IDragAndDropKeyElements) => void) | null;

export type IDragAndDropOptions = {
  dragAreaSelector?: string;
  dragElementSelector?: string;
  dropAreaSelector?: string;
  removeOnDropOutside?: boolean;
  onPointerDownCallback?: CustomCallbackOrNull;
  onPointerUpCallback?: CustomCallbackOrNull;
  onPointerMoveCallback?: CustomCallbackOrNull;
  onPointerMoveOnceCallback?: CustomCallbackOrNull;
};
