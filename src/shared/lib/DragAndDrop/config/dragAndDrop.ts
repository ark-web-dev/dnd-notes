import { defaultSelectors } from '../const';
import { IDragAndDrop } from '../types';
import { configure, setDragElement, getAllKeyElements } from './configMethods';

export const dragAndDrop: IDragAndDrop = {
  // Данные о перетаскиваемых элементах
  dragElements: [],
  currentDragElement: null,
  offsetY: 0,
  offsetX: 0,
  // Данные о зоне, в которую можно бросить элемент
  dropAreas: [],
  currentDropArea: null,
  // Зоны с элементами для перетаскивания
  dragAreas: [],
  // Возврат элемента на начальное место
  returnToArea: null,
  returnToY: '',
  returnToX: '',
  // Селекторы
  dragElementSelector: defaultSelectors.draggable,
  dragAreaSelector: defaultSelectors.dragArea,
  dropAreaSelector: defaultSelectors.dropAreaOne,
  // Флаги и дополнительные данные
  isMoved: false,
  // Дополнительные колбэки для пользователей
  onPointerDownCallback: null,
  onPointerUpCallback: null,
  onPointerMoveCallback: null,
  onPointerMoveOnceCallback: null,
  // Дополнительные настройки
  removeOnDropOutside: false,
  // Методы
  configure,
  setDragElement,
  getAllKeyElements,
};
