import Ember from 'ember';

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
  inFlight: false,
  color: 'blue',
  buttonStyle: 'expand-right',

  defaultTimout: 2E3,
  startDelay: 150,

  attributeBindings: [
    'disabled',
    'color:data-color',
    'buttonStyle:data-style'],
  classNameBindings: ['inFlight:in-flight:ready', ':spin-button'],

  _timer: null,

  click: function() {
    this.set('inFlight', !this.get('inFlight'));
  },

  inFlightDidChange: function() {
    var element = this.get('element');
    if (!element) { return; }

    var inFlight = this.get('inFlight');

    if (inFlight) {
      this.setDisabled();

      if (this.get('startDelay') > 4) {
        Ember.run.later(this.createSpinner.bind(this, element), this.get('startDelay'));
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

    clearTimeout(this._timer);
    this._timer = setTimeout(function() {
      this.setEnabled();
    }.bind(this), this.get('defaultTimout'));
  },

  setDisabled: function(){
    this.set('disabled', true);
  },

  setEnabled: function(){
    clearTimeout(this._timer);

    if (this._spinner) {
      this._spinner.stop();
      this._spinner = null;
    }

    this.setProperties({
      disabled: false,
      inFlight: false,
    });
  },
});
