import DS from 'ember-data';
import Ember from 'ember';
import moment from 'moment';

export default DS.Model.extend({
  first_name: DS.attr('string'),
  last_name: DS.attr('string'),
  nickname: DS.attr('string'),
  middle_name: DS.attr('string'),
  dob: DS.attr('date'),
  guid: DS.attr('string'),

  prettyDob: Ember.computed('dob', function() {
    return moment(this.get('dob')).format('MM/DD/YYYY');
  }),

  fullName: Ember.computed('first_name', 'last_name', 'nickname', 'middle_name', 'dob', function() {
    let nameParts = [];
    [
      'first_name', 'nickname',
      'middle_name', 'last_name'
    ].forEach((key) => {
      const namePart = this.get(key);
      if (Ember.isPresent(namePart)) {
        if (key === 'nickname') {
          nameParts.push(`"${namePart}"`);
        } else {
          nameParts.push(namePart);
        }
      }
    });

    let fullName = nameParts.join(" ");
    return `${fullName} - ${this.get('prettyDob')}`;
  })
});
