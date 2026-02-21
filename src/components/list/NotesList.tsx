import NotesItem from "@/components/list/NitesItem";
import type { Note } from "@/store/notes";

type NotesListProps = {
  noteIds: string[];
};

export default function NotesList({ ...props }: NotesListProps) {
  return (
    <>
      {props.noteIds.map((noteId: Note["id"]) => (
        <NotesItem key={noteId} noteId={noteId} />
      ))}
    </>
  );
}
