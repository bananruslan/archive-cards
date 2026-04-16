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
import { type Note } from "@/store/notes";

export interface NotesItemProps {
  data: Note;
  onDelete: () => void;
  onEdit: () => void;
}

export default function NotesItem({ ...props }: NotesItemProps) {
  const onDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    props.onDelete();
  };

  const onEdit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    props.onEdit();
  };

  return (
    <Item
      key={props.data.id}
      variant="outline"
      style={{ borderLeftColor: props.data.info.color }}
      className="border-l-8"
    >
      <ItemMedia className="text-2xl">{props.data.info.emoji}</ItemMedia>

      <ItemContent key={props.data.id}>
        <ItemTitle>{props.data.info.title}</ItemTitle>
        <ItemDescription>{props.data.info.description}</ItemDescription>
      </ItemContent>

      <ItemActions>
        <Button size="sm" variant="outline" onClick={onEdit}>
          <Trash2 />
          Edit
        </Button>
        <Button size="sm" variant="destructive" onClick={onDelete}>
          <Trash2 />
          Delete
        </Button>
      </ItemActions>
    </Item>
  );
}
