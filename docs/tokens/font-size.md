# Font Size

Font sizes are based on **rems**. This means that the base size can be changed by adding a `font-size` attribute to the `<html>` tag.

I've set the default to 18 px, because my eyes suck but also I like the sizes that it generates when using a type scale.

The [type scale](https://type-scale.com/) I've decided on is Perfect Fourth, or 1.333. This means each subsequent size increases by 1.333x. If you would like to change that, you will have to manually substitute in new tokens as Sass variables.

_It is recommended to layer another Sass file on top of this._ These are only font sizes, after all, and properly styling typography requires attention to weight, line-height, typeface, and letter-spacing.

```
<font-size />
```
