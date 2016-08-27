import Ember from 'ember';
import createSpinner from 'ember-spin-button/utils/spinner';

const { observer } = Ember;

export default Ember.Component.extend({
  tagName: 'button',
  type: 'submit',
  inFlight: false,
  color: 'blue',
  buttonStyle: 'expand-right',

  defaultTimout: 10E3,
  startDelay: 100,

  attributeBindings: [
    'disabled',
    'type',
    'color:data-color',
    'buttonStyle:data-style',
  ],
  classNameBindings: ['inFlight:in-flight:ready', ':spin-button'],

  _timer: null,

  click: function (event) {
    event.preventDefault();
    this.set('inFlight', true);

    if (this.attrs && 'function' === typeof this.attrs.action) {
      let actionResult = this.attrs.action();

      if (Ember.isPresent(actionResult) &&
          ('function' === typeof actionResult.finally)) {
        actionResult.finally(() => { this.set('inFlight', false); });
      }
    }else {
      this.sendAction('action');
    }
  },

  inFlightDidChange: observer('inFlight', function () {
    var element = this.get('element');
    if (!element) { return; }

    var inFlight = this.get('inFlight');

    if (inFlight) {
      if (this.get('startDelay') > 4) {
        Ember.run.later(this, this.createSpinner, element, this.get('startDelay'));
      }else {
        this.createSpinner(element);
      }
    }else {
      this.setEnabled();
    }
  }),

  createSpinner(element) {
    if (!this._spinner) {
      this._spinner = createSpinner(element);
      this._spinner.spin(element.querySelector('.spin-button-spinner'));
    }

    if (this._timer) { Ember.run.cancel(this._timer); }

    var timeout = this.get('defaultTimout');
    if (timeout > 4) {
      this._timer = Ember.run.later(this, this.setEnabled, timeout);
    }
  },

  disabled: Ember.computed.readOnly('inFlight'),

  setEnabled() {
    if (this._timer) { Ember.run.cancel(this._timer); }

    if (this._spinner) {
      this._spinner.stop();
      this._spinner = null;
    }

    if (!this.get('isDestroyed')) {
      this.setProperties({
        inFlight: false,
      });
    }
  },
});
