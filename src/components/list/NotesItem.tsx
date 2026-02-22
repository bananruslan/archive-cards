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
import type { Note, NotesStore } from "@/store/notes";
import { Trash2 } from "lucide-react";

type NotesItemProps = {
  note: Note;
  onDelete: NotesStore["deleteNote"];
};

export default memo(function NotesItem({ ...props }: NotesItemProps) {
  return (
    <Item key={props.note.id} variant="outline">
      <ItemMedia className="text-2xl">{props.note.info.emoji}</ItemMedia>

      <ItemContent>
        <ItemTitle>{props.note.info.title}</ItemTitle>
        <ItemDescription>{props.note.info.description}</ItemDescription>
      </ItemContent>

      <ItemActions>
        <Button
          size="sm"
          variant="destructive"
          onClick={() => props.onDelete(props.note.id)}
        >
          <Trash2 />
          Delete
        </Button>
      </ItemActions>
    </Item>
  );
});
