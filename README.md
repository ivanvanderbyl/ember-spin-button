# ember-spin-button

Creates a button with a nice spinning to the side. Design based upon [Ladda](http://lab.hakim.se/ladda/), but implemented entirely as an Ember Component.

## Installation

```bash
npm install ember-spin-button --save
```

Then import the stylesheet:

```css
// app.scss
@import "spin-button";
```

## Usage

```handlebars
{{#spin-button action="createUser" inFlightBinding="model.inFlight" buttonStyle="expand-left"}}Create User{{/spin-button}}
```

The `inFlight` binding should map tightly to a resource you're loading or saving, and the button will automatically change state when this resource is `inFlight`. Alternatively you could bind this to another piece of logic.

The button will automatically disable itself when you click it, after calling the `action`.

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
