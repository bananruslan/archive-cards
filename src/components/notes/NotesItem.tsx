import { memo } from "react";
import { Trash2 } from "lucide-react";
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
  data: Note;
};

export default memo(function NotesItem({ ...props }: NotesItemProps) {
  const deleteNote = useNotesStore((state) => state.deleteNote);

  return (
    <Item key={props.data.id} variant="outline">
      <ItemMedia className="text-2xl">{props.data.info.emoji}</ItemMedia>

      <ItemContent>
        <ItemTitle>{props.data.info.title}</ItemTitle>
        <ItemDescription>{props.data.info.description}</ItemDescription>
      </ItemContent>

      <ItemActions>
        <Button
          size="sm"
          variant="destructive"
          onClick={() => deleteNote(props.data.id)}
        >
          <Trash2 />
          Delete
        </Button>
      </ItemActions>
    </Item>
  );
});
