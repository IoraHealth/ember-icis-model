import Ember from 'ember';

export default Ember.Mixin.create({
  token: Ember.computed.alias('accessTokenWrapper.token'),
  headers: Ember.computed('token', function() {
    return {
      "AUTHORIZATION": 'Bearer ' + this.get('token')
    };
  })
});
