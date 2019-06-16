# Directory Structure

This project's structure focuses on making the design components as easy to find as possible.

::: vue
src
├── 00 - Utils
│   ├── _index.sass
│   ├── _normalize.scss
│   └── _utils.sass
│
├── 01 - Color
│   ├── _colors.sass
│   ├── _defaultcolors.sass
│   └── _index.sass
│
├── 02 - Typography
│   ├── _fonts.sass
│   ├── _index.sass
│   └── _text-sizes.sass
│   └── _typography.sass
│
├── 03 - Spacing
│   ├── _helpers.sass
│   ├── _index.sass
│   └── _space-sizes.sass
│
├── 04 - Layout
│   ├── _index.sass
│   ├── _layout.sass
│   └── _media.sass
│
├── index.html
└── np-design-system.sass
:::

## np-design-system.sass

This file is the starting point for the entire system. It's composed of 3 sections.

<collapse-text hidden title="np-design-system.sass">

<<< @/src/np-design-system.sass

</collapse-text>

### 1) Import Modules

Here we import each folder of the design system. By importing the folder name, we take advantage of Sass's ability to automatically compile the `_index` file of each folder.

The only thing contained in these `_index` files are import statements to the files in each respective folder.

For example, in `src/00 - Utils/_index.sass`

<<< @/src/00 - Utils/_index.sass

### 2) Tests

This section currently doesn't have much. The purpose is to make sure all the variables are properly imported and working correctly. When I decide how I will integrate testing into this system, this section will likely change.

### 3) Style Guide Styles

This section includes the styles that are specific to the Style Guide which lives at `src/index.html`.

Notice this section is much shorter than you would expect. That's important because it allows developers to see what our global abstractions end up looking like on a standard website. It's a bad sign if this starts to get filled up with one-off css tweaks. The more lines of css you need at a single-page level, the less globally-applicable your style guide is.

When it comes down to it, this is what abstraction-first means. If you don't agree with this philosophy, [Tailwind](https://tailwindcss.com), a utility-first framework, might be the right solution for you.



