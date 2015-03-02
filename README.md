# ember-spin-button

Creates a button with a nice spinner to the side. Design based upon [Ladda](http://lab.hakim.se/ladda/), but implemented entirely as an Ember Component.

![Demo](/screenshots/Ember-Spin-Button-demo.gif?raw=true)

[Interactive Demo](http://ember-spin-button.tomster.io/)

## Installation

```bash
ember install:addon ember-spin-button
```

Then import the stylesheet:

```css
/* app.scss */
@import "spin-button";
```

## Usage

```handlebars
{{#spin-button action="createUser" inFlightBinding="model.inFlight" buttonStyle="expand-left"}}Create User{{/spin-button}}
```

The `inFlight` binding should map tightly to a resource you're loading or saving, and the button will automatically change state when this resource is `inFlight`. Alternatively you could bind this to another piece of logic.

The button will automatically disable itself when you click it, after calling the `action`.

## Configuration

### `startDelay`

A delay before showing the animation, but after disabling the button.

**Default**: `150ms`. _Any value <4ms will disable this feature._

### `defaultTimout`

A timeout after which the button will return to its default, non-in-flight state. Set to a falsy value to disable.

**Default**: `2E3`. _Any falsy value will disable this feature._

### `color`

You can specify one of the predefined colors, or define your own using the `buttonColor` mixin:

```
@include buttonColor( 'red', #FF0000 );
```

Predefined colors:

- `green`
- `purple`
- `mint`
- `red`
- `blue`

### `buttonStyle`

- `expand-right`
- `expand-left`
- `expand-down`
- `expand-up`
- `contract`
- `contract-overlay`
- `zoom-in`
- `zoom-out`
- `slide-left`
- `slide-right`
- `slide-up`
- `slide-down`

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
