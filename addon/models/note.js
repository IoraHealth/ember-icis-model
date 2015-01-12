import DS from "ember-data";

export default DS.Model.extend({
  body:         DS.attr('string'),
  issue_name:   DS.attr('string'),
  issue_id:     DS.attr('number'),
  created_at:   DS.attr('date'),
  closed_date:  DS.attr('date'),
  patient_name: DS.attr('string'),
  patient_guid: DS.attr('string'),

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
  }.property('closed_date')

  closed: function() {
    if (this.get('status') === 'closed') {
      return true;
    } else {
      return false;
    }
  }.property('closed_date')
})
