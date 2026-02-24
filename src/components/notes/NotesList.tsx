import { AnimatePresence, motion } from "motion/react";
import { useNotesStore, type Note } from "@/store/notes";
import { NotesItem } from "@/components/notes";

export default function NotesList() {
  const notes = useNotesStore((state) => state.notes);

  return (
    <div className="flex flex-col grow gap-2 p-4 overflow-auto">
      <AnimatePresence>
        {Object.values(notes).map((note: Note) => (
          <motion.div
            key={note.id}
            layoutId={`list-item-${note.id}`}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ type: "tween", duration: 0.1 }}
          >
            <NotesItem key={note.id} note={note} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
