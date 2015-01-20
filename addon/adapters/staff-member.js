import DS from 'ember-data';
import Ember from 'ember';

export default DS.RESTAdapter.extend({
  host: "CHANGEME",
  namespace: "api/staff/v2",
  token: Ember.computed.alias('accessTokenWrapper.token'),
  
  pathForType: function() {
    return "staff_members";
  },

  headers: function() {
    return {
      "AUTHORIZATION": 'Bearer ' + this.get('token')
    };
  }.property('token')
});

