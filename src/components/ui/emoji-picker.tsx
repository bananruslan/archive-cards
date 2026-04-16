import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const EMOJI_LIST = [
  "😭",
  "😄",
  "😢",
  "😂",
  "😍",
  "🤔",
  "😎",
  "🥳",
  "🤓",
  "🤖",
  "👻",
  "👽",
  "👾",
  "💩",
  "😺",
  "😸",
  "😹",
  "😻",
  "😽",
  "🙀",
];

export function EmojiPicker({
  children,
  ...props
}: React.PropsWithChildren<{
  emoji: string;
  setEmoji: (emoji: string) => void;
}>) {
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false);

  const selectEmoji = (emoji: string) => {
    props.setEmoji(emoji);
    setOpenEmojiPicker(false);
  };

  return (
    <Popover open={openEmojiPicker} onOpenChange={setOpenEmojiPicker}>
      <PopoverTrigger asChild>{children}</PopoverTrigger>

      <PopoverContent asChild side="right" className="w-auto gap-0">
        <div className="grid grid-cols-4">
          {EMOJI_LIST.map((tag) => (
            <Button
              key={tag}
              variant="ghost"
              size="icon-lg"
              className="text-2xl"
              onClick={() => selectEmoji(tag)}
            >
              {tag}
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
