import clsx from "clsx";
import { motion } from "motion/react";
import { NotesControl, NotesList } from "@/components/notes";

interface NotesListProps {
  className?: string;
}

export default function Notes({ className }: NotesListProps) {
  return (
    <motion.div
      className={clsx(
        className,
        "flex flex-col border border-border overflow-hidden",
      )}
    >
      <NotesControl />
      <NotesList />
    </motion.div>
  );
}
