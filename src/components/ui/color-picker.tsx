import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export const COLORS: Array<string> = [
  "#fca5a5",
  "#ef4444",
  "#b91c1c",
  "#991b1b",
  "#93c5fd",
  "#3b82f6",
  "#1d4ed8",
  "#1e40af",
  "#86efac",
  "#22c55e",
  "#15803d",
  "#166534",
  "#fde047",
  "#eab308",
  "#a16207",
  "#854d0e",
  "#d6d3d1",
  "#78716c",
  "#44403c",
  "#292524",
  "#a5b4fc",
  "#6366f1",
  "#4338ca",
  "#3730a3",
] as const;

export function ColorPicker({
  children,
  ...props
}: React.PropsWithChildren<{
  color: string;
  setColor: (color: string) => void;
}>) {
  const [openColorPicker, setOpenColorPicker] = useState(false);

  const selectColor = (color: string) => {
    props.setColor(color);
    setOpenColorPicker(false);
  };

  return (
    <Popover open={openColorPicker} onOpenChange={setOpenColorPicker}>
      <PopoverTrigger asChild>{children}</PopoverTrigger>

      <PopoverContent asChild side="right" className="w-auto gap-2">
        <div className="grid grid-cols-4">
          {COLORS.map((color) => (
            <Button
              key={color}
              variant="ghost"
              size="icon"
              className="w-6 h-6 rounded-full"
              style={{ backgroundColor: color }}
              onClick={() => selectColor(color)}
            />
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
