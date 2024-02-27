export const setTouchActionNone = (elements: HTMLElement[]) => {
  const stack = [...elements];

  while (stack.length) {
    const element = stack.pop()!;

    element.style.touchAction = 'none';

    for (const child of element.children) {
      stack.push(child as HTMLElement);
    }
  }
};
