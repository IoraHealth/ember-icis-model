/* global localStorage */
import Ember from 'ember';

export default Ember.Service.extend({
  token: function() {
    return localStorage.getItem('access_token');
  }.property().volatile(),

  setToken: function(token) {
    localStorage.setItem('access_token', token);

    return token;
  }
});
