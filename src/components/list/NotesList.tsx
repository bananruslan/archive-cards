import { useNotesStore, type Note } from "@/store/notes";
import NotesItem from "@/components/list/NotesItem";
import clsx from "clsx";
import { Button } from "@/components/ui/button";
import { ListRestart } from "lucide-react";
// import { motion } from "motion/react";

interface NotesListProps {
  className?: string;
}

export default function NotesList({ className }: NotesListProps) {
  const notes = useNotesStore((state) => state.notes);
  const deleteNote = useNotesStore((state) => state.deleteNote);
  const resetNotes = useNotesStore((state) => state.resetNotes);

  return (
    <div className={clsx(className, "border border-border")}>
      <div className="flex gap-2 justify-end border-b p-4">
        <Button variant="outline" size="icon" onClick={resetNotes}>
          <ListRestart />
        </Button>
      </div>

      <div className="flex flex-col gap-2 p-4">
        {Object.values(notes).map((note: Note) => (
          <NotesItem key={note.id} note={note} onDelete={deleteNote} />
        ))}
      </div>
    </div>
  );
}
