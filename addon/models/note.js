import DS from "ember-data";

export default DS.Model.extend({
  body:                 DS.attr('string'),
  issue_name:           DS.attr('string'),
  issue_id:             DS.attr('number'),
  created_at:           DS.attr('date'),
  updated_at:           DS.attr('date'),
  closed_date:          DS.attr('date'),
  patient_name:         DS.attr('string'),
  patient_guid:         DS.attr('string'),
  pin:                  DS.attr('string'),
  signed:               DS.attr('boolean'),
  signed_at:            DS.attr('date'),
  message_uid:          DS.attr('string'),
  issues:               DS.hasMany('issue'),
  updatedBy:            DS.belongsTo('staffMember', { async: true }),
  createdBy:            DS.belongsTo('staffMember', { async: true }),
  signedBy:             DS.belongsTo('staffMember', { async: true }),
  patient:              DS.belongsTo('patient'),
  touch_point_date:     DS.attr('date'),
  touch_point_type:     DS.attr('string'),
  touch_point_sub_type: DS.attr('string'),

  status: function() {
    if (this.get('closed_date')) {
      return 'closed';
    } else {
      var createdTime = moment(this.get('created_at'));
      var yesterday =   moment().subtract(24, 'hours');

      if (createdTime < yesterday) {
        return 'overdue';
      } else {
        return 'pending';
      }
    }
  }.property('closed_date'),

  closed: function() {
    if (this.get('status') === 'closed') {
      return true;
    } else {
      return false;
    }
  }.property('closed_date'),

  hasBeenUpdated: function() {
    return this.get('created_at').valueOf() !== this.get('updated_at').valueOf();
  }.property('created_at', 'updated_at'),

});
