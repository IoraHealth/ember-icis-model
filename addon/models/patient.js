import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  staffAppUrl:"https://staging.icisapp.com",
  first_name: DS.attr('string'),
  last_name: DS.attr('string'),
  practice: DS.belongsTo('practice'),

  fullName: Ember.computed('first_name', 'last_name', function() {
    return [this.get('first_name'), this.get('last_name')].compact().join(' ');
  }),

  facesheetUri: Ember.computed('id', function() {
    return this.staffAppUrl + "/classic/#patients/" + this.get('id');
  })
});
