import { create } from "zustand";
import { persist } from "zustand/middleware";

// Omit types when using JavaScript.

type ThemeName =
  | "blue"
  | "violet"
  | "coral"
  | "green"
  | "tellonym"
  | "tertiary";

export type ThemeClassName = `theme-${ThemeName}`;

export type Theme = {
  className: ThemeClassName;
  primaryColor: string;
};

export const themes: Record<ThemeClassName, Theme> = {
  "theme-blue": {
    className: "theme-blue",
    primaryColor: "226 100% 80.43%",
  },
  "theme-violet": {
    className: "theme-violet",
    primaryColor: "250.36 90.16% 76.08%",
  },
  "theme-coral": {
    className: "theme-coral",
    primaryColor: "0 100% 77.05%",
  },
  "theme-green": {
    className: "theme-green",
    primaryColor: "123 100% 76.08%",
  },
  "theme-tellonym": {
    className: "theme-tellonym",
    primaryColor: "333.82 81% 50%",
  },
  "theme-tertiary": {
    className: "theme-tertiary",
    primaryColor: "280 100% 85%",
  },
};

type ThemeState = {
  theme: Theme;
};

type ThemeAction = {
  setThemeClassName: (className: ThemeClassName) => void;
};

export const useThemeStore = create<ThemeState & ThemeAction>()(
  persist(
    (set, get) => ({
      theme: {
        /**
         * Here I use the nullish coalescing operator to set default values for both className and primaryColor.
         *
         * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing
         */
        className: get()?.theme.className ?? "theme-violet",
        primaryColor:
          get()?.theme.primaryColor ?? "250.36 90.16% 76.08%",
      },

      setThemeClassName: (className) => {
        // Get the primary color from the themes object
        const primaryColor = themes[className].primaryColor;

        // Update our theme store
        set({ theme: { className, primaryColor } });
      },
    }),
    {
      // Local storage name
      name: "__themes-demo__",

      // Only store `theme` in local storage.
      partialize: (state) => ({
        theme: state.theme,
      }),
    }
  )
);
