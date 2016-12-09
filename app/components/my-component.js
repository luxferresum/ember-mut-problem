import Ember from 'ember';

export default Ember.Component.extend({
  didUpdateAttrs() {
    console.log('didUpdateAttrs');
  },
  actions: {
    go() {
      this.get('onBla')(new Date());
    }
  }
});

