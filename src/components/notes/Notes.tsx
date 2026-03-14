import clsx from "clsx";
import { NotesModal, NotesControl, NotesList } from "@/components/notes";
import { useState } from "react";
import type { Note } from "@/store/notes";

export interface NotesProps {
  className?: string;
}

export default function Notes({ className }: NotesProps) {
  const [displayModal, setDisplayModal] = useState(false);
  const [editingNote, setEditingNote] = useState<Note | null>(null);

  const openModal = (note: Note | null) => {
    setEditingNote(note);
    setDisplayModal(true);
  };

  const onChangeModal = (open: boolean) => {
    if (!open) setEditingNote(null);

    setDisplayModal(open);
  };

  return (
    <div
      className={clsx(
        className,
        "flex flex-col border border-border overflow-hidden",
      )}
    >
      <NotesControl onAddNote={() => openModal(null)} />
      <NotesList onOpenNote={openModal} />

      {displayModal && (
        <NotesModal
          data={editingNote}
          opened={displayModal}
          onChange={onChangeModal}
        />
      )}
    </div>
  );
}
