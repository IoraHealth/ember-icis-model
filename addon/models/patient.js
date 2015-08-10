import DS from 'ember-data';

export default DS.Model.extend({
  staffAppUrl:"https://staging.icisapp.com",
  first_name: DS.attr('string'),
  last_name: DS.attr('string'),
  practice: DS.belongsTo('practice'),

  fullName: (function() {
    return [this.get('first_name'), this.get('last_name')].compact().join(' ');
  }).property('first_name', 'last_name'),

  facesheetUri: (function() {
    return this.staffAppUrl + "/classic/#patients/" + this.get('id');
  }).property('id')
});
