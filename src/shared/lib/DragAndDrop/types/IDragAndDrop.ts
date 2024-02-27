import {
  IDragAndDropConfig,
  IDragAndDropOptions,
  IDragElementOptions,
} from '.';

export type IDragAndDrop = IDragAndDropConfig &
  IDragAndDropOptions &
  IDragElementOptions;
