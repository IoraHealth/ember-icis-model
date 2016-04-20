import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  isNewSerializerAPI: true,
  attrs: {
    issue_name:   { serialize: false },
    created_at:   { serialize: false },
    updated_at:   { serialize: false },
    patient_name: { serialize: false },
    issue_id:     { serialize: false },
    closed_date:  { serialize: false },
    createdBy:    { key: 'created_by_uid' },
    issues:       { key: 'issue_ids' },
    signedBy:     { key: 'signed_by_uid' },
    patient:      { key: 'patient_guid' },
    updatedBy:    { key: 'updated_by_uid'},
    message_uid:          {},
    touch_point_date:     {},
    touch_point_type:     {},
    touch_point_sub_type: {}
  }
});
