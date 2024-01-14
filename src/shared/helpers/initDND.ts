import { Note } from '@/components/Note/Note';
import { setTopLeftPosition } from '../lib';

export const initDND = () => {
  const mainContent = document.getElementById(
    'main-content'
  ) as HTMLElement | null;
  const notes = document.getElementById('notes') as HTMLElement | null;
  const note = document.querySelector('.targetNote') as HTMLElement | null;
  const field1 = document.getElementById('field1') as HTMLElement | null;
  const field2 = document.getElementById('field2') as HTMLElement | null;

  if (!mainContent || !field1 || !field2) {
    throw new Error('Error: Required element not found on page');
  }

  let isTargetMoved = false;

  const handlerPointerDown = (event: any) => {
    const currentNote = event.currentTarget;
    const currentNoteOffsetY = event.offsetY;
    const currentNoteOffsetX = event.offsetX;

    const handlerPointerMove = (event: MouseEvent) => {
      if (!isTargetMoved) {
        mainContent?.append(currentNote);

        if (!notes?.children.length) {
          const newNote = Note();
          notes?.append(newNote);
          newNote?.addEventListener('pointerdown', handlerPointerDown);
        }

        currentNote.style.position = 'absolute';
        isTargetMoved = true;
      }

      setTopLeftPosition(
        currentNote,
        event.clientY - currentNoteOffsetY,
        event.clientX - currentNoteOffsetX
      );
    };

    const handlerPointerUp = (event: MouseEvent) => {
      document.removeEventListener('pointermove', handlerPointerMove);
      document.removeEventListener('pointerup', handlerPointerUp);

      if (!isTargetMoved) return;

      isTargetMoved = false;

      const elementsFromPoint = document.elementsFromPoint(
        event.clientX,
        event.clientY
      );

      if (elementsFromPoint.find((el) => el.id === 'field1')) {
        field1?.appendChild(currentNote);
        currentNote.style.position = 'relative';

        setTopLeftPosition(currentNote, 0, 0);
      } else if (elementsFromPoint.find((el) => el.id === 'field2')) {
        const fieldPositionY = field2?.getBoundingClientRect().y;
        const fieldPositionX = field2?.getBoundingClientRect().x;
        const newPositionY =
          event.clientY - fieldPositionY - currentNoteOffsetY;
        const newPositionX =
          event.clientX - fieldPositionX - currentNoteOffsetX;

        setTopLeftPosition(currentNote, newPositionY, newPositionX);

        field2?.appendChild(currentNote);
      } else {
        currentNote.style.position = 'absolute';

        setTopLeftPosition(currentNote, 0, 0);

        notes?.appendChild(currentNote);
      }
    };

    document.addEventListener('pointermove', handlerPointerMove);
    document.addEventListener('pointerup', handlerPointerUp);
  };

  note?.addEventListener('pointerdown', handlerPointerDown);
};
