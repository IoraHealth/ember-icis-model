import DS from 'ember-data';

export default DS.Model.extend({
  first_name: DS.attr('string'),
  last_name: DS.attr('string'),
  nickname: DS.attr('string'),
  middle_name: DS.attr('string'),
  dob: DS.attr('date'),
  guid: DS.attr('string'),

  prettyDob: function() {
    return moment(this.get('dob')).format('MM/DD/YYYY');
  }.property('dob'),

  fullName: function() {
    var fullName = this.get('first_name');
    if (this.get('nickname') !== "") {
      fullName += ' "' + this.get('nickname') + '" ';
    } else {
      fullName += " ";
    }

    fullName += this.get('middle_name') + " " + this.get('last_name') + " - " + this.get('prettyDob');
    return fullName;
  }.property('first_name', 'last_name', 'nickname', 'middle_name', 'dob')
});
