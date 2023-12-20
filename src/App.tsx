import { useThemeStore } from "@/store/theme-store";

import { cn } from "./lib/utils";

import { Button } from "@/components/ui/button";
import { ThemeButtons } from "@/components/theme-buttons";

export default function App() {
  /**
   * Select className from our store.
   */
  const { className } = useThemeStore((state) => state.theme);

  return (
    <div
      className={cn(
        "p-4 flex flex-col items-center gap-8",
        className
      )}
    >
      <ThemeButtons />
      <Button>Hi!</Button>
    </div>
  );
}
