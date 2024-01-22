import { hasClass, setTouchActionNone } from '.';
import { dragAndDrop } from '../config/dragAndDrop';

export const startObserveNewElements = (domNode: HTMLElement) => {
  const { currentDragElement, dragElementSelector, dragElements } = dragAndDrop;

  const observer = new MutationObserver((mutations) => {
    mutations.forEach(function (mutation) {
      Array.from(mutation.addedNodes).forEach((element) => {
        if (
          element instanceof HTMLElement &&
          element !== currentDragElement &&
          hasClass(element, dragElementSelector!)
        ) {
          setTouchActionNone([element]);
          dragElements.push(element);
        }
      });
    });
  });

  observer.observe(domNode, {
    childList: true,
    subtree: true,
  });
};
