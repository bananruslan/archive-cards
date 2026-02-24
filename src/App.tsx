import { ThemeProvider, ThemeToggle } from "@/components/theme";
import { Notes } from "./components/notes";

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <ThemeToggle />
      </header>

      <Notes className="m-4" />
    </ThemeProvider>
  );
}

export default App;
