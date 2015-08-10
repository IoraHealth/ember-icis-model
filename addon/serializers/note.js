import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  isNewSerializerAPI: false,
  attrs: {
    issue_name:   { serialize: false },
    created_at:   { serialize: false },
    patient_name: { serialize: false },
    issue_id:     { serialize: false },
    closed_date:  { serialize: false },
    createdBy:    { key: 'created_by_uid' },
    issues:       { key: 'issue_ids' },
    patient:      { key: 'patient_guid' }
  }
});
