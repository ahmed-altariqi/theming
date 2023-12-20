# Theming with shadcn/ui & Zustand

### Shadcn/ui

I depend heavily on [shadcn/ui](https://ui.shadcn.com/), so familiarizing yourself with their theming conventions is important.

Here's an example of how [custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) are being used:

```css
:root {
  --primary: 222.2 47.4% 11.2%;
  --foreground: 210 40% 98%;
}
```

And here's how we can overwrite specific custom properties using classes like the following:

```css
.theme-violet {
  --primary: 250.36 90.16% 76.08%;
  --foreground: -108.46 100.43% 94.98%;
}
```

### Zustand

I chose [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction) to seamlessly manage the theme state and make it persist in local storage.

My theme store consist of the following:

```js
{
  theme: {
    className: '[SOME_CLASS_NAME]',
    primaryColor: '[SOME_HSL_VALUE]'
  },
  setThemeClassName: (className) => {
    // Get the primary color from our themes object
    const primaryColor = themes[className].primaryColor;

    // Update our store
    set({ theme: { className, primaryColor}})
  }
}
```
