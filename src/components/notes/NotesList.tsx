import { useNotesStore, type Note } from "@/store/notes";
import { NotesItem } from "@/components/notes";
import {
  TransitionList,
  TransitionItem,
} from "@/components/utils/TransitionList";

export interface NotesListProps {
  onOpenNote: (note: Note | null) => void;
}

export default function NotesList({ onOpenNote }: NotesListProps) {
  const notes = useNotesStore((state) => state.notes);
  const deleteNote = useNotesStore((state) => state.deleteNote);

  return (
    <div className="flex flex-col grow gap-2 p-4 overflow-auto">
      <TransitionList>
        {Object.values(notes).map((note: Note) => (
          <TransitionItem key={note.id} id={note.id}>
            <NotesItem
              data={note}
              onDelete={() => deleteNote(note.id)}
              onEdit={() => onOpenNote(note)}
            />
          </TransitionItem>
        ))}
      </TransitionList>
    </div>
  );
}
