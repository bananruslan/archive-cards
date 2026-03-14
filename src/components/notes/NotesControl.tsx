import { memo } from "react";
import { FilePlusCorner, ListRestart, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNotesStore } from "@/store/notes";

export interface NotesControlProps {
  onAddNote: () => void;
}

export default memo(function NotesControl({ onAddNote }: { onAddNote: () => void }) {
  const resetNotes = useNotesStore((state) => state.resetNotes);
  const clear = useNotesStore((state) => state.clear);

  return (
    <div className="flex gap-2 justify-end border-b p-4">
      <Button variant="destructive" onClick={clear}>
        <Trash2 />
        Remove all
      </Button>

      <Button onClick={onAddNote}>
        <FilePlusCorner />
        Add note
      </Button>

      <Button variant="outline" onClick={resetNotes}>
        <ListRestart />
        Reset
      </Button>
    </div>
  );
});
