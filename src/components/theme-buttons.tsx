import {
  type ThemeClassName,
  themes,
  useThemeStore,
} from "@/store/theme-store";

import { Button } from "@/components/ui/button";

export function ThemeButtons() {
  /**
   * Select setThemClassName method from our store.
   */
  const setThemeClassName = useThemeStore(
    (state) => state.setThemeClassName
  );

  function changeTheme({ className }: { className: ThemeClassName }) {
    setThemeClassName(className);
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        {/**
         * Map over our themes object and get the values.
         *
         * @see ~/store/theme-store.ts
         */}
        {Object.values(themes).map(({ className, primaryColor }) => (
          <Button
            key={className}
            onClick={() => changeTheme({ className })}
            type="button"
            variant="outline"
          >
            <span
              style={{
                background: `hsl(${primaryColor})`,
              }}
              className={"h-4 w-4 rounded-md sm:h-5 sm:w-5"}
            />
          </Button>
        ))}
      </div>
    </div>
  );
}
