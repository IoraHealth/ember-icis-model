/* global localStorage */
import Ember from 'ember';

export default Ember.Service.extend({
  token: Ember.computed(function() {
    return localStorage.getItem('access_token');
  }).volatile(),

  setToken: function(token) {
    localStorage.setItem('access_token', token);

    return token;
  }
});
