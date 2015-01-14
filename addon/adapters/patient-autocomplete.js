import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: "https://staging.icisapp.com",
  namespace: "api/patients/v3",
  token: Ember.computed.alias('accessTokenWrapper.token'),

  headers: function() {
    return {
      'AUTHORIZATION': 'Bearer ' + this.get('token')
    };
  }.property('token'),

  pathForType: function() {
    return "patients/actions/autocomplete";
  }
});

