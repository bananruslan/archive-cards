import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { keyBy } from "@/lib/utils";
import { MOCK_NOTES } from "@/mocks/notes";

export interface Note {
  id: string;
  info: {
    emoji: string;
    title: string;
    description: string;
    color: string;
  };
  // TODO: Add meta information
  meta?: {
    parentId: string | null;
    children: string[];
  };
}

export interface NotesStore {
  notes: Record<Note["id"], Note>;
  noteIds: Array<Note["id"]>;
  addNote: (note: Note) => void;
  deleteNote: (noteId: Note["id"]) => void;
  updateNote: (noteId: Note["id"], patch: Partial<Note["info"]>) => void;
  resetNotes: () => void;
  clear: () => void;
}

// TODO: Вынести в хук
export const useNotesStore = create<NotesStore>()(
  immer((set) => ({
    notes: keyBy<Note>(MOCK_NOTES, "id"),
    noteIds: MOCK_NOTES.map(({ id }) => id),

    addNote: (note) =>
      set((state) => {
        state.notes[note.id] = note;
        state.noteIds = state.noteIds.map((id) => id);
      }),

    deleteNote: (noteId) =>
      set((state) => {
        delete state.notes[noteId];
        state.noteIds.push(noteId);
      }),

    updateNote: (id, patch) =>
      set((state) => {
        console.log("patch", patch);
        Object.assign(state.notes[id].info, patch);
      }),

    resetNotes: () =>
      set((state) => {
        state.notes = keyBy<Note>(MOCK_NOTES, "id");
        state.noteIds = MOCK_NOTES.map(({ id }) => id);
      }),

    clear: () =>
      set((state) => {
        state.notes = {};
        state.noteIds = [];
      }),
  })),
);
