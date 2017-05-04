# ceri-tooltip

a mobile-friendly tooltip.

Features:
- plain JS - no dependencies
- 28kB unzipped with animations - even smaller when using multiple ceri components
- themeable
- use in your markup - easy to reason about
- aware of the viewport - automatically changes opening direction to be visible
- use css `margin` to position tooltip

### [Demo](https://ceri-comps.github.io/ceri-tooltip)

# Install

```sh
npm install --save-dev ceri-tooltip
```

## Usage
- [general ceri component usage instructions](https://github.com/cerijs/ceri#i-want-to-use-a-component-built-with-ceri)
- in your project
```coffee
window.customElements.define("ceri-tooltip", require("ceri-tooltip"))
```
```html
<!-- as sibling (preferred) -->
<button>hover or touch-hold</button>
<ceri-tooltip>Information</ceri-tooltip>
<!-- as child -->
<button>hover or touch-hold
  <ceri-tooltip>Information</ceri-tooltip>
</button>
```

For examples see [`dev/`](dev/).

#### Props
Name | type | default | description
---:| --- | ---| ---
offset | Number | 0 | offset to the parent
anchor | String | isMobile ? "wnse" : "senw" | direction of opening, viewport dependent. "s" forces to open down. "sn" would try to open down, then up.
delay-touch | Number | 200 | duration to wait after touchstart
delay-hover | Number | 400 | duration to wait after hover
open | Boolean | false | set to open / close
on-body | Boolean | false | will be positioned on body instead of sibling/parent element. [Detailed description](#positioning)

#### Events
Name |  description
---:| ---
toggled(open:Boolean) | emitted before open and after close

#### Positioning
There are two ways of positioning. The default is in-place, the other possibility is on `body`.
- The in-place positioning can be problematic when you have an `overflow:hidden` combined with a `position:absolute|relative|fixed` element in the parent chain and the tooltip is overflowing.
- the `body` positioning can be problematic when the parent is moving relative to `body` or when you depend on inheritance of styles.

#### Themes
- [ceri-materialize](https://github.com/ceri-comps/ceri-materialize)
```html
<button class=btn>hover or touch-hold</button>
<ceri-tooltip class=materialize>Information</ceri-tooltip>
```

#### Custom animation
- read the documentation of the [animate mixin](https://github.com/cerijs/ceri#animate).
- read and understand the default enter and leave animation in [src/tooltip.coffee](src/tooltip.coffee)
- you can provide a custom animation like this:
```coffee
# application wide
CETT = require("ceri-tooltip")
CETT.prototype.enter = (o) -> # your new enter animation
CETT.prototype.leave = (o) -> # your new leave animation
window.customElements.define("ceri-tooltip", CETT)

# single instance
# get a ref to your instance of ceri-tooltip somehow
# then overwrite the animations directly
ceTT.enter = (o) -> # your new enter animation
ceTT.leave = (o) -> # your new leave animation
```

# Development
Clone repository.
```sh
npm install
npm run dev
```
Browse to `http://localhost:8080/`.

## License
Copyright (c) 2016 Paul Pflugradt
Licensed under the MIT license.
