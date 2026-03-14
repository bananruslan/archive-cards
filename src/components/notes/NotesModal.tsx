import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ButtonGroup } from "@/components/ui/button-group";
import { EmojiPicker } from "@/components/ui/emoji-picker";
import { useNotesStore, type Note } from "@/store/notes";

export interface NotesModalProps {
  opened: boolean;
  data: Note | null;
  onChange: (open: boolean) => void;
}

export default function NotesModal({
  opened,
  data,
  onChange,
}: NotesModalProps) {
  const addNote = useNotesStore((state) => state.addNote);
  const updateNote = useNotesStore((state) => state.updateNote);

  const [title, setTitle] = useState(data?.info.title ?? "New note title");
  const [description, setDescription] = useState(
    data?.info.description ?? "New note content",
  );
  const [emoji, setEmoji] = useState(data?.info.emoji ?? "😭");

  const onCreate = () => {
    addNote({
      id: Date.now().toString(),
      info: {
        title,
        description,
        emoji,
        color: "#FF5733",
      },
    });

    onChange(false);
  };

  const onUpdate = () => {
    if (data) {
      updateNote(data?.id, {
        title,
        description,
        emoji,
      });
      onChange(false);
    }
  };

  const toggleModal = (value: boolean) => {
    onChange(value);
  };

  return (
    <Dialog open={opened} onOpenChange={toggleModal}>
      <form>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Add note</DialogTitle>
            <DialogDescription>
              Add a title, info, emoji, and color for your note, then click add.
            </DialogDescription>
          </DialogHeader>

          <FieldGroup>
            <Field>
              <Label htmlFor="title">Title</Label>
              <ButtonGroup>
                <EmojiPicker emoji={emoji} setEmoji={setEmoji} />
                <Input
                  value={title}
                  id="title"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </ButtonGroup>
            </Field>

            <Field>
              <Label htmlFor="description">Info</Label>
              <Textarea
                value={description}
                id="description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </Field>
          </FieldGroup>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
            {data ? (
              <Button type="button" onClick={onUpdate}>
                Update note
              </Button>
            ) : (
              <Button type="submit" onClick={onCreate}>
                Add note
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
