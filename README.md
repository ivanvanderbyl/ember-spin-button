# ember-spin-button

Creates a button with a nice spinner to the side. Design based upon [Ladda](http://lab.hakim.se/ladda/), but implemented entirely as an Ember Component.

![Demo](/screenshots/Ember-Spin-Button-demo.gif?raw=true)

## Installation

```bash
ember install ember-spin-button
```

## Usage

```handlebars
{{#spin-button 
    action=(action "createUser")
    buttonStyle="expand-right"}}Create User{{/spin-button}}
```

You can manually bind something to indicate the busy state to `inFlight`, or simply return a promise from your action handler (Ember 1.13+) and the button will indicate a busy state while the promise is resolving.

The button will automatically disable itself when you click it, after calling the `action`.

### Example Closure Action returning a promise:

**Requires Ember 1.13**

In Ember 1.13+, action handlers can have return values. If you return a promise in your action handler, `ember-spin-button` will automatically use the state of the promise to indicate progress.

```js
// some-controller.js
import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveRecord: function() {
      // Save returns a Promise from Ember Data which resolves when the model is saved.
      return this.get('model').save();
    },
  }
});
```

```handlebars
<!-- my-template.hbs -->
{{#spin-button action=(action "saveRecord")}}Save Changes{{/spin-button}}
```

## Configuration

### `startDelay`

A delay before showing the animation, but after disabling the button.

**Default**: `150ms`. _Any value <4ms will disable this feature._

### `inFlight` (deprecated)

Binds the busy state of the button.

**Default**: `false`.

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
