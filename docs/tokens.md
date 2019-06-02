Design tokens are the atoms of the system as [Salesforce](https://www.lightningdesignsystem.com/design-tokens/) describes them. In Vue Design System they are used instead of hard coded values to ensure a better consistency across any platform.

In order to access them, you have to make `/system/system.utils.scss` available in your project. Vue Design System is supposed to do this automatically, but I haven't been able to get this to work, at least with Gridsome.

The tokens are available through Sass variables. There's also a couple spacing-related mixins mentioned here.

---
