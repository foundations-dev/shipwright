#### To Do

-   [ ] Add explanation for spacing mixins
    -   [ ] inset-space
    -   [ ] inset-squish-space
    -   [ ] stack-space
    -   [ ] inline-space
-   [ ] Write about ex

#### Resources

-   https://ether.thescenery.co/spacing/

---

This design system is built upon the following requirements:

1. Each subsequent spacer size should be meaningfully different than the one preceding it.

2. Spacing should be based on the type.

---

## System

```
<spacing />
```

There are 4 mixins included

## Philosophy

I've spent at least 20 hours researching type and spacing and I've found that the most developed ideas on the topic are encompassed in [this](https://ether.thescenery.co/spacing/) design system by [The Scenery](https://thescenery.co/). The most detailed explanation can be found in this [blog post](https://medium.com/@ethersystem/generating-design-system-spacing-aa69714160bc) they wrote.

### NOT Random

-   limit options
-   pick a base

### Ensuring Meaningful Differences

Countering the "randomness" of spacing in webdesign seems like a common goal amongst web-designers. (It's mentioned [here](https://medium.com/eightshapes-llc/space-in-design-systems-188bcbae0d62) in an article that you should probably read if you haven't yet). _We need to limit our choices of spacing._

However, like the article mentions, a linear scale isn't quite good enough. Let's say we use a linear scale of 5px. it may be easy to decide between 5px and 10px when creating the padding for a paragraph, but what happens when we're deciding how far we should place the main content from our nav bar? 25px? 30? 35?

There's a beautiful solution to this. It's the **Fibonacci Sequence.**

Math might be scary some times but, this isn't one of them. Making a Fibonacci Sequence is easy. You pick two numbers, then add them to get your third. Then, you take the second and third numbers to get the fourth: **0, 1, 1, 2, 3, 5, 8, 13...**

What does this have to do with our spacing system? Well this sequence provides _exactly_ what we are trying to accomplish. The difference between any two numbers is the size of the previous number. Any two sizes will be _obviously_ different, because the difference is as big as the preceding unit.

### Why not a geometric progression?

Well, there's no solid answer here besides the fact that after some experimentation, it doesn't fit properly

Take base-2 for instance

[ image ] 2 4 8 16 32 64 128

Here we assume 16px is our starting unit. 4, 8 and 16 are all solid, but things get less comfortable from there. 32px is just a little too big when using it with body text. If you _do_ use it with body text, using it with large layout blocks becomes a challenge in terms of maintaining nice visual grouping. This leaves you with only 64 and 128px sizes for your layout.

8 16 24 40 64 104

This feels a lot better. 8, 16, and 24 are all you would need for cards, menus, sidebars, content, etc. 40, 64, and 104 feel great for your layout blocks. And as a bonus, they're still all divisible by 8!
