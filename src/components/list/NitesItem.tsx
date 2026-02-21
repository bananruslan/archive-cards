import { memo } from "react";
import { Button } from "@/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { useNotesStore, type Note } from "@/store/notes";

type NotesItemProps = {
  noteId: Note["id"];
};

export default memo(function NotesItem({ ...props }: NotesItemProps) {
  const note = useNotesStore((state) => state.notes[props.noteId]);
  const deleteNote = useNotesStore((state) => state.deleteNote);

  return (
    <>
      <Item key={note.id} variant="outline">
        <ItemMedia className="text-2xl">{note.info.emoji}</ItemMedia>

        <ItemContent>
          <ItemTitle>{note.info.title}</ItemTitle>
          <ItemDescription>{note.info.description}</ItemDescription>
        </ItemContent>

        <ItemActions>
          <Button
            size="sm"
            variant="outline"
            onClick={() => deleteNote(note.id)}
          >
            Delete
          </Button>
        </ItemActions>
      </Item>
    </>
  );
});
