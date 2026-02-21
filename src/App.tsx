import { ThemeProvider, ThemeToggle } from "@/components/theme";
import NotesList from "@/components/list/NotesList";
import { useNotesStore } from "./store/notes";

export function App() {
  const noteIds = useNotesStore((state) => state.noteIds);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <ThemeToggle />
      </header>

      <NotesList noteIds={noteIds} />
    </ThemeProvider>
  );
}

export default App;
