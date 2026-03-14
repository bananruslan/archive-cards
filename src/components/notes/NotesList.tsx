import { useNotesStore, type Note } from "@/store/notes";
import { NotesItem } from "@/components/notes";
import {
  TransitionList,
  TransitionItem,
} from "@/components/utils/TransitionList";

export default function NotesList() {
  const notes = useNotesStore((state) => state.notes);
  console.log(Object.values(notes));

  return (
    <div className="flex flex-col grow gap-2 p-4 overflow-auto">
      <TransitionList>
        {Object.values(notes).map((note: Note) => (
          <TransitionItem key={note.id} id={note.id}>
            <NotesItem data={note} />
          </TransitionItem>
        ))}
      </TransitionList>
    </div>
  );
}
