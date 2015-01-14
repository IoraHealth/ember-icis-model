import DS from "ember-data";
import Ember from 'ember';

export default DS.RESTAdapter.extend({
  host: "https://staging.icisapp.com",
  namespace: "api/notes/v2",
  token: Ember.computed.alias('accessTokenWrapper.token'),

  headers: function() {
    console.debug(this.get('accessTokenWrapper'));
    return {
      'AUTHORIZATION': 'Bearer ' + this.get('token')
    };
  }.property('token')
});
