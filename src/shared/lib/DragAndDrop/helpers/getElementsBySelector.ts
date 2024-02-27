export const getElementsBySelector = (selector: string): HTMLElement[] => {
  const elements = Array.from(document.querySelectorAll(selector)) as
    | HTMLElement[]
    | [];

  if (!elements.length) {
    throw new Error(
      `DragAndDrop: Required elements not found by selector: "${selector}". Please make sure you added the correct selector name.`
    );
  }

  return elements;
};
