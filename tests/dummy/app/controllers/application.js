import Ember from 'ember';

export default Ember.Controller.extend({
  inFlight: false,

  buttonStyles: "expand-left expand-right expand-up expand-down contract contract-overlay zoom-in zoom-out slide-left slide-right slide-up slide-down".w(),
  buttonColors: "green red blue mint purple".w(),
  timeout: 2E3,

  actions: {
    createUser: function() {
      console.log('Button Clicked');
    }
  }
});
