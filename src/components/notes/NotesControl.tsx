import { memo } from "react";
import { FilePlusCorner, ListPlus, ListRestart, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNotesStore } from "@/store/notes";
import NotesAddedModal from "./NotesAddedModal";

export default memo(function NotesControl() {
  const addNote = useNotesStore((state) => state.addNote);
  const resetNotes = useNotesStore((state) => state.resetNotes);
  const clear = useNotesStore((state) => state.clear);

  const addNewNote = () => {
    addNote({
      id: Date.now().toString(),
      info: {
        emoji: "🫠",
        title: "Note 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        color: "#FF5733",
      },
    });
  };

  return (
    <div className="flex gap-2 justify-end border-b p-4">
      <Button variant="destructive" onClick={clear}>
        <Trash2 />
        Remove all
      </Button>

      <NotesAddedModal>
        <Button variant="outline">
          <FilePlusCorner />
          Add note
        </Button>
      </NotesAddedModal>

      <Button variant="outline" size="icon" onClick={addNewNote}>
        <ListPlus />
      </Button>

      <Button variant="outline" size="icon" onClick={resetNotes}>
        <ListRestart />
      </Button>
    </div>
  );
});
