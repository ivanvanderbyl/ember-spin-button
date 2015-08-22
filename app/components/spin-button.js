import Ember from 'ember';
/* global Spinner */

function createSpinner( button ) {
  var height = button.offsetHeight,
    spinnerColor;

  if( height === 0 ) {
    // We may have an element that is not visible so
    // we attempt to get the height in a different way
    height = parseFloat( window.getComputedStyle( button ).height );
  }

  // If the button is tall we can afford some padding
  if( height > 32 ) {
    height *= 0.8;
  }

  // Prefer an explicit height if one is defined
  if( button.hasAttribute( 'data-spinner-size' ) ) {
    height = parseInt( button.getAttribute( 'data-spinner-size' ), 10 );
  }

  // Allow buttons to specify the color of the spinner element
  if( button.hasAttribute( 'data-spinner-color' ) ) {
    spinnerColor = button.getAttribute( 'data-spinner-color' );
  }

  var lines = 12,
    radius = height * 0.2,
    length = radius * 0.6,
    width = radius < 7 ? 2 : 3;

  return new Spinner( {
    color: spinnerColor || '#fff',
    lines: lines,
    radius: radius,
    length: length,
    width: width,
    zIndex: 'auto',
    top: 'auto',
    left: 'auto',
    className: ''
  } );

}

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
    'buttonStyle:data-style'],
  classNameBindings: ['inFlight:in-flight:ready', ':spin-button'],

  _timer: null,

  click: function() {
    this.set('inFlight', true);

    if (this.attrs && 'function' === typeof this.attrs.action) {
      let actionResult = this.attrs.action();

      if (Ember.isPresent(actionResult) &&
          ('function' === typeof actionResult.finally)) {
        actionResult.finally(() => { this.set('inFlight', false); });
      }
    }else{
      this.sendAction('action');
    }
  },

  inFlightDidChange: function() {
    var element = this.get('element');
    if (!element) { return; }

    var inFlight = this.get('inFlight');

    if (inFlight) {
      this.setDisabled();

      if (this.get('startDelay') > 4) {
        Ember.run.later(this, this.createSpinner, element, this.get('startDelay'));
      }else{
        this.createSpinner(element);
      }
    }else{
      this.setEnabled();
    }
  }.observes('inFlight'),

  createSpinner: function(element) {
    if(!this._spinner) {
      this._spinner = createSpinner( element );
      this._spinner.spin(element.querySelector('.spin-button-spinner'));
    }

    if(this._timer) { Ember.run.cancel(this._timer); }
    var timeout = this.get('defaultTimout');
    if (timeout > 4) {
      this._timer = Ember.run.later(this, this.setEnabled, timeout);
    }
  },

  setDisabled: function(){
    this.set('disabled', true);
  },

  setEnabled: function(){
    if(this._timer) { Ember.run.cancel(this._timer); }
    if (this._spinner) {
      this._spinner.stop();
      this._spinner = null;
    }

    if (!this.get('isDestroyed')) {
      this.setProperties({
        disabled: false,
        inFlight: false,
      });
    }
  },
});
