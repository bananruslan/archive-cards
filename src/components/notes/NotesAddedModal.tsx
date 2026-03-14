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
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ButtonGroup } from "@/components/ui/button-group";
import { EmojiPicker } from "@/components/ui/emoji-picker";

import { useNotesStore } from "@/store/notes";

export default function NotesAddedModal({
  children,
}: {
  children: React.ReactNode;
}) {
  const addNote = useNotesStore((state) => state.addNote);

  const [open, setOpen] = useState(false);

  const [title, setTitle] = useState("New note title");
  const [description, setDescription] = useState("New note content");
  const [emoji, setEmoji] = useState("😭");

  const onClickCreate = () => {
    addNote({
      id: Date.now().toString(),
      info: {
        title,
        description,
        emoji,
        color: "#FF5733",
      },
    });

    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <form>
        <DialogTrigger asChild>{children}</DialogTrigger>

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
            <Button type="submit" onClick={onClickCreate}>
              Add note
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
