---
title: "Colors"
path: "materials/colors"
---

# 01 - Colors

## Introduction

When colors are provided in css frameworks, it's often in the spirit of a clear user interface (material design, Bulma). When it comes to implementing a full branding focused color palette, these systems often fall short.

Other systems allow you to change the "primary" and "accent" colors somewhere in the configuration, but for something so important, color customization should be clear and accessible.

In NP design system, color system is powered by two files:
* **`_colors.sass`** - A list of 7 accessible colors variables, with many shades for each.
* **`_defaultcolors.sass`** - Where the developer can outline the list of color variables that will appear throughout their website
    
## _colors.sass


I've found that the best way to provide colors in a css Framework is a basic list of variables. Everybody knows how to use them, and it's easy to see their exact values.

Some folks like to use modifiers to increase the utility of the colors they provide. For example, using a sass mixin to darken a color. There's a couple reasons why I don't like method.

1) Depending how it's done, it can obfuscate the actual color value itself. You can no longer figure out what color you're using based on the code alone, so you'd need to dig into the dev tools for something that should be simple. Copy and Paste are a dev's favorite tools and we should think twice before taking away this option.

2) It sits uncomfortably in between "providing defaults" and "allowing for customization." Care should be taken when deciding on the handful of colors you'll be using. If you've chosen well, than you remove the need for tweaking it with 'light' and 'dark' modifiers. Providing these mixins only opens the door for these "one-off" changes, something that NP Design System seeks to avoid.

So I'm no color expert (link to medium article about color curve), and I've been bouncing around trying out different color palettes from the (link to design systems website repo). Atlassian seems to have nailed a professional-but-playful palette with the perfect amount of colors and shades to keep me satisfied when doing any basic prototyping.


I realize that I may not be in the safest of spots in terms of copyright infringement, but I don't plan on making any profit from this system or using their colors in my freelance work. So hopefully that keeps me in clean waters.

# Old Docs

These colors are adapted from [Atlassian's Design System](https://atlassian.design/guidelines/brand/color). It's a super fun color scheme and adheres to [AA standard contrast ratios](https://www.w3.org/TR/WCAG/#contrast-minimum).

An example syntax for each color token is `$color-Y100`. The code values (`Y100` in the example) can be found in the tables below.

Clicking a color will copy the hex code.

#### Feature Colors

```
<feature-colors />
```

#### Neutral Colors

```
<neutral-colors />
```
