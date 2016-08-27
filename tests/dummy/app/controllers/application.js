import Ember from 'ember';
const { String: { w } } = Ember;
export default Ember.Controller.extend({
  inFlight: false,

  buttonStyles: w('expand-left expand-right expand-up expand-down contract contract-overlay zoom-in zoom-out slide-left slide-right slide-up slide-down'),
  buttonColors: w('green red blue mint purple'),
  timeout: 2E3,

  actions: {
    createWithPromise: function () {
      return new Ember.RSVP.Promise((resolve) => {
        setTimeout(resolve, this.get('timeout'));
      });
    },

    createWithoutPromise() {
    },
  },
});
